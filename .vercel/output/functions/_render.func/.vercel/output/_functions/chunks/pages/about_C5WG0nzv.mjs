/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_Bm1rnZtr.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.barbierinotes.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Barbieri Notes",
    description = "Francesco Barbieri's personal website.",
    url = "https://barbierinotes.com/",
    pageImage = "https://barbierinotes.com/img/ogImage.png"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="author" content="Francesco Barbieri"><meta name="keywords" content="Francesco Barbieri, Barbieri Notes, Tech, Software Engineer"><link rel="alternate" type="application/rss+xml"${addAttribute(title, "title")}${addAttribute(`${Astro2.site}rss.xml`, "href")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:site_name"${addAttribute(title, "content")}><meta property="og:locale" content="en_US"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@realBarbieri"><meta name="twitter:creator" content="@realBarbieri"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(pageImage, "content")}><link rel="icon" href="/img/favicon-light.png" media="(prefers-color-scheme: light)"><link rel="icon" href="/img/favicon-dark.png" media="(prefers-color-scheme: dark)"><link rel="sitemap" href="/sitemap-index.xml"><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${renderHead()}</head> <body> <div class="mx-auto my-12 max-w-[692px] px-6 antialiased sm:my-32 md:my-16"> <header class="mb-32 flex flex-col items-start"> <a class="text-medium inline-block font-medium no-underline" href="/">
Barbieri Notes</a> <span class="text-medium font-medium leading-none text-gray-1100">Francesco Barbieri's Blog</span> </header> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="-mb-3 mt-16 sm:mt-32"> <p class="text-gray-1100">Read more about me in the following paragraphs, or see my work experience in the section below.</p> </div> <div class="-mb-3 mt-16 sm:mt-32"> <h2 class="mb-5 mt-16 font-semibold md:mt-16">About me</h2> <p class="mt-4 text-gray-1100">I've always been extremely passionate about everything related to Technology and Business, that’s how I discovered the world of Computer Science. Currently, rather than opting for a traditional student job, such as waiting tables, I chose to work as a Freelance Web Developer to acquire work experience that (hopefully) holds greater long-term value for my career path.</p> <p class="mt-4 text-gray-1100">I believe in continuous growth and self-improvement, both in personal and professional life. This approach has encouraged me to be proactive and work on interesting projects.</p> <p class="mt-4 text-gray-1100">Spending my free time in the development of personal projects, writing on my personal blog, and pursuing some small Entrepreneurial venture to develop business skills. I have great desire to make new experiences, meet exceptional people, get involved in something, test my limits, move out of the usual context.</p> </div> <div class="-mb-3 mt-16 sm:mt-32"> <span class="mb-5 block font-semibold sm:mb-6">Work Experience</span> <span class="block font-medium">Freelance</span> <p class="text-gray-1100 text-sm mb-5">Web Developer</p> <ul class="my-6 ml-6 list-disc [&>li]:mt-2 text-gray-1100"> <li>
Developed high quality hand-coded websited for italian companies, optimizing performances and SEO.
</li> </ul> </div> </main> ` })}`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/pages/about.astro", void 0);

const $$file = "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, about as a };
