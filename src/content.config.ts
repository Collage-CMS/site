import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { ObsidianDocumentSchema, ObsidianMdLoader } from "astro-loader-obsidian";

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const topics = defineCollection({
	loader: glob({ base: './src/content/topics', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const authors = defineCollection({
	loader: glob({ base: './src/content/authors', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			bio: z.string(),
			avatar: image().optional(),
			location: z.string().optional(),
			expertise: z.array(z.string()).optional(),
			social: z.object({
				twitter: z.string().optional(),
				github: z.string().optional(),
				linkedin: z.string().optional(),
				website: z.string().optional(),
				instagram: z.string().optional(),
				behance: z.string().optional(),
			}).optional(),
		}),
});

const vault = defineCollection({
	loader: ObsidianMdLoader({ 
		base: '../../content',
		pattern: '**/*.md'
	}),
	schema: ({ image }) => ObsidianDocumentSchema.extend({
		/* note schema goes here */
	})
});

export const collections = { blog, articles, topics, authors, vault };
