import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
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
