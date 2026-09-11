import Image from 'next/image';
import type { LogoAsset } from '@/lib/brand-logos';

export function SuppliedLogo({ logo, className = '', priority = false }: {
  logo: LogoAsset;
  className?: string;
  priority?: boolean;
}) {
  const { frame } = logo;

  return (
    <span className={`supplied-logo ${className}`} style={{ aspectRatio: `${frame.width} / ${frame.height}` }}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        sizes={priority ? '80px' : '(max-width: 600px) 85vw, 400px'}
        priority={priority}
        style={{
          width: `${logo.width / frame.width * 100}%`,
          height: 'auto',
          left: `${-frame.x / frame.width * 100}%`,
          top: `${-frame.y / frame.height * 100}%`,
        }}
      />
    </span>
  );
}
