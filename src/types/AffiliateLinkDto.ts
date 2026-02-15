import z from "zod";

export const AffiliateLinkDto = z.object({
  id: z.number().nullable(),
  platform: z.string().nullable(),
  url: z.string().nullable(),
  price: z.string().nullable(),
  oldPrice: z.string().nullable(),
  currentPrice: z.string().nullable(),
});
