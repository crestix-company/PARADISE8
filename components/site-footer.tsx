import Link from 'next/link';
import { RECRUIT_URL } from '@/lib/links';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p className="footer-kicker">READY TO CREATE YOUR PARADISE?</p>
        <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="footer-recruit">JOIN OUR<br />DREAM TEAM <span>↗</span></Link>
      </div>
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
