import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paradise8-hitachi.s-nishita.chatgpt.site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/business', '/story', '/company', '/contact'].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date('2026-09-04'),
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : 0.7,
  }));
}
