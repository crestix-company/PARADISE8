import { access, readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('out');
const basePath = '/PARADISE8';
const businessLogos = [
  'logos/01-original.png',
  'logos/01-park.png',
  'logos/otto-antiques.png',
  'logos/08-old-clothes.png',
  'logos/otton.png',
  'logos/shana.jpg',
];
const requiredFiles = [
  'index.html',
  'about/index.html',
  'business/index.html',
  'story/index.html',
  'message/index.html',
  'company/index.html',
  'contact/index.html',
  'recruit/index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'salon-park-hero.jpg',
  'hero-founder.jpg',
  'portrait-team.jpg',
  'og-paradise8-square-v2.png',
  'og-paradise8-v2.png',
  'icon.png',
  'logos/paradise8.jpg',
  ...businessLogos,
];

const exists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  }));
  return files.flat();
};

const failures = [];

for (const relativePath of requiredFiles) {
  if (!(await exists(path.join(outputDir, relativePath)))) {
    failures.push(`Missing required output: ${relativePath}`);
  }
}

const htmlFiles = (await walk(outputDir)).filter((filePath) => filePath.endsWith('.html'));

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, 'utf8');
  const relativeHtmlFile = path.relative(outputDir, htmlFile);

  if (html.includes('paradise8-hitachi.s-nishita.chatgpt.site')) {
    failures.push(`${relativeHtmlFile}: contains the non-GitHub production URL`);
  }

  const references = [];
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/gi)) references.push(match[1]);
  for (const match of html.matchAll(/\b(?:srcset|imagesrcset)="([^"]+)"/gi)) {
    references.push(...match[1].split(',').map((candidate) => candidate.trim().split(/\s+/)[0]));
  }

  for (const reference of references) {
    if (!reference.startsWith('/')) continue;
    if (reference !== basePath && !reference.startsWith(`${basePath}/`)) {
      failures.push(`${relativeHtmlFile}: unprefixed root reference ${reference}`);
      continue;
    }

    const withoutQuery = reference.split(/[?#]/, 1)[0];
    const relativeTarget = decodeURIComponent(withoutQuery.slice(basePath.length)).replace(/^\//, '');
    const candidate = path.join(outputDir, relativeTarget);
    const candidateStat = await stat(candidate).catch(() => null);
    const resolves = candidateStat?.isDirectory()
      ? await exists(path.join(candidate, 'index.html'))
      : Boolean(candidateStat);

    if (!resolves) failures.push(`${relativeHtmlFile}: missing referenced output ${reference}`);
  }
}

const homeHtml = await readFile(path.join(outputDir, 'index.html'), 'utf8');
const recruitHtml = await readFile(path.join(outputDir, 'recruit/index.html'), 'utf8');
const businessHtml = await readFile(path.join(outputDir, 'business/index.html'), 'utf8');
const messageHtml = await readFile(path.join(outputDir, 'message/index.html'), 'utf8');
const storyHtml = await readFile(path.join(outputDir, 'story/index.html'), 'utf8');
const leadershipSource = await readFile(path.resolve('lib/leadership.ts'), 'utf8');
const paragraphGroups = [...leadershipSource.matchAll(/paragraphs:\s*\[([\s\S]*?)\],/g)]
  .map((group) => [...group[1].matchAll(/'([^']+)'/g)].map((match) => match[1]));
const executives = [
  { id: 'president-message', name: '中川雄貴', role: '代表取締役', photo: 'hero-founder.jpg', paragraphs: 12 },
  { id: 'director-message', name: '堤耕助', role: '取締役', photo: 'portrait-team.jpg', paragraphs: 8 },
];

executives.forEach((executive, index) => {
  const section = (messageHtml.match(new RegExp(`<section[^>]*id="${executive.id}"[^>]*>([\\s\\S]*?)</section>`))?.[1] ?? '').replace(/<!--[\s\S]*?-->/g, '');
  const paragraphs = paragraphGroups[index] ?? [];
  if (!section.includes(`alt="${executive.role} ${executive.name}"`) || !section.includes(`${basePath}/${executive.photo}`)) {
    failures.push(`message/index.html: incorrect portrait/name pairing for ${executive.name}`);
  }
  if (!section.includes(`${executive.role}挨拶`) || paragraphs.length !== executive.paragraphs || paragraphs.some((paragraph) => !section.includes(paragraph))) {
    failures.push(`message/index.html: incomplete greeting for ${executive.name}`);
  }
  if (!messageHtml.includes(`href="#${executive.id}"`)) {
    failures.push(`message/index.html: missing jump link for ${executive.name}`);
  }
});
if (!messageHtml.includes('As long as there is hope, there is a possibility.') || !messageHtml.includes('希望ある限り、可能性がある。')) {
  failures.push('message/index.html: missing closing motto');
}
if (storyHtml.includes('portrait-team.jpg') || storyHtml.includes('<time>2007</time>') || !storyHtml.includes('<time>2008</time>')) {
  failures.push('story/index.html: history still has the director portrait or an outdated founding year');
}
if (!(await readFile(path.join(outputDir, 'sitemap.xml'), 'utf8')).includes(`${basePath}/message`)) {
  failures.push('sitemap.xml: new message page is missing');
}

if ((businessHtml.match(/<h2 class="brand-logo-heading">/g) ?? []).length !== businessLogos.length) {
  failures.push(`business/index.html: expected ${businessLogos.length} supplied logos as brand headings`);
}
for (const logo of businessLogos) {
  if (!businessHtml.includes(`${basePath}/${logo}`)) {
    failures.push(`business/index.html: missing supplied logo ${logo}`);
  }
}
for (const page of ['index.html', 'about/index.html', 'business/index.html', 'story/index.html', 'message/index.html', 'company/index.html', 'contact/index.html']) {
  const html = await readFile(path.join(outputDir, page), 'utf8');
  const header = html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0] ?? '';
  if (!header.includes(`${basePath}/logos/paradise8.jpg`) || !header.includes('PARADISE8 ホーム')) {
    failures.push(`${page}: supplied company logo or accessible home link is missing from the header`);
  }
  if (!header.includes(`href="${basePath}/message/"`)) {
    failures.push(`${page}: message page is missing from navigation`);
  }
  const recruitLinks = [...html.matchAll(/<a\b[^>]*class="[^"]*\brecruit-link\b[^"]*"[^>]*>[\s\S]*?<\/a>/g)].map(match => match[0]);
  const expectedRecruitLabel = '＃01 ORIGINAL＃01 park hair&∞ 採用情報';
  if ((page !== 'message/index.html' && !recruitLinks.length) || recruitLinks.some(link => {
    const label = link.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/↗/g, '').trim();
    return label !== expectedRecruitLabel || !link.includes('href="https://01park-otto.com/recruit/"');
  })) {
    failures.push(`${page}: recruitment label or destination is inconsistent`);
  }
  if (!header.includes(`aria-label="RECRUIT：${expectedRecruitLabel.replace(/&/g, '&amp;')}"`)) {
    failures.push(`${page}: recruitment navigation has an outdated accessible label`);
  }
}

if (!homeHtml.includes('CREATE YOUR') || !homeHtml.includes('PARADISE.')) {
  failures.push('index.html: expected hero copy was not rendered');
}
if (!homeHtml.includes('og-paradise8-square-v2.png') || !homeHtml.includes('og-paradise8-v2.png')) {
  failures.push('index.html: refreshed social preview images are missing');
}
if (!recruitHtml.includes('https://01park-otto.com/recruit/')) {
  failures.push('recruit/index.html: expected external recruit destination is missing');
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Verified ${requiredFiles.length} required outputs and ${htmlFiles.length} HTML files for ${basePath}/.`);
