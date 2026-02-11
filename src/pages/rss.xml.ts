import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  return rss({
    title: 'CrushCodeWorks Blog',
    description: 'SEO and product engineering insights.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`
    }))
  });
}
