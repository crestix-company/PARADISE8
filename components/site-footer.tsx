import Link from 'next/link';
import { RECRUIT_URL } from '@/lib/links';

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  return (
    <footer className="site-footer">
      {!compact && (
        <div className="footer-top">
          <div>
            <p className="footer-kicker">RECRUIT / #01 PARK HAIR&amp;∞</p>
            <h2>美容師という仕事を、<br />もっと楽しめる場所へ。</h2>
          </div>
          <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="footer-recruit"><span>VIEW RECRUIT</span><b>↗</b></Link>
        </div>
      )}
      <div className="footer-grid">
        <Link href="/" className="footer-logo">PARADISE<span>8</span></Link>
        <div>
          <p>株式会社PARADISE8</p>
          <p>〒316-0034<br />茨城県日立市東成沢町1丁目6番14号</p>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link href="/about">ABOUT</Link>
          <Link href="/business">BUSINESS</Link>
          <Link href="/story">STORY</Link>
          <Link href={RECRUIT_URL} target="_blank" rel="noreferrer">RECRUIT</Link>
          <Link href="/company">COMPANY</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <p className="copyright">© 2026 PARADISE8</p>
      </div>
    </footer>
  );
}
