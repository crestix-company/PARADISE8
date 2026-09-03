import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: '会社概要｜株式会社PARADISE8',
  description: '株式会社PARADISE8の会社概要、所在地、事業内容、関連するブランド。',
};

const company = [
  ['会社名', '株式会社PARADISE8'],
  ['法人番号指定年月', '2026年4月'],
  ['法人番号', '4050001058260'],
  ['所在地', '〒316-0034 茨城県日立市東成沢町1丁目6番14号'],
  ['事業内容', '美容室・ヘアサロン、美容関連、ヴィンテージ家具・雑貨・古着、飲食、訪問美容に関する事業'],
  ['事業・ブランド', '#01 ORIGINAL / #01 park hair&∞ / OttO ANTIQUES / 08 old clothing / まるいち おっとん / 訪問美容 Shana'],
  ['事業エリア', '茨城県日立市'],
];

export default function CompanyPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="05"
        eyebrow="COMPANY"
        title={<>ROOTED HERE.<br /><em>BOUNDLESS AHEAD.</em></>}
        copy="海とものづくりの街、茨城県日立市から。好きなことを本気で仕事にし、仲間とともに新しい地域の景色をつくっていきます。"
      />

      <section className="company-image"><Image src="/paradise-garage.jpg" alt="日立市東成沢町のPARADISE GARAGE外観" width={1800} height={1200} sizes="100vw" /></section>

      <section className="company-overview content-section">
        <div className="company-overview-heading">
          <p className="section-index">OVERVIEW</p>
          <h2>会社概要</h2>
        </div>
        <dl className="company-table">
          {company.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
        </dl>
      </section>

      <section className="company-location">
        <div>
          <p className="section-index light">REGISTERED OFFICE</p>
          <h2>日立に根を張る、<br />私たちの現在地。</h2>
          <p>〒316-0034<br />茨城県日立市東成沢町1丁目6番14号</p>
          <a href="https://www.google.com/maps/search/?api=1&query=%E8%8C%A8%E5%9F%8E%E7%9C%8C%E6%97%A5%E7%AB%8B%E5%B8%82%E6%9D%B1%E6%88%90%E6%B2%A2%E7%94%BA1-6-14" target="_blank" rel="noreferrer" className="outline-link">GOOGLE MAP <span>↗</span></a>
        </div>
        <figure><Image src="/salon-park.jpg" alt="海を望む#01 parkのサロン空間" width={1600} height={1200} sizes="(max-width: 800px) 100vw, 60vw" /></figure>
      </section>

      <section className="company-links content-section">
        <p className="section-index">EXPLORE MORE</p>
        <div>
          <Link href="/about">理念を知る <span>ABOUT ↗</span></Link>
          <Link href="/story">歩みを知る <span>STORY ↗</span></Link>
          <Link href="/business">事業を知る <span>BUSINESS ↗</span></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
