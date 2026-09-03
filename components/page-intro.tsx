type PageIntroProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
  tone?: 'paper' | 'dark' | 'blue' | 'orange';
};

export function PageIntro({ index, eyebrow, title, copy, tone = 'paper' }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro--${tone}`}>
      <p className="page-index">{index} / {eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-lead">{copy}</p>
      <span className="page-orbit" aria-hidden="true">8</span>
    </section>
  );
}
