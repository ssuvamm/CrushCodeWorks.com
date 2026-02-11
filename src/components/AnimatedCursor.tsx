import { useEffect } from 'react';

export default function AnimatedCursor() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const dot = document.createElement('div');
    dot.className = 'pointer-events-none fixed z-50 hidden h-4 w-4 rounded-full border border-primary/80 md:block';
    document.body.append(dot);
    const move = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px,0)`;
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      window.removeEventListener('mousemove', move);
      dot.remove();
    };
  }, []);

  return null;
}
