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
    baseUrl: "trent-quartz-obsidian.vercel.app",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "Iosevka",
        body: "Iosevka",
        code: "Iosevka",
      },
      colors: {
        lightMode: {
          light: "#f9fafb",
          lightgray: "#f3f4f6",
          gray: "#d1d5db",
          darkgray: "#525252",
          dark: "#404040",
          secondary: "#737373",
          tertiary: "#9ca3af",
          highlight: "rgba(0, 0, 0, 0.04)",
          textHighlight: "#e5e7eb88",
        },
        darkMode: {
          light: "#141414",
          lightgray: "#1e1e1e",
          gray: "#404040",
          darkgray: "#a3a3a3",
          dark: "#e5e5e5",
          secondary: "#a3a3a3",
          tertiary: "#525252",
          highlight: "rgba(255, 255, 255, 0.05)",
          textHighlight: "#40404088",
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
      // CustomOgImages disabled — requires Google Fonts for image generation
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
