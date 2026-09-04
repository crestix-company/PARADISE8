import Link from 'next/link';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { RECRUIT_URL } from '@/lib/links';

export default function Home() {
  return (
    <main>
      <SiteHeader home />

      <section className="salon-hero" aria-labelledby="hero-title">
        <div className="salon-hero-media" role="img" aria-label="海を望む#01 park hair&∞のサロン空間">
          <Image className="salon-hero-image salon-hero-image--desktop" src="/salon-park-hero.jpg" alt="" width={1600} height={1200} sizes="100vw" priority />
          <Image className="salon-hero-image salon-hero-image--mobile" src="/salon-park-portrait.jpg" alt="" width={1108} height={1477} sizes="100vw" priority />
        </div>
        <div className="salon-hero-overlay" aria-hidden="true" />
        <div className="salon-hero-copy">
          <p className="salon-hero-kicker">HAIR DESIGN / HITACHI, IBARAKI</p>
          <h1 id="hero-title"><span>CREATE YOUR</span><em>PARADISE.</em></h1>
          <p className="salon-hero-jp">美容の可能性を、もっと自由に。</p>
        </div>
        <div className="salon-hero-signature" aria-label="PARADISE8のサロン">
          <span>01 / #01 park hair&amp;∞</span>
          <span>02 / #01 ORIGINAL</span>
        </div>
        <a className="salon-hero-scroll" href="#about" aria-label="次のセクションへ移動">SCROLL</a>
      </section>

      <section className="home-vision" id="about">
        <div className="home-vision-inner">
          <p className="section-index">01 / OUR PHILOSOPHY</p>
          <p className="home-vision-en">UNLIMITED GROWTH. UNLIMITED GRATITUDE.</p>
          <h2>無限に成長。<br />無限に感謝。</h2>
          <p className="home-vision-lead">時代に合わせた技術とセンスを、<br />仲間とともに磨き続ける。</p>
          <p className="home-vision-body">一番に仲間の幸せを。言葉に責任を持ち、できることの一つひとつに妥協なくこだわる。PARADISE8は、美容から始まった感性で、地域の日常に新しい選択肢をつくるチームです。</p>
          <div className="home-vision-link"><Link href="/about" className="outline-link">私たちについて <span>→</span></Link></div>
        </div>
      </section>

      <section className="home-salons" id="salons">
        <div className="home-salons-heading">
          <p className="section-index">02 / HAIR SALON</p>
          <h2><span className="type-line">美容が、</span><span className="type-line">すべての原点。</span></h2>
          <p>技術と感性で、一人ひとりの“らしさ”をかたちにする。髪を通して毎日を少し自由にすることから、PARADISE8は始まりました。</p>
        </div>

        <div className="home-salon-showcase">
          <article className="home-salon-feature">
            <figure><Image src="/salon-park.jpg" alt="海を望む#01 parkのセット面" width={1600} height={1200} sizes="(max-width: 800px) 100vw, 68vw" /></figure>
            <div className="home-salon-panel">
              <p className="home-salon-meta">01 / HIGASHINARUSAWA, HITACHI</p>
              <h3>#01 park<br /><span>hair&amp;∞</span></h3>
              <p className="home-salon-jp"><span className="type-line">海を望むサロンで、</span><span className="type-line">未来の髪まで美しく。</span></p>
              <p>傷ませない技術と、自宅でも扱いやすい再現性を大切に。一人ひとりのこれからまで考えたデザインを提案します。</p>
              <a href="https://01park-otto.com/" target="_blank" rel="noreferrer" className="home-salon-link">SALON SITE <span>→</span></a>
            </div>
          </article>

          <article className="home-salon-feature home-salon-feature--reverse">
            <figure><Image src="/salon-original-wide.jpg" alt="#01 ORIGINALのセット面" width={1600} height={1200} sizes="(max-width: 800px) 100vw, 68vw" /></figure>
            <div className="home-salon-panel">
              <p className="home-salon-meta">02 / KASHIMA, HITACHI</p>
              <h3>#01<br /><span>ORIGINAL</span></h3>
              <p className="home-salon-jp"><span className="type-phrase">髪質も、骨格も、</span><wbr /><span className="type-phrase">装いも。</span><br /><span className="type-phrase">その人だけの答えへ。</span></p>
              <p>カット、デザインカラー、髪質改善。高い技術と細部へのこだわりで、まだ知らない自分らしさを引き出します。</p>
              <a href="https://beauty.hotpepper.jp/slnH000380119/" target="_blank" rel="noreferrer" className="home-salon-link">SALON &amp; RESERVATION <span>→</span></a>
            </div>
          </article>
        </div>
        <div className="home-salons-more"><Link href="/business" className="outline-link">すべての事業・ブランドを見る <span>→</span></Link></div>
      </section>

      <section className="preview-business" id="business">
        <p className="section-index light">03 / BEAUTY, AND BEYOND</p>
        <div className="preview-head">
          <h2>BEAUTY,<br />AND BEYOND.</h2>
          <p>美容で磨いた感性を、<br />服、家具、食、ケア、そして街へ。</p>
        </div>
        <div className="image-ribbon">
          <figure><Image src="/old-clothing.jpg" alt="08 old clothingの店内" width={1200} height={1600} sizes="(max-width: 800px) 50vw, 37vw" /><figcaption>01 / VINTAGE WEAR</figcaption></figure>
          <figure><Image src="/otto-antiques.jpg" alt="OttO ANTIQUESの店内" width={1600} height={1200} sizes="(max-width: 800px) 50vw, 27vw" /><figcaption>02 / ANTIQUES</figcaption></figure>
          <figure><Image src="/otton-dining.jpg" alt="まるいち おっとんの料理" width={1600} height={1200} sizes="37vw" /><figcaption>03 / FOOD</figcaption></figure>
        </div>
        <div className="preview-business-link"><Link href="/business" className="outline-link outline-link--light">事業とブランドを見る <span>→</span></Link></div>
      </section>

      <section className="recruit-teaser" id="recruit">
        <figure className="recruit-visual"><Image src="/salon-park-wide.jpg" alt="#01 park hair&∞のサロン空間" width={1477} height={1108} sizes="(max-width: 960px) 100vw, 50vw" /></figure>
        <div className="recruit-content">
          <p className="section-index">04 / RECRUIT</p>
          <p className="recruit-mantra">PLAY 3× / WORK 5×</p>
          <div className="recruit-copy">
            <h2><span className="type-line">美容師という仕事を、</span><span className="type-line">もっと楽しめる場所へ。</span></h2>
            <p>3倍遊んで絆を深め、5倍働いて社会に恩返しする。技術だけでなく、人としての可能性まで広げられるDREAM TEAMをつくろう。</p>
            <Link href={RECRUIT_URL} target="_blank" rel="noreferrer" className="solid-link">#01 park hair&amp;∞ 採用情報 <span>↗</span></Link>
          </div>
        </div>
      </section>
      <SiteFooter compact />
    </main>
  );
}
