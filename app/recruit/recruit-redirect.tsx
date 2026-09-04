'use client';

import { useEffect } from 'react';
import { RECRUIT_URL } from '@/lib/links';

export function RecruitRedirect() {
  useEffect(() => {
    window.location.replace(RECRUIT_URL);
  }, []);

  return (
    <main className="redirect-page">
      <p>RECRUIT</p>
      <h1>#01 park hair&amp;∞の<br />採用情報へ移動します。</h1>
      <a href={RECRUIT_URL}>移動しない場合はこちら <span>↗</span></a>
    </main>
  );
}
