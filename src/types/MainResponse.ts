import { z } from "zod";
import { CategorySchemas } from "./CategoryDto";
import { ProductSchemas } from "./ProductDto";

export interface PaginationLinkDTO {
  url: string | null;
  label: string;
  active: boolean;
}

export const ProductResponseDTOSchema = z.object({
  current_page: z.number(),
  data: z.array(ProductSchemas),
  first_page_url: z.string(),
  from: z.number(),
  last_page: z.number(),
  last_page_url: z.string(),
  links: z.array(
    z.object({
      url: z.string().nullable(),
      label: z.string(),
      active: z.boolean(),
    }),
  ),
  next_page_url: z.string().nullable(),
});

export type ProductResponseDTO = z.infer<typeof ProductResponseDTOSchema>;

export const CategoriesSchemas = z.object({
  current_page: z.number(),
  data: z.array(CategorySchemas),
  first_page_url: z.string(),
  from: z.number(),
  last_page: z.number(),
  last_page_url: z.string(),
  links: z.array(
    z.object({
      url: z.string().nullable(),
      label: z.string(),
      active: z.boolean(),
    }),
  ),
  next_page_url: z.string().nullable(),
});

export type CategoriesDTO = z.infer<typeof CategoriesSchemas>;
