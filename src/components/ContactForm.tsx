import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get('gdpr')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    const response = await fetch('/api/contact', { method: 'POST', body: data });
    setStatus(response.ok ? 'success' : 'error');
    if (response.ok) form.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input required id="name" name="name" className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">Work email</label>
        <input required type="email" id="email" name="email" className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" />
      </div>
      <div>
        <label htmlFor="budget" className="text-sm font-medium">Estimated budget</label>
        <select id="budget" name="budget" className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2">
          <option>₹30k - ₹50k</option>
          <option>₹50k - ₹1L</option>
          <option>₹1L+</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Project details</label>
        <textarea required id="message" name="message" rows={4} className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2" />
      </div>
      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" name="gdpr" required className="mt-1" />
        I consent to CrushCodeWorks storing this information to contact me about my project.
      </label>
      <button type="submit" disabled={status === 'loading'} className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-70">
        {status === 'loading' ? 'Sending…' : 'Send inquiry'}
      </button>
      {status === 'success' && <p className="text-sm text-green-600">Thanks! We will respond within 24 hours.</p>}
      {status === 'error' && <p className="text-sm text-red-500">Please complete all required fields and try again.</p>}
    </form>
  );
}
