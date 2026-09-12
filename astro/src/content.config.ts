import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { serviceAreas } from './data/areas';

const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
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

// Local landing pages under /areas/. Each page covers one or more entries from
// the canonical `serviceAreas` list so AreasSection can link names to pages.
const areasCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/areas' }),
  schema: z.object({
    title: z.string(),                     // heading name, e.g. "Dunblane"
    seoTitle: z.string(),                  // <title> prefix, e.g. "Joiners in Dunblane"
    description: z.string(),               // meta description
    intro: z.string(),                     // hero strapline
    postcodes: z.array(z.string()),
    council: z.string(),                   // planning / building standards authority
    covers: z.array(z.enum(serviceAreas)), // serviceAreas entries this page represents
    order: z.number(),
  }),
});

export const collections = {
  services: servicesCollection,
  projects: projectsCollection,
  areas: areasCollection,
};
