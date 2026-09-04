import type { Metadata } from 'next';
import { RecruitRedirect } from './recruit-redirect';

export const metadata: Metadata = {
  title: '採用情報｜株式会社PARADISE8',
  description: '#01 park hair&∞の採用情報ページへご案内します。',
  robots: { index: false, follow: true },
};

export default function RecruitPage() {
  return <RecruitRedirect />;
}
