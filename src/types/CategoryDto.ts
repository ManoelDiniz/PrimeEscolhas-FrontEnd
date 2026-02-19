import z from "zod";
import { AffiliateLinkDto } from "./AffiliateLinkDto";

export const CategorySchemas = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  created_at: z.string().nullable().optional(),
  updated_at: z.string().nullable().optional(),
  products: z
    .array(
      z.object({
        id: z.number(),
        title: z.string(),
        slug: z.string(),

        description: z.string().nullable().optional(),
        long_description: z.string().nullable().optional(),

        current_price: z.string().nullable().optional(),
        old_price: z.string().nullable().optional(),

        image: z.string().nullable().optional(),

        rating: z.string().nullable().optional(),
        review_count: z.number().optional(),

        score: z.string().nullable().optional(),

        is_featured: z.boolean(),
        in_stock: z.boolean(),

        category_id: z.number().nullable().optional(),

        affiliate_links: z.array(AffiliateLinkDto).optional(),
        meta_title: z.string().nullable().optional(),
        meta_description: z.string().nullable().optional(),
        meta_keywords: z.string().nullable().optional(),
        created_at: z.string().nullable().optional(),
        updated_at: z.string().nullable().optional(),
      }),
    )
    .optional(),
  meta_title: z.string().nullable().optional(),
  meta_description: z.string().nullable().optional(),
  meta_keywords: z.string().nullable().optional(),
});

export type CategoryDto = z.infer<typeof CategorySchemas>;
