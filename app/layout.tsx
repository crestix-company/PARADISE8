import type { Metadata } from 'next';
import './globals.css';
import { SiteMotion } from '@/components/site-motion';

const siteTitle = '株式会社PARADISE8｜CREATE YOUR PARADISE.';
const siteDescription = '茨城県日立市を拠点に、美容・ヴィンテージ・飲食・訪問美容を展開する株式会社PARADISE8。企業情報と採用情報をご案内します。';
const socialTitle = '株式会社PARADISE8';
const socialDescription = '茨城県日立市から、美容・ヴィンテージ・食・訪問美容を育てるチームです。';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paradise8-hitachi.s-nishita.chatgpt.site';
const squareSocialImage = `${siteUrl}/og-paradise8-square-v2.png`;
const landscapeSocialImage = `${siteUrl}/og-paradise8-v2.png`;

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社PARADISE8',
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description: siteDescription,
  address: {
    '@type': 'PostalAddress',
    postalCode: '316-0034',
    addressRegion: '茨城県',
    addressLocality: '日立市',
    streetAddress: '東成沢町1丁目6番14号',
    addressCountry: 'JP',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: '株式会社PARADISE8',
  alternates: { canonical: siteUrl },
  icons: { icon: `${siteUrl}/icon.png`, apple: `${siteUrl}/icon.png` },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: '株式会社PARADISE8',
    title: socialTitle,
    description: socialDescription,
    images: [
      { url: squareSocialImage, width: 1254, height: 1254, alt: '海を望む#01 park hair&∞のサロン空間', type: 'image/png' },
      { url: landscapeSocialImage, width: 1200, height: 630, alt: 'PARADISE8 — HITACHI / IBARAKI', type: 'image/png' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: socialTitle,
    description: socialDescription,
    images: [landscapeSocialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <SiteMotion />
        {children}
      </body>
    </html>
  );
}
