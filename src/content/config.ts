import { defineCollection, z } from 'astro:content';

const manifesto = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
  }),
});

export const collections = {
  manifesto,
};
