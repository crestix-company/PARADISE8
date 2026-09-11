import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { RECRUIT_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: '創業者のストーリー｜株式会社PARADISE8',
  description: '創業者・中川雄貴の原点と、2008年の小さな美容室からPARADISE8へ続く歩み。',
};

const timeline: [string, ReactNode][] = [
  ['1982', '名古屋に生まれる。3歳で茨城県日立市へ。'],
  ['1988', '陶芸を通じて、ものづくりの楽しさに触れる。'],
  ['1995', '古着が好きになり、ミシンを使って自分の服をカスタマイズ。自分の手で“オリジナル”を生み出す面白さを知る。'],
  ['2003', <>
    <span className="timeline-sentence"><span className="type-phrase">地元の美容室に就職し、</span><wbr /><span className="type-phrase">通信課程で美容師資格を取得。</span></span>
    <span className="timeline-sentence"><span className="type-phrase">数々の技術コンテストで</span><wbr /><span className="type-phrase">受賞を重ね、</span><wbr /><span className="type-phrase">全国大会で5位に入賞。</span></span>
  </>],
  ['2008', '日立市に自身初の美容室「OttO」を立ち上げる。'],
  ['2012', <>
    <span className="timeline-sentence"><span className="type-phrase">「OttO SECOND」と</span><wbr /><span className="type-phrase">「ottoカフェ」を出店。</span></span>
    <span className="timeline-sentence"><span className="type-phrase">仕事と遊びと食が交わる</span><wbr /><span className="type-phrase">空間づくりを始める。</span></span>
  </>],
  ['2015', '店と働き方を見つめ直す転機を迎え、次の形を模索する。'],
  ['2017', '美容室「#01」とOttO ANTIQUESをオープン。美容、古着、アンティークの世界を一つにつなぐ。'],
  ['2023', 'ミス・ユニバース・ジャパンのヘアチームに参加。'],
  ['2024', '海岸沿いの現在地へ移転。異なる事業が共存するPARADISE GARAGEを育てる。'],
  ['2026', '株式会社PARADISE8として新たな段階へ。仲間の夢を叶える次のステージを目指す。'],
];

export default function StoryPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="03"
        eyebrow="FOUNDER'S STORY"
        title={<>MAKE IT.<br /><em>MEAN IT.</em></>}
        copy="美容・古着・アンティークを結んだ原点から、食、訪問美容へ。好きなものと向き合いながら、活動の幅を広げてきました。"
        image="/salon-original-wide.jpg"
        imageAlt="PARADISE8の原点である美容室#01 ORIGINALのサロン空間"
        imagePosition="48% 50%"
      />

      <section className="founder-profile content-section">
        <figure className="founder-photo"><Image src="/salon-original.jpg" alt="PARADISE8の原点である美容室#01 ORIGINAL" width={1200} height={1600} sizes="(max-width: 800px) 100vw, 48vw" /></figure>
        <div className="founder-copy">
          <p className="section-index">YUKI NAKAGAWA / FOUNDER & CRAFTSMAN</p>
          <h2><span className="type-line">お客様より、</span><span className="type-line">お客様の髪に</span><span className="type-line">こだわる。</span></h2>
          <p>美容師歴20年以上。髪質や状態を見極めるカット、ハイライト、バレイヤージュ、髪質改善などを通して、一人ひとりにとっての“その人らしさ”を追求してきました。</p>
          <p>けれど、こだわってきたのは髪だけではありません。服も、家具も、店の空気も、仲間の働き方も。好きなものを中途半端にせず、自分たちの手で理想の場所をつくり続けています。</p>
          <Link href="/message" className="text-link">代表取締役・取締役の挨拶を読む<span>MESSAGE →</span></Link>
        </div>
      </section>

      <section className="timeline-section content-section" id="history" aria-labelledby="history-title">
        <div className="timeline-heading">
          <p className="section-index">HISTORY</p>
          <h2 id="history-title"><span className="type-line">好きなことを、</span><span className="type-line">本気で重ねてきた。</span></h2>
        </div>
        <ol className="timeline">
          {timeline.map(([year, text]) => <li key={year}><time>{year}</time><p>{text}</p></li>)}
        </ol>
      </section>

      <section className="story-next">
        <p>THE NEXT CHAPTER IS YOURS.</p>
        <h2><span className="type-line">次の物語を、</span><span className="type-phrase">一緒に</span><wbr /><span className="type-phrase">つくろう。</span></h2>
        <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="solid-link">採用情報を見る <span>↗</span></Link>
      </section>
      <SiteFooter compact />
    </main>
  );
}
