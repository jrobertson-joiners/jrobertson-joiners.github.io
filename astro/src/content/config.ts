import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    gallery: z.array(image()).optional(),
    location: z.string(),
    services: z.array(z.string()),
    completedDate: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  services: servicesCollection,
  projects: projectsCollection,
};
