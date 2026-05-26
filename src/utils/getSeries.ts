import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";
import postFilter from "./postFilter";

export function getSeriesPosts(
  posts: CollectionEntry<"blog">[],
  seriesSlug: string
): CollectionEntry<"blog">[] {
  return posts
    .filter(postFilter)
    .filter(p => p.data.series && slugifyStr(p.data.series) === seriesSlug)
    .sort((a, b) => a.data.pubDatetime.getTime() - b.data.pubDatetime.getTime());
}
