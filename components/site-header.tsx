'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!home) return;
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [home]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
    setMenuOpen(false);
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDetailsElement>) => {
    const menu = menuRef.current;
    if (!menu?.open) return;

    const focusable = Array.from(menu.querySelectorAll<HTMLElement>('summary, a'));
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      window.requestAnimationFrame(() => menu.querySelector<HTMLElement>('summary')?.focus());
      return;
    }

    if (event.key !== 'Tab' || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

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
      <details
        className="mobile-menu"
        ref={menuRef}
        onToggle={(event) => setMenuOpen(event.currentTarget.open)}
        onKeyDown={handleMenuKeyDown}
      >
        <summary aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'} aria-expanded={menuOpen}><i></i><i></i></summary>
        <nav aria-label="モバイルナビゲーション">
          {nav.map(([label, href], index) => (
            <Link href={href} key={href} onClick={closeMenu} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><b>0{index + 1}</b>{label}<span>→</span></Link>
          ))}
          <Link href={RECRUIT_URL} onClick={closeMenu} target="_blank" rel="noreferrer"><b>06</b>RECRUIT<span>↗</span></Link>
        </nav>
      </details>
    </header>
  );
}
