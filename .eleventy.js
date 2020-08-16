const path = require("path");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const grayMatter = require("gray-matter");

const isProduction = process.env.ELEVENTY_ENV === "production";

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
	});

	eleventyConfig.addFilter("timeTag", (fileSlug) => {
		const published = DateTime.fromFormat(fileSlug.slice(0, 8), "yyyyMMdd");
		const htmlDate = published.toFormat("yyyy-MM-dd");
		const displayDate = published.toFormat("yyyy年M月dd日");
		return `<time datetime="${htmlDate}">${displayDate}</time>`;
	});

	eleventyConfig.addFilter("prettyUrl", (pathname) => {
		if (!isProduction) {
			return pathname;
		}
		if (!pathname.startsWith("/") || pathname.startsWith("//")) {
			return pathname;
		}
		const { dir, name } = path.parse(pathname);
		return path.join(dir, name);
	});

	eleventyConfig.addCollection("post", (collection) => {
		return collection.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
			return a.inputPath.localeCompare(b.inputPath);
		});
	});

	eleventyConfig.addPassthroughCopy({ static: "." });

	// https://github.com/romefrontend/rome/blob/bf56d156a996eea0a4047083e9ee582f7a5dbe3e/website/.eleventy.js#L240-L251
	// Customize YAML engine so we can parse hard tabs lol...
	eleventyConfig.setFrontMatterParsingOptions({
		engines: {
			yaml: {
				...grayMatter.engines.yaml,
				parse(content) {
					content = content.replace(/\t/g, "  ");
					return grayMatter.engines.yaml.parse(content);
				},
			},
		},
	});

	eleventyConfig.setBrowserSyncConfig({
		ui: false,
		ghostMode: false,
	});

	eleventyConfig.setUseGitIgnore(false);

	return {
		dir: {
			input: "src",
			output: "dist",
		},
	};
};
