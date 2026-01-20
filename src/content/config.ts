import { defineCollection, z } from 'astro:content';

const manifesto = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
  }),
});

const definitions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

const messaging = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

export const collections = {
  manifesto,
  definitions,
  messaging,
};
