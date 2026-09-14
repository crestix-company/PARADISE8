import type { Metadata } from 'next';
import { RecruitRedirect } from './recruit-redirect';
import { RECRUIT_LABEL } from '@/lib/links';

export const metadata: Metadata = {
  title: '採用情報｜株式会社PARADISE8',
  description: `${RECRUIT_LABEL}ページへご案内します。`,
  robots: { index: false, follow: true },
};

export default function RecruitPage() {
  return <RecruitRedirect />;
}
