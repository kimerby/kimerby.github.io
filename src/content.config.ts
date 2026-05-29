import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const SERIES_PATH = "src/data/series";
export const PORTFOLIO_PATH = "src/data/portfolio";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      series: z.string().optional(),
    }),
});

const series = defineCollection({
  loader: glob({ pattern: "*.md", base: `./${SERIES_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
    }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${PORTFOLIO_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string().optional(),
      start: z.string().optional(),
      end: z.string().optional(),
      category: z.enum(["creative", "it"]),
      type: z.string().optional(),
      description: z.string().optional(),
      achievement: z.string().optional(),
      role: z.string().optional(),
      tags: z.array(z.string()).default([]),
      tech: z.array(z.string()).default([]),
      ogImage: image().or(z.string()).optional(),
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
      order: z.number().default(0),
      draft: z.boolean().optional(),
      cardHref: z.string().optional(),
    }),
});

export const collections = { blog, series, portfolio };
