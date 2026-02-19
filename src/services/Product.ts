import { ProductResponseDTO } from "../types/MainResponse";
import { ProductDto, ProductSchemas } from "./../types/ProductDto";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getProducts = async (): Promise<ProductDto[]> => {
  const res = await fetch(`${backendUrl}/v1/products`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data: ProductResponseDTO = await res.json();
  return ProductSchemas.array().parse(data.data);
};

export const getProductsIsFeatured = async (): Promise<ProductDto[]> => {
  const res = await fetch(`${backendUrl}/v1/products?is_featured=1`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }
  const data: ProductResponseDTO = await res.json();
  return ProductSchemas.array().parse(data.data);
};

export const getProductBySlug = async (slug: string): Promise<ProductDto> => {
  const res = await fetch(`${backendUrl}/v1/products/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await res.json();
  return ProductSchemas.parse(data);
};
