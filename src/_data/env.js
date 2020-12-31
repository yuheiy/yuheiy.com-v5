const eleventyPkg = require("@11ty/eleventy/package.json");

module.exports = {
	isDev: process.env.ELEVENTY_ENV !== "production",
	generator: `Eleventy ${eleventyPkg.version.split(".").slice(0, 2).join(".")}`,
};
