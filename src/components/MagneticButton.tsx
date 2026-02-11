import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MagneticButton({ href = '/contact', label = 'Book a strategy call' }: { href?: string; label?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => ref.current && (ref.current.style.transform = 'translate(0, 0)')}
      whileHover={{ scale: reduced ? 1 : 1.03 }}
      href={href}
      className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
    >
      {label}
    </motion.a>
  );
}
