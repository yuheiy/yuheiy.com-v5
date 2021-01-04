const helpers = require("handlebars-helpers")();
const isAbsoluteUrl = require("is-absolute-url");
const yaml = require("js-yaml");
const { JSDOM } = require("jsdom");
const { DateTime } = require("luxon");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const isDev = process.env.ELEVENTY_ENV !== "production";

const ledeCache = new Map();

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight);

	eleventyConfig.addDataExtension("yml", (contents) => {
		return yaml.safeLoad(contents);
	});

	eleventyConfig.addHandlebarsHelper("reverse", (array) => {
		return [...array].reverse();
	});
	eleventyConfig.addHandlebarsHelper("JSONstringify", helpers.JSONstringify);

	eleventyConfig.addFilter("prettyUrl", prettyUrl);

	eleventyConfig.addFilter("absoluteUrl", (item) => {
		const { metadata } = item.data;
		const origin = `${metadata.scheme}://${metadata.domain}`;
		return `${origin}${prettyUrl(item.url)}`;
	});

	eleventyConfig.addFilter("lede", (html) => {
		if (!ledeCache.has(html)) {
			const fragment = JSDOM.fragment(html);
			const paragraphElement = fragment.querySelector("p");
			if (paragraphElement) {
				ledeCache.set(html, paragraphElement.textContent);
			} else {
				if (!isDev) {
					throw new Error("The HTML fragment must have a <p> element");
				}
				ledeCache.set(html, "");
			}
		}
		return ledeCache.get(html);
	});

	eleventyConfig.addFilter("timeHtml", (isoDateString) => {
		const published = DateTime.fromISO(isoDateString, { setZone: true });
		const htmlDate = published.toISO();
		const displayDate = published.toFormat("yyyy年M月d日");
		return `<time datetime="${htmlDate}">${displayDate}</time>`;
	});

	eleventyConfig.addCollection("post", (collection) => {
		return collection.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
			return (
				DateTime.fromISO(a.data.published) - DateTime.fromISO(b.data.published)
			);
		});
	});

	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addPassthroughCopy({
		public: ".",
		"src/main.css": "main.css",
		"node_modules/prismjs/themes/prism-solarizedlight.css":
			"prism-solarizedlight.css",
	});

	eleventyConfig.setBrowserSyncConfig({
		ui: false,
		ghostMode: false,
		logFileChanges: false,
	});

	return {
		dir: {
			input: "src",
			output: "dist",
		},
		markdownTemplateEngine: "hbs",
	};
};

// trim `.html` from URL in production
function prettyUrl(url) {
	if (isDev) {
		return url;
	}
	if (isAbsoluteUrl(url)) {
		return url;
	}
	return url.replace(/\.html$/, "");
}

// fork of:
// https://github.com/11ty/eleventy-plugin-rss/blob/master/.eleventy.js
function pluginRss(eleventyConfig) {
	eleventyConfig.addFilter("rssLastUpdatedDate", (collection) => {
		if (!collection || !collection.length) {
			throw new Error("Collection is empty in rssLastUpdatedDate filter.");
		}

		// Newest date in the collection
		return DateTime.fromMillis(
			Math.max(
				...collection.map((item) => {
					return DateTime.fromISO(item.data.modified || item.data.published);
				})
			)
		).toISO();
	});

	eleventyConfig.addFilter("htmlToAbsoluteUrls", (htmlContent, base) => {
		// TODO
		return htmlContent;
	});
}
