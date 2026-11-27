import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const bookLanguage = z.enum(['en', 'uk']);

const downloadEntry = z.union([
    z.url(),
    z.object({
        url: z.url(),
        label: z.string().optional(),
    }),
]);

const books = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().max(160),
            edition: z.enum(['1E', '2E', '2E-RE', 'REUP', 'OpenD6']),
            category: z.enum(['core', 'sourcebook', 'adventure', 'supplement']),
            publisher: z.string().default('West End Games'),
            author: z.union([z.string(), z.array(z.string())]).optional(),
            releaseYear: z.number().int().optional(),
            productCode: z.string().optional(),
            isbn: z.string().optional(),
            pages: z.number().int().optional(),
            cover: image().optional(),
            languages: z.array(bookLanguage).optional(),
            downloads: z
                .object({
                    en: z.union([downloadEntry, z.array(downloadEntry)]).optional(),
                    uk: z.union([downloadEntry, z.array(downloadEntry)]).optional(),
                })
                .optional(),
        }),
});

export const collections = { books };
