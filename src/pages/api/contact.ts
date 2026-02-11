export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const form = await request.formData();
  const payload = Object.fromEntries(form.entries());

  // Performance note: webhook call is server-side only to keep client JS and keys minimal.
  const webhook = import.meta.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return new Response(JSON.stringify({ error: 'Webhook missing' }), { status: 500 });
  }

  await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
