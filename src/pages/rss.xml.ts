import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  const site = import.meta.env.SITE || 'https://your-domain.com';

  return rss({
    title: 'Portfolio Blog',
    description: 'Thoughts, tutorials, and updates',
    site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/blog/${post.slug}`,
      pubDate: post.data.publishDate,
      categories: post.data.tags,
    })),
    customData: '<language>en-us</language>',
  });
}

