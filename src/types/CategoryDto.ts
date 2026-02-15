import z from "zod";

export const CategorySchemas = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});

export type CategoryDto = z.infer<typeof CategorySchemas>;
