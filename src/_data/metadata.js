const eleventyPkg = require("@11ty/eleventy/package.json");

const title = "Yuhei Yasuda";
const origin = "https://yuheiy.com";
const description =
	"フロントエンドウェブ開発者。HTMLやWAI-ARIA・CSS設計・レスポンシブデザイン・シングルページアプリケーション・プログレッシブエンハンスメント・アクセシビリティ・UIデザインが関心領域。業務では運用を見据えたコーポレートサイトやメディアサイトなどの受託開発に携わる。";
const feedTitle = `投稿 - ${title}`;

module.exports = {
	title,
	origin,
	url: `${origin}/`,
	description,
	lang: "ja",
	region: "JP",
	repositoryUrl: "https://github.com/yuheiy/yuheiy.com-v5",
	generator: `Eleventy ${eleventyPkg.version}`,
	feed: {
		title: feedTitle,
		subtitle: description,
		path: "/posts-feed.xml",
		id: `${origin}/`,
	},
	jsonfeed: {
		title: feedTitle,
		path: "/posts-feed.json",
		url: `${origin}/feed.json`,
	},
	author: {
		name: "安田 祐平",
		email: "yuhei.yasuda1003@gmail.com",
		url: `${origin}/`,
	},
};
