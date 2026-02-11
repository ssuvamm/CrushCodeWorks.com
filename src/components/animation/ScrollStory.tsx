import { useEffect, useRef } from 'react';

export default function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !ref.current) return;
    let cleanup = () => {};
    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const panels = ref.current?.querySelectorAll('.story-panel') || [];
      gsap.fromTo(
        panels,
        { y: 40, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true
          }
        }
      );
      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    })();
    return cleanup;
  }, []);

  return (
    <div ref={ref} className="grid gap-4 md:grid-cols-3">
      {['Research', 'Build', 'Scale'].map((s) => (
        <article key={s} className="story-panel rounded-2xl border border-border bg-card p-6">
          <h3 className="font-heading text-2xl">{s}</h3>
          <p className="mt-2 text-sm text-muted-foreground">Outcomes-first delivery with measurable checkpoints.</p>
        </article>
      ))}
    </div>
  );
}
