import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Trent Haines",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "trentshaines.github.io/trent-quartz-obsidian",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fffbea",         // Softer, less bright pastel yellow background
          lightgray: "#f8f3e3",     // Very light, subtle yellow-tinted gray
          gray: "#e8e0c0",          // Lighter medium yellow-tinted gray
          darkgray: "#95907f",      // Lighter dark yellow-tinted gray (lightened)
          dark: "#4a4840",          // Lightened near-black with yellow undertone
          secondary: "#f0d280",     // Slightly more vibrant pastel yellow accent
          tertiary: "#e6dbbf",      // Very soft pastel yellow-gold accent
          highlight: "rgba(242, 222, 164, 0.15)", // Pastel yellow highlight
          textHighlight: "#f7e9c688", // Soft pastel yellow text highlight
        },
        darkMode: {
          light: "#1a1a1c",         // Dark background with slight warmth
          lightgray: "#2d2d2f",     // Slightly lighter neutral gray
          gray: "#5a5a5c",          // Medium neutral gray
          darkgray: "#a8a8aa",      // Softer light neutral gray
          dark: "#b8b8ba",          // Very soft white-gray blend
          secondary: "#9c9c9c",     // Neutral silver accent
          tertiary: "#707070",      // Secondary neutral accent
          highlight: "rgba(156, 156, 156, 0.15)", // Neutral highlight
          textHighlight: "#88888888", // Neutral text highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
