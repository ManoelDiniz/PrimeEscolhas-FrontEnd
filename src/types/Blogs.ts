import z from "zod";

export const blogsInterface = {
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  featured_image: z.string().url().nullable(),
  is_published: z.boolean,
  meta_title: z.string().nullable(),
  meta_description: z.string().nullable(),
  meta_keywords: z.array(z.string()).nullable(),
  created_at: z.string(),
  updated_at: z.string(),
};

export const Blog = z.object(blogsInterface);

export type BlogDto = z.infer<typeof Blog>;
