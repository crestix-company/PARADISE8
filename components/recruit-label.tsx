import { RECRUIT_LABEL_PARTS } from '@/lib/links';

export function RecruitLabel() {
  return (
    <span className="recruit-label">
      {RECRUIT_LABEL_PARTS.map(part => <span className="recruit-label-piece" key={part}>{part}</span>)}
    </span>
  );
}
