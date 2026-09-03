import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: '採用情報｜株式会社PARADISE8',
  description: '美容師として成長し、自分らしいキャリアを築く。PARADISE8の採用メッセージ、求める人物像、募集概要。',
};

const people = [
  ['01', '美容が、好き。', '技術、トレンド、デザイン。美容そのものを楽しみ、夢中になれる人。'],
  ['02', '成長を、止めない。', '今の技術に満足せず、新しいことを素直に学び続けられる人。'],
  ['03', 'お客様に、まっすぐ。', '技術だけでなく、目の前の一人と誠実に向き合える人。'],
  ['04', '仲間を、大切に。', '自分だけで完結せず、声を掛け合い、チームで前へ進める人。'],
  ['05', '可能性を、広げたい。', '美容師という枠を超えて、好きなことや新しい挑戦を仕事につなげたい人。'],
];

const growth = [
  ['01', '基礎から、順番に。', 'アシスタント業務からカットデザインまで、段階的に技術を積み上げます。現在の募集情報では、ジュニアスタイリストまで最短約1年半が目安です。'],
  ['02', '練習を、仕事の中へ。', '営業時間内の練習も取り入れながら、無理なく次のステップを目指せる教育体制を整えています。'],
  ['03', '新しい技術を、貪欲に。', 'カラー、髪質改善、カット。新しい技術や商材を積極的に学び、お客様への提案力に変えていきます。'],
];

const outline = [
  ['募集職種', 'スタイリスト / アシスタント'],
  ['応募資格', '美容師免許（取得見込みを含む）。現在の募集対象は最新の求人ページをご確認ください'],
  ['仕事内容', '美容室でのサロンワーク全般'],
  ['勤務地', '#01 ORIGINAL または #01 park hair&∞（茨城県日立市）'],
  ['雇用形態・給与', '経験・希望を伺い、面談および最新の募集ページでご案内します'],
  ['休日・福利厚生', '勤務店舗・雇用形態により異なります。応募時に最新情報をご確認ください'],
  ['応募方法', '最新の募集ページからエントリーしてください'],
];

export default function RecruitPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="04"
        eyebrow="RECRUIT"
        tone="blue"
        title={<>LOVE YOUR WORK.<br /><em>LIVE YOUR LIFE.</em></>}
        copy="美容師という仕事を、もっと楽しめる場所へ。経験者も、これから技術を身につける人も、それぞれの速度で成長できるチームを目指しています。"
      />

      <section className="recruit-hero-image">
        <Image src="/salon-original.jpg" alt="#01 ORIGINALのサロン空間" width={1800} height={1200} sizes="100vw" />
        <p><span>3× PLAY</span><span>5× WORK</span></p>
      </section>

      <section className="growth-section">
        <div className="growth-heading">
          <p className="section-index">GROWTH PATH</p>
          <h2>好きだけでは、<br />終わらせない。</h2>
          <p>技術を武器に変えるまで、急がせず、止めず、一人ひとりの成長に向き合います。進度や期間には個人差があります。</p>
        </div>
        <div className="growth-grid">
          {growth.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="recruit-message content-section">
        <p className="section-index">MESSAGE FOR YOU</p>
        <div className="recruit-message-grid">
          <h2>ここで身につくのは、<br />技術だけじゃない。</h2>
          <div>
            <p className="large-jp">自分の“好き”を、<br />仕事の可能性に変えよう。</p>
            <p>高い技術を磨くこと。お客様に喜んでもらうこと。仲間と遊び、語り、刺激を受けること。PARADISE8には、美容師としての成長と、自分らしい生き方をどちらも諦めない文化があります。</p>
            <p>美容から生まれたチームだからこそ、古着、アンティーク、食、訪問美容など、興味や得意を新しい仕事につなげていくこともできます。</p>
          </div>
        </div>
      </section>

      <section className="people-section">
        <p className="section-index light">WHO WE ARE LOOKING FOR</p>
        <h2>こんな人と、<br />働きたい。</h2>
        <div className="people-grid">
          {people.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="requirements-section content-section" id="requirements">
        <div className="requirements-heading">
          <p className="section-index">REQUIREMENTS</p>
          <h2>募集概要</h2>
          <p>募集条件は更新される場合があります。応募時にはリンク先の最新情報をご確認ください。</p>
        </div>
        <dl className="requirements-list">
          {outline.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
        </dl>
      </section>

      <section className="entry-section">
        <p>まずは、店と人を見に来てください。</p>
        <h2>見学・応募を<br />お待ちしています。</h2>
        <div className="entry-actions">
          <a href="https://work.beauty.hotpepper.jp/WC00022366/WS0000053513/" target="_blank" rel="noreferrer" className="solid-link">現在の募集情報を見る <span>↗</span></a>
        </div>
        <Link href="/contact" className="small-text-link">店舗・ブランドへのお問い合わせはこちら →</Link>
      </section>
      <SiteFooter />
    </main>
  );
}
