import Image from 'next/image';
import type { ExecutiveMessage as ExecutiveMessageContent } from '@/lib/leadership';

export function ExecutiveMessage({ message }: { message: ExecutiveMessageContent }) {
  return (
    <section className={`executive-message executive-message--${message.number} content-section`} id={message.id} aria-labelledby={`${message.id}-title`}>
      <header className="executive-message-header">
        <p className="section-index">MESSAGE {message.number}</p>
        <h2 id={`${message.id}-title`}>{message.role}挨拶</h2>
        <p className="executive-headline">
          {message.title.map(line => <span className="type-line" key={line}>{line}</span>)}
        </p>
      </header>
      <figure className="executive-portrait">
        <Image
          src={message.photo.src}
          alt={`${message.role} ${message.name}`}
          width={message.photo.width}
          height={message.photo.height}
          sizes="(max-width: 960px) 360px, 34vw"
        />
        <figcaption>
          <span>{message.role}</span>
          <strong>{message.name}</strong>
        </figcaption>
      </figure>
      <div className="executive-copy">
        <div className="executive-prose">
          {message.paragraphs.map(paragraph => (
            <p className={paragraph === message.belief ? 'executive-belief' : undefined} key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {message.closing && <div className="executive-closing">
          <p lang="en">{message.closing.en}</p>
          <p>{message.closing.ja}</p>
        </div>}
        <footer className="executive-signature">
          <p>株式会社PARADISE8</p>
          <p><span>{message.role}</span><strong>{message.name}</strong></p>
        </footer>
      </div>
    </section>
  );
}
