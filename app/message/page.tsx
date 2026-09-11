import type { Metadata } from 'next';
import Link from 'next/link';
import { ExecutiveMessage } from '@/components/executive-message';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { executiveMessages } from '@/lib/leadership';

export const metadata: Metadata = {
  title: '代表取締役・取締役挨拶｜株式会社PARADISE8',
  description: '代表取締役・中川雄貴、取締役・堤耕助からのご挨拶。希望ある限り、可能性がある。PARADISE8が大切にする想いと、これからの挑戦。',
};

export default function MessagePage() {
  return (
    <main>
      <SiteHeader />
      <section className="message-page-intro content-section">
        <div>
          <p className="page-index"><span>04</span>MESSAGE</p>
          <h1>私たちの想い。</h1>
        </div>
        <p>代表取締役・中川雄貴と取締役・堤耕助より、PARADISE8が大切にする想いと、これからの挑戦についてご挨拶いたします。</p>
      </section>
      <nav className="message-sections content-section" aria-label="役員挨拶の目次">
        {executiveMessages.map(message => <a href={`#${message.id}`} key={message.id}>{message.role}挨拶<span>{message.number} ↓</span></a>)}
      </nav>
      {executiveMessages.map(message => <ExecutiveMessage message={message} key={message.id} />)}
      <div className="message-history-link content-section">
        <Link href="/story" className="text-link">私たちの歩みを知る<span>STORY →</span></Link>
      </div>
      <SiteFooter compact />
    </main>
  );
}
