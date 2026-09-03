import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '株式会社PARADISE8｜CREATE YOUR PARADISE.',
  description: '茨城県日立市を拠点に、美容・ヴィンテージ・飲食・訪問美容を展開する株式会社PARADISE8。企業情報と採用情報をご案内します。',
  icons: { icon: '/icon.png', apple: '/icon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
