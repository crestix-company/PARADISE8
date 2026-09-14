'use client';

import { useEffect } from 'react';
import { RECRUIT_URL } from '@/lib/links';
import { RecruitLabel } from '@/components/recruit-label';

export function RecruitRedirect() {
  useEffect(() => {
    window.location.replace(RECRUIT_URL);
  }, []);

  return (
    <main className="redirect-page">
      <p>RECRUIT</p>
      <h1><RecruitLabel />へ移動します。</h1>
      <a href={RECRUIT_URL}>移動しない場合はこちら <span>↗</span></a>
    </main>
  );
}
