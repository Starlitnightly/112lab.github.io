import { withPrefix } from "gatsby";

// Root-absolute site paths ("/assets/x.jpg") need the path prefix when the
// site is built with --prefix-paths (GitHub Pages project site lives under
// /112lab.github.io/). withPrefix is a no-op for unprefixed builds
// (Cloudflare Pages at https://112lab.asia/), so both deploys stay correct.
export const assetUrl = (p) =>
  typeof p === "string" && p.startsWith("/") && !p.startsWith("//")
    ? withPrefix(p)
    : p;

// Same, for raw HTML coming from markdown bodies (<img src="/assets/...">).
export const prefixHtml = (html) =>
  typeof html === "string"
    ? html.replace(
        /\b(src|href)="\/(?!\/)/g,
        (_m, attr) => `${attr}="${withPrefix("/")}`
      )
    : html;
