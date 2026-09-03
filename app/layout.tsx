import type { Metadata } from 'next';
import './globals.css';

const siteTitle = '株式会社PARADISE8｜CREATE YOUR PARADISE.';
const siteDescription = '茨城県日立市を拠点に、美容・ヴィンテージ・飲食・訪問美容を展開する株式会社PARADISE8。企業情報と採用情報をご案内します。';
const siteUrl = 'https://paradise8-hitachi.s-nishita.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: '株式会社PARADISE8',
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: '株式会社PARADISE8',
    title: siteTitle,
    description: siteDescription,
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'CREATE YOUR PARADISE. — PARADISE8' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
