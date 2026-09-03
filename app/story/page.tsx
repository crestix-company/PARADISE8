import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: '創業者のストーリー｜株式会社PARADISE8',
  description: '創業者・中川雄貴の原点と、2007年の独立からPARADISE8へ続く歩み。',
};

const timeline = [
  ['1982', '名古屋に生まれる。3歳で茨城県日立市へ。'],
  ['1988', '陶芸を通じて、ものづくりの楽しさに触れる。'],
  ['1995', '古着が好きになり、ミシンを使って自分の服をカスタマイズ。自分の手で“オリジナル”を生み出す面白さを知る。'],
  ['2001', '地元の美容室に就職。通信で美容師資格を取得し、技術コンテストにも挑戦。'],
  ['2003', '技術コンテストへの挑戦を重ね、美容師としての表現を磨く。'],
  ['2007', '日立市で最初の美容室「OttO」を立ち上げる。'],
  ['2012', '2店舗目「OttO SECOND」を出店。仕事と遊びが交わる空間づくりを始める。'],
  ['2015', '店と働き方を見つめ直す転機を迎え、次の形を模索する。'],
  ['2017', '美容室「#01」とOttO ANTIQUESをオープン。美容、古着、アンティークの世界を一つにつなぐ。'],
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
        tone="orange"
        title={<>MAKE IT.<br /><em>MEAN IT.</em></>}
        copy="美容室から始まった一歩は、古着、アンティーク、食、訪問美容へ。すべては“日立にお洒落な人を増やしたい”という真っ直ぐな衝動から始まりました。"
      />

      <section className="founder-profile content-section">
        <figure className="founder-photo"><Image src="/hero-founder.jpg" alt="PARADISE8のポートレート" width={1200} height={1600} sizes="(max-width: 800px) 100vw, 48vw" /></figure>
        <div className="founder-copy">
          <p className="section-index">YUKI NAKAGAWA / FOUNDER & CRAFTSMAN</p>
          <h2>お客様より、<br />お客様の髪にこだわる。</h2>
          <p>美容師歴20年以上。髪質や状態を見極めるカット、ハイライト、バレイヤージュ、髪質改善などを通して、一人ひとりにとっての“その人らしさ”を追求してきました。</p>
          <p>けれど、こだわってきたのは髪だけではありません。服も、家具も、店の空気も、仲間の働き方も。好きなものを中途半端にせず、自分たちの手で理想の場所をつくり続けています。</p>
        </div>
      </section>

      <section className="message-section">
        <p className="section-index light">WHAT WE AIM FOR</p>
        <div className="message-headline">
          <p>美容師がもっと美容を<br />楽しめる会社をつくる。</p>
        </div>
        <div className="message-body">
          <p>美容師という仕事は、技術だけで完結する仕事ではありません。</p>
          <p>目の前のお客様に喜んでもらうこと。新しい技術を学ぶこと。仲間と一緒に成長すること。そのすべてが、美容師という仕事の面白さだと思っています。</p>
          <p>PARADISE8では、一人ひとりが自分の可能性を広げながら、美容師として長く活躍できる環境をつくっていきたい。お客様にとっても、働くスタッフにとっても、「ここに来て良かった」と思える場所をつくる。それが私たちの目指す会社です。</p>
        </div>
      </section>

      <section className="timeline-section content-section">
        <div className="timeline-heading">
          <p className="section-index">HISTORY</p>
          <h2>雑貨も家具も古着もヘアも。<br />“かけ算”でキマりまくる。</h2>
          <figure><Image src="/portrait-team.jpg" alt="PARADISE8をつくる人" width={1200} height={1600} sizes="(max-width: 800px) 82vw, 29vw" /></figure>
        </div>
        <ol className="timeline">
          {timeline.map(([year, text]) => <li key={year}><time>{year}</time><p>{text}</p></li>)}
        </ol>
      </section>

      <section className="story-next">
        <p>THE NEXT CHAPTER IS YOURS.</p>
        <h2>次の物語を、<br />一緒につくろう。</h2>
        <Link href="/recruit" className="solid-link">採用情報を見る <span>↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
