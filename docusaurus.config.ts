import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "AlgoForge - Wiki",
	tagline: "Because your algorithms deserve better.",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://algoforge.fr",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: process.env.HOST == "github-pages" ? "/wikiforge/" : "/",
	trailingSlash: true,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "AlgoForge", // Usually your GitHub org/user name.
	projectName: "AlgoForge - Wiki", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "fr",
		locales: ["fr"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/AlgoForge.svg",
		navbar: {
			title: "AlgoForge",
			logo: {
				alt: "AF",
				src: "img/algoforgeLogo(black).png",
				srcDark: "img/algoforgeLogo(white).png",
			},
			items: [
				{
					label: "Télécharger",
					to: "/download",
					position: "right",
					activeBasePath: "/download",
				},
				{
					label: "Autohébergement",
					to: "/docs/tutorial/self-host/install/",
					position: "right",
					activeBasePath: "/docs/tutorial/self-host/install/",
				},
				{
					type: "docSidebar",
					sidebarId: "tutorialSidebar",
					position: "left",
					label: "Tutoriel",
				},
				{
					type: "docSidebar",
					sidebarId: "technicalSidebar",
					position: "left",
					label: "Documentation technique",
				},
				{
					href: "https://github.com/Bing-Chill-inc/Algoforge-main.git",
					label: "GitHub",
					position: "right",
				},
			],
		},
		// footer: {
		// 	style: "dark",
		// 	links: [
		// 		{
		// 			title: "Docs",
		// 			items: [
		// 				{
		// 					label: "Tutorial",
		// 					to: "/docs/tutorial/intro",
		// 				},
		// 				{
		// 					label: "Technical",
		// 					to: "/docs/tech/intro",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "More",
		// 			items: [
		// 				{
		// 					label: "GitHub",
		// 					href: "https://github.com/Bing-Chill-inc/Algoforge-main.git",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	copyright: `Copyright © ${new Date().getFullYear()} Algoforge, Inc. Because your algorithms deserve better.`,
		// },
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			additionalLanguages: ["powershell", "bash"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
