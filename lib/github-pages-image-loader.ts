'use client';

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function githubPagesImageLoader({ src, width, quality }: ImageLoaderProps) {
  if (/^(?:https?:)?\/\//.test(src)) return src;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${normalizedSrc}?w=${width}&q=${quality ?? 85}`;
}
