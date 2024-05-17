import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts');
    return rss({
        title: 'Barbieri Notes',
        description: "Francesco Barbieri's personal blog.",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: new Date(post.data.pubDate),
            description: post.data.description,
            link: `/posts/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}