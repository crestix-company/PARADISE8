import type { Metadata } from 'next';
import Image from 'next/image';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: '事業・ブランド｜株式会社PARADISE8',
  description: '#01 ORIGINAL、#01 park、OttO ANTIQUES、08 old clothing、まるいち おっとん、訪問美容Shanaをご紹介します。',
};

const brands = [
  {
    number: '01', type: 'HAIR SALON', name: '#01 ORIGINAL', image: '/salon-original.jpg',
    description: '骨格・髪質・ダメージ・ファッションまで見つめ、一人ひとりだけのスタイルをつくる。セニングに頼らないカット、デザインカラー、髪質改善を追求するサロンです。',
    info: ['茨城県日立市鹿島町1-14-7 永井ビル1F', '平日 10:00–19:00 / 土日祝 9:00–18:00', '火曜定休'],
    href: 'https://beauty.hotpepper.jp/slnH000380119/', cta: '予約・サロン情報',
  },
  {
    number: '02', type: 'HAIR SALON', name: '#01 park hair&∞', image: '/salon-park.jpg',
    description: '工場跡をリノベーションした、海を望むサロン。傷ませない技術と、自宅でも扱いやすい再現性を大切に、未来の髪まで考えた提案を行います。',
    info: ['茨城県日立市東成沢町1-6-14 2F', 'TEL 0294-51-4777', '最新の営業時間・営業日は公式サイトでご確認ください'],
    href: 'https://01park-otto.com/', cta: '公式サイト',
  },
  {
    number: '03', type: 'ANTIQUES', name: 'OttO ANTIQUES', image: '/otto-antiques.jpg',
    description: 'アメリカを中心に集めた、家具・照明・看板・雑貨。古いものが持つ物語と、今の暮らしをつなぐ“一点もの”との出会いを提案します。',
    info: ['茨城県日立市東成沢町1-6-14', '10:00–19:00', 'TEL 0294-51-3636'],
    href: 'https://ottoantiques.jp/', cta: 'オンラインストア',
  },
  {
    number: '04', type: 'VINTAGE CLOTHING', name: '08 old clothing', image: '/old-clothing.jpg',
    description: '1990年代を中心に、背景まで面白い古着をセレクト。ヴィンテージを「文化」として気軽に楽しめる、ガレージのようなショップです。',
    info: ['茨城県日立市東成沢町1-6-14', '11:00–20:00 / 火曜定休', 'TEL 070-2384-9550'],
    href: 'https://oldclothes08.base.shop/', cta: 'オンラインストア',
  },
  {
    number: '05', type: 'TONKATSU / DINING', name: 'まるいち おっとん', image: '/otton-dining.jpg',
    description: '全国から選び抜いた素材を、まっすぐおいしく。とんかつを中心に、食事の時間そのものを楽しめる一皿と空間を届けます。',
    info: ['茨城県日立市弁天町1-10-11 N1ビル102', '昼 11:00–14:00 / 夜営業あり', 'TEL 0294-47-9647'],
    href: 'https://maruichiotton.com/h/', cta: '公式サイト',
  },
  {
    number: '06', type: 'HOME VISIT BEAUTY', name: '訪問美容 Shana', image: '/shana-logo.jpg',
    description: '「髪型ひとつで、毎日がもっと楽しく」を掲げる訪問美容ブランド。',
    info: ['サービス詳細・受付情報は公開準備中です'],
    href: '/contact', cta: '公開中の窓口情報を見る',
  },
];

export default function BusinessPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="02"
        eyebrow="BUSINESS / BRANDS"
        tone="dark"
        title={<>ONE TEAM.<br /><em>MANY CULTURES.</em></>}
        copy="美容、ヴィンテージ、食、訪問ケア。違うように見える仕事をつなぐのは、人の毎日を少し面白く、少し豊かにしたいという同じ想いです。"
      />
      <section className="brand-intro content-section">
        <p className="section-index">OUR BRANDS & PROJECTS</p>
        <h2><span className="type-line">美しさは、</span><span className="type-line">髪の中だけに</span><span className="type-line">ない。</span></h2>
        <p>技術も、服も、家具も、食事も、誰かを想って届ける時間も。私たちは、日立の街に根を張りながら、暮らしを彩る複数のブランドを育てています。</p>
      </section>
      <section className="brand-list">
        {brands.map((brand, index) => (
          <article className={`brand-card brand-card--${index % 2 ? 'reverse' : 'normal'}`} key={brand.name}>
            <figure>
              <Image className={brand.image === '/shana-logo.jpg' ? 'brand-image brand-image--logo' : 'brand-image'} src={brand.image} alt={`${brand.name}のイメージ`} width={1600} height={1200} sizes="(max-width: 800px) 100vw, 55vw" />
            </figure>
            <div className="brand-card-copy">
              <p className="brand-meta"><span>{brand.number}</span>{brand.type}</p>
              <h2>{brand.name}</h2>
              <p className="brand-description">{brand.description}</p>
              <ul>{brand.info.map(item => <li key={item}>{item}</li>)}</ul>
              <a href={brand.href} target={brand.href.startsWith('http') ? '_blank' : undefined} rel={brand.href.startsWith('http') ? 'noreferrer' : undefined} className="text-link">
                {brand.cta} <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
