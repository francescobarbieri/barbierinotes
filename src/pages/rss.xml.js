import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('posts', (post) => {
        return new Date(post.data.publishedDate) <= new Date();
    });

    const sortedPosts = posts.sort(
        (a, b) => new Date(b.data.publishedDate) - new Date(a.data.publishedDate)
    );

    return rss({
        title: "Barbieri Notes",
        description: "Francesco Barbieri's personal blog.",
        site: context.site,
        items: sortedPosts.map((post) => {
            return ({
                title: `${post.data.title}`,
                pubDate: post.data.publishedDate,
                description: post.data.description,
                link: `/posts/${post.slug}/`,
            })
        }),
    });
}