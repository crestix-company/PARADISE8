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
];
const requiredFiles = [
  'index.html',
  'about/index.html',
  'business/index.html',
  'story/index.html',
  'company/index.html',
  'contact/index.html',
  'recruit/index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'salon-park-hero.jpg',
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

if ((businessHtml.match(/<h2 class="brand-logo-heading">/g) ?? []).length !== businessLogos.length) {
  failures.push('business/index.html: expected five supplied logos as brand headings');
}
for (const logo of businessLogos) {
  if (!businessHtml.includes(`${basePath}/${logo}`)) {
    failures.push(`business/index.html: missing supplied logo ${logo}`);
  }
}
for (const page of ['index.html', 'about/index.html', 'business/index.html', 'story/index.html', 'company/index.html', 'contact/index.html']) {
  const html = await readFile(path.join(outputDir, page), 'utf8');
  const header = html.match(/<header\b[^>]*>[\s\S]*?<\/header>/)?.[0] ?? '';
  if (!header.includes(`${basePath}/logos/paradise8.jpg`) || !header.includes('PARADISE8 ホーム')) {
    failures.push(`${page}: supplied company logo or accessible home link is missing from the header`);
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
