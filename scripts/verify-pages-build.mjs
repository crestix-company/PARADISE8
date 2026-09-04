import { access, readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const outputDir = path.resolve('out');
const basePath = '/PARADISE8';
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
