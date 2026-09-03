import Link from 'next/link';
import Image from 'next/image';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>HITACHI, IBARAKI</span><span>EST. 2026</span></p>
          <h1 id="hero-title">CREATE<br />YOUR<br /><em>PARADISE.</em></h1>
          <div className="hero-statement">
            <p>美容の可能性を、もっと自由に。</p>
            <p>技術・人・空間を育て、<br />関わるすべての人の未来をひらく。</p>
          </div>
        </div>

        <div className="hero-visual">
          <Image src="/old-clothing.jpg" alt="古着とモーターサイクルが並ぶPARADISE8のカルチャー空間" width={1200} height={1600} sizes="(max-width: 800px) 100vw, 42vw" priority />
          <div className="hero-number" aria-hidden="true">8</div>
          <p className="photo-note">BEAUTY / VINTAGE<br />FOOD / CARE</p>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>HAIR</span><i>✳</i><span>VINTAGE</span><i>✳</i><span>FOOD</span><i>✳</i><span>CARE</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-index">01 / OUR PHILOSOPHY</p>
        <div className="manifesto-grid">
          <h2>無限に成長。<br />無限に感謝。</h2>
          <div>
            <p className="manifesto-lead">時代に合わせた技術とセンスを、仲間とともに磨き続ける。</p>
            <p>一番に仲間の幸せを。言葉に責任を持ち、できることの一つひとつに、妥協なくこだわる。PARADISE8は、美容から始まった感性で、地域の日常に新しい選択肢をつくるチームです。</p>
            <Link href="/about" className="text-link">私たちについて <span>→</span></Link>
          </div>
        </div>
      </section>

      <section className="preview-business" id="business">
        <p className="section-index light">02 / ONE TEAM, MANY CULTURES</p>
        <div className="preview-head">
          <h2>BEAUTY IS<br />EVERYWHERE.</h2>
          <p>髪をつくる。空間をつくる。<br />文化をつくる。そして、人を育てる。</p>
        </div>
        <div className="image-ribbon">
          <figure><Image src="/salon-park.jpg" alt="#01 parkのサロン空間" width={1600} height={1200} sizes="(max-width: 800px) 50vw, 37vw" /><figcaption>01 / HAIR SALON</figcaption></figure>
          <figure><Image src="/otto-antiques.jpg" alt="OttO ANTIQUESの店内" width={1600} height={1200} sizes="(max-width: 800px) 50vw, 27vw" /><figcaption>02 / ANTIQUES</figcaption></figure>
          <figure><Image src="/otton-dining.jpg" alt="まるいち おっとんの料理" width={1600} height={1200} sizes="37vw" /><figcaption>03 / FOOD</figcaption></figure>
        </div>
        <Link href="/business" className="round-link" aria-label="事業とブランドを見る"><span>OUR<br />BUSINESS</span><b>↗</b></Link>
      </section>

      <section className="recruit-teaser" id="recruit">
        <p className="section-index">03 / RECRUIT</p>
        <div className="recruit-word">PLAY 3×<br /><span>WORK 5×</span></div>
        <div className="recruit-copy">
          <h2>美容師という仕事を、<br />もっと楽しめる場所へ。</h2>
          <p>3倍遊んで絆を深め、5倍働いて社会に恩返しする。技術だけでなく、人としての可能性まで広げられるDREAM TEAMをつくろう。</p>
          <Link href="/recruit" className="solid-link">採用情報を見る <span>↗</span></Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
