import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, e as addAttribute, a5 as Fragment, a6 as __astro_tag_component__, a4 as createVNode } from './astro_Bm1rnZtr.mjs';
import { $ as $$Image } from './pages/generic_GwF8wxVu.mjs';
import 'clsx';
import 'kleur/colors';

const $$Astro$3 = createAstro("https://www.barbierinotes.com");
const $$H2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$H2;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${spreadAttributes(props)} class="mb-5 mt-16 font-semibold md:mt-16"> ${renderSlot($$result, $$slots["default"])} <!-- Be sure to add a \`<slot/>\` for child content! --> </h2>`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/components/H2.astro", void 0);

const $$Astro$2 = createAstro("https://www.barbierinotes.com");
const $$Img = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Img;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="relative my-6 w-full overflow-hidden rounded-xl bg-white md:my-8"> <img${addAttribute(props.alt, "alt")}${addAttribute(props.title, "title")} loading="lazy" decoding="async" class="rounded-xl w-full"${addAttribute(props.src, "src")}> <div aria-hidden="true" class="absolute inset-0 rounded-xl shadow-inset-border"></div> </div> <p class="-mt-2 md:-mt-4 mb-12 text-center text-xs text-gray-1000"> ${props.title} </p> </div>`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/components/Img.astro", void 0);

const $$Astro$1 = createAstro("https://www.barbierinotes.com");
const $$P = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$P;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${spreadAttributes(props)} class="text-gray-1100"> ${renderSlot($$result, $$slots["default"])} <!-- Be sure to add a \`<slot/>\` for child content! --> </p>`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/components/P.astro", void 0);

const $$Astro = createAstro("https://www.barbierinotes.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(props.href, "href")} target="_blank" class="underline">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/components/Link.astro", void 0);

const frontmatter = {
  "title": "The beginning of something",
  "description": "The ideas and reasons behind this website.",
  "pubDate": "19/05/2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "whats-the-blog-about",
    "text": "What’s the blog about?"
  }, {
    "depth": 2,
    "slug": "why-a-blog",
    "text": "Why a blog?"
  }, {
    "depth": 2,
    "slug": "why-your-website-is-so-minimal",
    "text": "Why your website is so minimal?"
  }, {
    "depth": 2,
    "slug": "what-is-the-tech-stack",
    "text": "What is the tech stack?"
  }, {
    "depth": 2,
    "slug": "why-no-dark-mode",
    "text": "Why no dark mode?"
  }];
}
const components = {
  h2: $$H2,
  img: $$Img,
  p: $$P,
  a: $$Link
};
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "It seems like everyone in the tech industry goes through a blogging phase. This is the beginning of mine."
    }), "\n", createVNode(_components.h2, {
      id: "whats-the-blog-about",
      children: "What’s the blog about?"
    }), "\n", createVNode(_components.p, {
      children: ["Inspired by my guiding principle of ", createVNode(_components.em, {
        children: "“I want to do cool things”"
      }), " the blog will cover mostly reflections about big ideas - mostly in tech but not only."]
    }), "\n", createVNode(_components.p, {
      children: [" ", createVNode("br", {}), "\nI’ll try to publish posts that will remain relevant and valuable over a long period of time. I want to address exciting questions or issues that are unlikely to become outdated. For this reason and to keep the writing quality high, the publishing rate will be very low. I suggest you to subscribe to the RSS feed."]
    }), "\n", createVNode(_components.h2, {
      id: "why-a-blog",
      children: "Why a blog?"
    }), "\n", createVNode(_components.p, {
      children: "Honestly I don’t have a clear vision, a mission or a purpose for this blog at the time of writing. But as stated in the previus section, I think blogging can play a crucial role in exploring and, more importantly, sharing cool ideas possibily igniting some debates."
    }), "\n", createVNode(_components.p, {
      children: [" ", createVNode("br", {}), "\nIf you ever want to reach out to me, you can do so on ", createVNode(_components.a, {
        href: "https://twitter.com/realBarbieri",
        children: "X (Twitter)"
      }), ". My DMs are always open for an interesting chat."]
    }), "\n", createVNode(_components.p, {
      children: [" ", createVNode("br", {}), "\nAmong the reasons, my initial inspiration came from ", createVNode(_components.a, {
        href: "https://sites.google.com/site/steveyegge2/you-should-write-blogs?authuser=0",
        children: "“You should write blogs”"
      }), ", an article by Steve Yegge, and many of ", createVNode(_components.a, {
        href: "https://www.paulgraham.com/",
        children: "Paul Graham"
      }), "’s essays."]
    }), "\n", createVNode(_components.h2, {
      id: "why-your-website-is-so-minimal",
      children: "Why your website is so minimal?"
    }), "\n", createVNode(_components.p, {
      children: "I think the Internet has become a bloated mess. Huge JavaScript libraries and frameworks increase client-side load, reducing performances, and many elements like animations, fonts and images, are often unnecessary. This is very far from the Internet early days priciples."
    }), "\n", createVNode(_components.p, {
      children: [" ", createVNode("br", {}), "\nAs someone who has always appreciated the unfortunately now rare feeling of a fast and optimized website, I began questioning myself if this trend was the right direction to take for my own site. Unsurprisingly, it wasn’t."]
    }), "\n", createVNode(_components.p, {
      children: [" ", createVNode("br", {}), "\nInstead, I decided to adopt a content-first approach for my website, where trendy elements that lose appeal quickly won’t be rendered on your screen."]
    }), "\n", createVNode(_components.p, {
      children: [" ", createVNode("br", {}), "\nAs a collateral benefit, this blog has proudly joined the ", createVNode(_components.a, {
        href: "https://512kb.club/",
        children: "512kb Club"
      }), ", a collection of high-performance and optimized websites."]
    }), "\n", createVNode(_components.h2, {
      id: "what-is-the-tech-stack",
      children: "What is the tech stack?"
    }), "\n", createVNode(_components.p, {
      children: ["After a bit of research I found that ", createVNode(_components.a, {
        href: "https://astro.build/",
        children: "Astro"
      }), " was the perfect framework for this project."]
    }), "\n", createVNode(_components.h2, {
      id: "why-no-dark-mode",
      children: "Why no dark mode?"
    }), "\n", createVNode(_components.p, {
      children: "Maybe it will come in a future update, but for now I like a clean and light theme."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/beginning.mdx";
const file = "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/content/posts/beginning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...components, ...props.components, "astro-image": components.img ??  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/content/posts/beginning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, components, Content as default, file, frontmatter, getHeadings, url };
