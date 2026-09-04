import type { Metadata } from 'next';
import { PageIntro } from '@/components/page-intro';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { RECRUIT_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'お問い合わせ｜株式会社PARADISE8',
  description: 'PARADISE8の採用情報と、各店舗・ブランドの予約・お問い合わせ先をご案内します。',
};

const contacts = [
  {
    type: 'RECRUIT', name: '#01 park hair&∞ 採用情報',
    note: '募集状況、応募条件、サロン見学について。公式リクルートページをご確認ください',
    actions: [['公式リクルートページを見る', RECRUIT_URL, '↗']],
  },
  {
    type: 'HAIR SALON', name: '#01 ORIGINAL',
    note: '施術のご予約、メニュー、空席状況について',
    actions: [['予約ページを開く', 'https://beauty.hotpepper.jp/slnH000380119/', '↗']],
  },
  {
    type: 'HAIR SALON', name: '#01 park hair&∞',
    note: '施術のご予約、メニュー、空席状況について',
    actions: [
      ['電話する', 'tel:0294514777', '0294-51-4777'],
      ['公式サイトを開く', 'https://01park-otto.com/', '↗'],
    ],
  },
  {
    type: 'ANTIQUES', name: 'OttO ANTIQUES',
    note: '商品、在庫、配送、店舗について',
    actions: [
      ['電話する', 'tel:0294513636', '0294-51-3636'],
      ['オンラインストアを開く', 'https://ottoantiques.jp/', '↗'],
    ],
  },
  {
    type: 'VINTAGE CLOTHING', name: '08 old clothing',
    note: '商品、在庫、オンラインストアについて',
    actions: [
      ['電話する', 'tel:07023849550', '070-2384-9550'],
      ['オンラインストアを開く', 'https://oldclothes08.base.shop/', '↗'],
    ],
  },
  {
    type: 'TONKATSU / DINING', name: 'まるいち おっとん',
    note: '席、コース、弁当、仕出し、デリバリーのご相談',
    actions: [
      ['電話する', 'tel:0294479647', '0294-47-9647'],
      ['公式サイトを開く', 'https://maruichiotton.com/h/', '↗'],
    ],
  },
];

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageIntro
        index="06"
        eyebrow="CONTACT"
        title={<>LET&apos;S TALK.<br /><em>LET&apos;S CREATE.</em></>}
        copy="採用情報から、各店舗の予約・商品のお問い合わせまで。目的に合う公開窓口をご利用ください。"
        image="/contact-salon.jpg"
        imageAlt="#01 ORIGINALのサロン空間"
        imagePosition="58% 50%"
      />

      <section className="contact-guide content-section">
        <p className="section-index">CONTACT DIRECTORY</p>
        <div>
          <p>受付時間は各店舗の営業時間に準じます。施術予約・在庫・営業日の最新情報は、各ブランドの公式ページでご確認ください。</p>
          <aside className="contact-status">
            <span>CORPORATE / SHANA</span>
            <p>法人・取材・協業および訪問美容 Shanaの専用窓口は、現在公開準備中です。</p>
          </aside>
        </div>
      </section>

      <section className="contact-list">
        {contacts.map((contact, index) => (
          <article key={contact.name}>
            <p className="contact-number">0{index + 1}</p>
            <div className="contact-name"><span>{contact.type}</span><h2>{contact.name}</h2><p>{contact.note}</p></div>
            <div className="contact-actions">
              {contact.actions.map(([label, href, detail]) => (
                <a href={href} key={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span>{label}</span><b>{detail}</b>
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="contact-note">
        <p>PLEASE NOTE</p>
        <ul>
          <li>営業時間・定休日は変更となる場合があります。</li>
          <li>店舗に関するお急ぎのご用件は、該当店舗へ直接お電話ください。</li>
          <li>営業・勧誘目的のご連絡はお断りする場合があります。</li>
        </ul>
      </section>
      <SiteFooter />
    </main>
  );
}
