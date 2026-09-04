'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  '.home-vision-inner > *',
  '.home-salons-heading > *',
  '.home-salon-feature > figure',
  '.home-salon-feature > .home-salon-panel',
  '.preview-business > .section-index',
  '.preview-head > *',
  '.image-ribbon figure',
  '.preview-business-link',
  '.recruit-visual',
  '.recruit-content > *',
  '.about-origin > *',
  '.zero-one-panel > *',
  '.values-section > .section-index',
  '.values-list article',
  '.play-work-banner > *',
  '.brand-intro > *',
  '.brand-card > figure',
  '.brand-card > .brand-card-copy',
  '.founder-profile > *',
  '.message-section > *',
  '.timeline-heading > *',
  '.timeline li',
  '.story-next > *',
  '.company-overview > *',
  '.company-location > *',
  '.company-links > *',
  '.company-links a',
  '.contact-guide > *',
  '.contact-list article',
  '.contact-note > *',
  '.footer-top > *',
  '.footer-grid > *',
].join(',');

const parallaxSelector = [
  '.page-intro-image img',
  '.recruit-visual img',
  '.company-location figure img',
].join(',');

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = motionPreference.matches;

    if (prefersReducedMotion) {
      root.classList.remove('motion-active');
      root.classList.add('motion-reduced');
      const handleReducedMotionChange = () => {
        if (!motionPreference.matches) window.location.reload();
      };
      motionPreference.addEventListener('change', handleReducedMotionChange);
      return () => motionPreference.removeEventListener('change', handleReducedMotionChange);
    }

    root.classList.remove('motion-reduced');
    root.classList.add('motion-active');

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>(parallaxSelector));
    const hero = document.querySelector<HTMLElement>('.salon-hero-media');

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
      )
      : null;

    revealItems.forEach((item) => {
      const siblings = item.parentElement ? Array.from(item.parentElement.children) : [];
      const siblingIndex = Math.max(0, siblings.indexOf(item));
      item.style.setProperty('--reveal-delay', `${Math.min(siblingIndex * 65, 260)}ms`);
      item.classList.add('motion-item');

      if (item.matches('figure, .recruit-visual')) item.classList.add('motion-image');
      if (item.matches('.section-index, .page-index, .home-vision-en')) item.classList.add('motion-kicker');

      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        item.classList.add('is-visible');
      } else if (observer) {
        observer.observe(item);
      } else {
        item.classList.add('is-visible');
      }
    });

    parallaxItems.forEach((item) => item.classList.add('motion-parallax'));

    let frame = 0;
    const updateScrollEffects = () => {
      frame = 0;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--page-progress', String(Math.min(1, Math.max(0, window.scrollY / scrollable))));

      const parallaxStrength = window.innerWidth > 960 ? 17 : 6;
      const offsets = parallaxItems.map((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > window.innerHeight + 100) return null;
        const centerOffset = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const offset = Math.max(-1, Math.min(1, centerOffset)) * -parallaxStrength;
        return { item, offset };
      });
      offsets.forEach((entry) => entry?.item.style.setProperty('--parallax-y', `${entry.offset.toFixed(2)}px`));
    };

    const requestScrollUpdate = () => {
      if (document.body.classList.contains('menu-open')) return;
      if (frame) return;
      frame = window.requestAnimationFrame(updateScrollEffects);
    };

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const handlePointerMove = (event: PointerEvent) => {
      if (!hero || !finePointer) return;
      const x = ((event.clientX / window.innerWidth) - 0.5) * -8;
      const y = ((event.clientY / window.innerHeight) - 0.5) * -6;
      hero.style.setProperty('--hero-x', `${x.toFixed(2)}px`);
      hero.style.setProperty('--hero-y', `${y.toFixed(2)}px`);
    };

    const resetPointer = () => {
      hero?.style.setProperty('--hero-x', '0px');
      hero?.style.setProperty('--hero-y', '0px');
    };

    updateScrollEffects();
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate, { passive: true });
    if (hero && finePointer) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      document.documentElement.addEventListener('mouseleave', resetPointer);
    }

    const handleMotionPreferenceChange = () => {
      if (!motionPreference.matches) {
        window.location.reload();
        return;
      }
      root.classList.remove('motion-active');
      root.classList.add('motion-reduced');
      observer?.disconnect();
      revealItems.forEach((item) => item.classList.add('is-visible'));
      parallaxItems.forEach((item) => {
        item.classList.remove('motion-parallax');
        item.style.removeProperty('--parallax-y');
      });
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', resetPointer);
      if (frame) window.cancelAnimationFrame(frame);
    };
    motionPreference.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener('change', handleMotionPreferenceChange);
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
      window.removeEventListener('pointermove', handlePointerMove);
      document.documentElement.removeEventListener('mouseleave', resetPointer);
      if (frame) window.cancelAnimationFrame(frame);
      revealItems.forEach((item) => {
        item.classList.remove('motion-item', 'motion-image', 'motion-kicker', 'is-visible');
        item.style.removeProperty('--reveal-delay');
      });
      parallaxItems.forEach((item) => {
        item.classList.remove('motion-parallax');
        item.style.removeProperty('--parallax-y');
      });
      root.style.removeProperty('--page-progress');
    };
  }, [pathname]);

  return <div className="motion-progress" aria-hidden="true" />;
}
