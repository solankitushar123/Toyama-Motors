import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Sets document title + meta description/OG tags per page (no external deps). */
export default function SEO({ title, description }: Props) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [title, description]);

  return null;
}
