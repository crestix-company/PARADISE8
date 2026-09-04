'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RECRUIT_URL } from '@/lib/links';

const nav = [
  ['ABOUT', '/about'],
  ['BUSINESS', '/business'],
  ['STORY', '/story'],
  ['COMPANY', '/company'],
  ['CONTACT', '/contact'],
] as const;

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!home) return;
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [home]);

  return (
    <header className={`site-header${home ? ' site-header--home' : ''}${scrolled ? ' site-header--scrolled' : ''}`}>
      <Link href="/" className="wordmark" aria-label="PARADISE8 ホーム">
        <b>PARADISE</b><i>8</i><small>HITACHI / IBARAKI</small>
      </Link>
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {nav.map(([label, href]) => (
          <Link href={href} key={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{label}</Link>
        ))}
      </nav>
      <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="header-cta">RECRUIT <span>↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="メニューを開く"><i></i><i></i></summary>
        <nav aria-label="モバイルナビゲーション">
          {nav.map(([label, href], index) => (
            <Link href={href} key={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><b>0{index + 1}</b>{label}<span>→</span></Link>
          ))}
          <Link href={RECRUIT_URL} target="_blank" rel="noreferrer"><b>06</b>RECRUIT<span>↗</span></Link>
        </nav>
      </details>
    </header>
  );
}
