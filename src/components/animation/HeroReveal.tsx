import { useEffect, useRef } from 'react';

export default function HeroReveal() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !ref.current) return;
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const gsap = (await import('gsap')).default;
      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current?.querySelectorAll('span'),
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' }
        );
      }, ref);
    })();

    return () => ctx?.revert();
  }, []);

  const words = ['Build', 'Revenue-Ready', 'Digital', 'Products'];

  return (
    <h1 ref={ref} className="font-heading text-5xl leading-tight md:text-7xl" aria-label={words.join(' ')}>
      {words.map((word) => (
        <span key={word} className="mr-3 inline-block overflow-hidden">
          <span className="inline-block">{word}</span>
        </span>
      ))}
    </h1>
  );
}
