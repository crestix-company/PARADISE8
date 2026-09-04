import Image from 'next/image';

type PageIntroProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  tone?: 'paper' | 'ink';
};

export function PageIntro({ index, eyebrow, title, copy, image, imageAlt, imagePosition, tone = 'paper' }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro--${tone}`}>
      <div className="page-intro-copy">
        <p className="page-index"><span>{index}</span>{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{copy}</p>
      </div>
      <figure className="page-intro-image">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 960px) 100vw, 48vw" priority style={{ objectPosition: imagePosition }} />
        <figcaption>PARADISE8 / HITACHI, IBARAKI</figcaption>
      </figure>
    </section>
  );
}
