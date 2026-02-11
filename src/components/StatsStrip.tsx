import { motion, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '120+', label: 'Projects shipped' },
  { value: '38%', label: 'Avg. conversion lift' },
  { value: '99.95%', label: 'Uptime on launches' }
];

export default function StatsStrip() {
  const reduced = useReducedMotion();
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.article
          key={stat.label}
          initial={reduced ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * 0.1 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <p className="font-heading text-4xl text-primary">{stat.value}</p>
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </motion.article>
      ))}
    </div>
  );
}
