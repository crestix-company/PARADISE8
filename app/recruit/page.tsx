import { redirect } from 'next/navigation';
import { RECRUIT_URL } from '@/lib/links';

export default function RecruitPage() {
  redirect(RECRUIT_URL);
}
