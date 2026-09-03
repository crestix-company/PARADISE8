import Link from 'next/link';
import { RECRUIT_URL } from '@/lib/links';

const nav = [
  ['ABOUT', '/about'],
  ['BUSINESS', '/business'],
  ['STORY', '/story'],
  ['RECRUIT', RECRUIT_URL],
  ['COMPANY', '/company'],
] as const;

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className={`site-header${home ? ' site-header--home' : ''}`}>
      <Link href="/" className="wordmark" aria-label="PARADISE8 ホーム">
        <span>P</span>ARADISE<span>8</span>
      </Link>
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {nav.map(([label, href]) => (
          <Link href={href} key={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{label}</Link>
        ))}
      </nav>
      <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="header-cta">JOIN US <span>↗</span></Link>
      <details className="mobile-menu">
        <summary aria-label="メニューを開く"><i></i><i></i></summary>
        <nav aria-label="モバイルナビゲーション">
          {nav.map(([label, href], index) => (
            <Link href={href} key={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><b>0{index + 1}</b>{label}<span>↗</span></Link>
          ))}
          <Link href="/contact"><b>06</b>CONTACT<span>↗</span></Link>
        </nav>
      </details>
    </header>
  );
}
