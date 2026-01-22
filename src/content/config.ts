import { defineCollection, z } from 'astro:content';

const manifesto = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    emoji: z.string().optional(),
    gradient: z.string().optional(),
    discussion_id: z.number().optional(),
    roles: z.array(z.object({
      title: z.string(),
      emoji: z.string(),
      tagline: z.string(),
      gradient: z.string(),
      link: z.string(),
      description: z.string(),
    })).optional(),
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
