import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    order: z.number(),
    image: z.string().optional(),
    areas: z.array(z.string()).optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
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
