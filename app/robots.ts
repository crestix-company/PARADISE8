import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://paradise8-hitachi.s-nishita.chatgpt.site/sitemap.xml',
  };
}
