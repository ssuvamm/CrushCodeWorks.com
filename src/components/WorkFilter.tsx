import { useMemo, useState } from 'react';

type Item = { title: string; industry: string; href: string; excerpt: string };

export default function WorkFilter({ items }: { items: Item[] }) {
  const [active, setActive] = useState('All');
  const filters = ['All', ...new Set(items.map((i) => i.industry))];
  const visible = useMemo(() => (active === 'All' ? items : items.filter((i) => i.industry === active)), [active, items]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-2 text-xs ${active === f ? 'border-primary bg-primary text-primary-foreground' : 'border-border'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((item) => (
          <a key={item.href} href={item.href} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60">
            <p className="text-xs text-primary">{item.industry}</p>
            <h3 className="mt-2 font-heading text-2xl">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
            <p className="mt-4 text-sm">View case study →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
