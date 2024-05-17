/* empty css                          */
import { A as AstroError, l as UnknownContentCollectionError, d as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, h as renderComponent, u as unescapeHTML, m as maybeRenderHead, e as addAttribute } from '../astro_Bm1rnZtr.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './about_C5WG0nzv.mjs';
import pLimit from 'p-limit';
import { p as prependForwardSlash } from '../astro/assets-service_Djer7jyI.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.barbierinotes.com", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/beginning.mdx": () => import('../beginning_CBDtYrBG.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"beginning":"/src/content/posts/beginning.mdx"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/beginning.mdx": () => import('../beginning_CdW5bts3.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const postsByYear = {};
  for (const post of allPosts) {
    const pubDate = post.data.pubDate;
    if (pubDate) {
      const year = new Date(pubDate).getFullYear();
      if (!postsByYear[year])
        postsByYear[year] = [];
      postsByYear[year].push(post);
    }
  }
  const sortedPosts = Object.entries(postsByYear).sort(([yearA], [yearB]) => yearB - yearA).map(([year, posts]) => ({
    year: parseInt(year),
    posts
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts" }, { "default": ($$result2) => renderTemplate`${sortedPosts.map((groupPost) => renderTemplate`${maybeRenderHead()}<div class="-mb-3 mt-16 sm:mt-32"> <span class="mb-5 block font-medium sm:mb-6">${groupPost.year}</span> ${groupPost.posts.map((post) => renderTemplate`<a${addAttribute("/posts/" + post.slug, "href")} class="-mx-4 flex flex-col rounded-md px-4 no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3"> <span>${post.data.title}</span> <span class="text-gray-1100">${post.data.description}</span> </a>`)} </div>`)}` })}`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/pages/posts/index.astro", void 0);

const $$file$1 = "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/pages/posts/index.astro";
const $$url$1 = "/posts";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  allPosts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate);
    const dateB = new Date(b.data.pubDate);
    return dateB - dateA;
  });
  const slicedPost = allPosts.slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Barbieri Notes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div> <span class="mb-5 block font-semibold sm:mb-6">Today</span> <p class="text-gray-1100">I'm a Computer Science student at the University of Milano-Bicocca. Currently working as a Freelance Developer while studying.</p> <p class="mt-4 text-gray-1100">I want to build cool things. Learn more about me <a href="/about" class="underline">here</a>.</p> </div> <div class="-mb-3 mt-16 sm:mt-32"> <span class="mb-5 block font-semibold sm:mb-6">Essay</span> <div class="flex flex-col gap-7 sm:gap-4"> ${slicedPost.map((post) => renderTemplate`<a${addAttribute("/posts/" + post.slug, "href")} class="-mx-4 flex flex-col rounded-md px-4 no-underline hover:bg-[#F5F4F4] dark:hover:bg-gray-200 sm:py-3"> <span>${post.data.title}</span> <span class="text-gray-1100">${post.data.description}</span> </a>`)} </div> <p class="mt-6 text-gray-1100"> <a href="/posts" class="underline flex items-center gap-2">All essays
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"></path><path d="M2 12H22"></path></svg> </a> </p> </div> <div class="-mb-3 mt-16 sm:mt-32"> <span class="mb-5 block font-semibold sm:mb-6">More</span> <p class="text-gray-1100">You can see more of my work on <a href="https://twitter.com/intent/user?screen_name=realBarbieri" target="_blank" class="underline">X (Twitter)</a> or more of my code on <a href="https://github.com/francescobarbieri" target="_blank" class="underline">GitHub.</a></p> <p class="mt-4 text-gray-1100">Subscribe to <a href="#" class="underline">RSS feed</a>.</p> </div> </main> ` })}`;
}, "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/pages/index.astro", void 0);

const $$file = "/Users/francesco/Documents/Progetti/ProgettiPersonali/barbierinotes/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, getCollection as g, index$1 as i };
