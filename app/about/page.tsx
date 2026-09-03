import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { RECRUIT_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: '私たちについて｜株式会社PARADISE8',
  description: 'PARADISE8が大切にする理念、未来像、行動の軸をご紹介します。',
};

const values = [
  ['01', '仲間の幸せ', 'まず、一緒に働く仲間が自分らしく、誇りを持って生きられること。'],
  ['02', '会社の繁栄', '個の成長をチームの力へ。地域に必要とされ続ける会社をつくること。'],
  ['03', '嘘をつかない', 'お客様にも、仲間にも、自分にも。正直さをすべての仕事の土台にすること。'],
  ['04', '言葉に責任を持つ', '約束したこと、口にした夢を、行動でかたちにすること。'],
  ['05', '己', '人のために尽くした仕事は、巡り巡って自分の幸せになると信じること。'],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="01"
        eyebrow="ABOUT US"
        title={<>THE FIRST STEP<br /><em>HAS NO LIMIT.</em></>}
        copy="0から勇気を持って1を踏み出す。私たちは美容から始まった感性を、暮らしと地域の新しい価値へ広げています。"
      />

      <section className="about-origin content-section">
        <div className="split-heading">
          <p className="section-index">MISSION / VISION</p>
          <h2><span className="type-phrase">人と未来の</span><wbr /><span className="type-phrase">可能性を、</span><br /><span className="type-phrase">もっと自由に。</span></h2>
        </div>
        <div className="about-origin-copy">
          <p className="large-jp">無限に成長。<br />無限に感謝。</p>
          <div>
            <p>時代は流れる。だから、その時代に合う技術とセンスを、仲間とともに無限に磨き続ける。PARADISE8に関わるすべての人へ感謝し、会社に深く貢献してくれた仲間の夢を叶えられるチームでありたいと考えています。</p>
            <p>妥協するくらいなら、やらない方がいい。私たちのこだわりは格好をつけるためではなく、目の前の誰かに、きちんと価値を返すためにあります。</p>
          </div>
        </div>
      </section>

      <section className="zero-one-panel">
        <div className="zero-one-type" aria-hidden="true"><span>0</span><i>→</i><span>1</span></div>
        <div className="zero-one-copy">
          <p className="section-index light">WHY “#01”?</p>
          <h2><span className="type-line">目指すのは、</span><span className="type-line">ただの一番</span><span className="type-line">じゃない。</span></h2>
          <p>0から新しいことを始める。0からの付き合いを、自分から歩み寄って育てる。そして、1番を目指すのではなく、ぶっちぎりの1番を目指す。美容室「#01」の名前には、そんな覚悟が込められています。</p>
        </div>
      </section>

      <section className="values-section content-section">
        <p className="section-index">OUR 5 PRINCIPLES</p>
        <div className="values-list">
          {values.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="play-work-banner">
        <p>PLAY 3× / WORK 5×</p>
        <h2><span className="type-line">遊びから絆を。</span><span className="type-line">仕事から</span><span className="type-line">恩返しを。</span></h2>
        <p>3倍遊んで絆を深め、合わせ鏡に映るDREAM TEAMをつくる。5倍働いて会社と社会に貢献し、感謝を持って恩返しする。</p>
        <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="outline-link">#01 park hair&amp;∞で働く <span>↗</span></Link>
      </section>
      <SiteFooter />
    </main>
  );
}
