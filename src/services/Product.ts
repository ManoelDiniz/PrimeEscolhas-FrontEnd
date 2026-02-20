import { ProductResponseDTO } from "../types/MainResponse";
import { ProductDto, ProductSchemas } from "./../types/ProductDto";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const REVALIDATE_TIME = 60; // seconds

if (!BACKEND_URL) {
  throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");
}

const fetchWithErrorHandling = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching from ${url}:`, error);
    throw error;
  }
};

export const getProducts = async (): Promise<ProductDto[]> => {
  const data: ProductResponseDTO = await fetchWithErrorHandling(
    `${BACKEND_URL}/v1/products`,
    { next: { revalidate: REVALIDATE_TIME } },
  );

  return ProductSchemas.array().parse(data.data);
};

export const getProductsIsFeatured = async (): Promise<ProductDto[]> => {
  const data: ProductResponseDTO = await fetchWithErrorHandling(
    `${BACKEND_URL}/v1/products?is_featured=1&page=1&perPage=100`,
    { next: { revalidate: REVALIDATE_TIME } },
  );

  return ProductSchemas.array().parse(data.data);
};

export const getProductBySlug = async (slug: string): Promise<ProductDto> => {
  const data = await fetchWithErrorHandling(
    `${BACKEND_URL}/v1/products/${slug}`,
    { next: { revalidate: REVALIDATE_TIME } },
  );

  return ProductSchemas.parse(data);
};

interface ProductsWithPaginationParams {
  page?: number;
  perPage?: number;
  search?: string;
  categoryId?: string;
  marketplace?: string;
}

interface PaginatedResponse {
  data: ProductDto[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export const getProductsWithPagination = async ({
  page = 1,
  perPage = 12,
  search = "",
  categoryId = "",
  marketplace = "",
}: ProductsWithPaginationParams = {}): Promise<PaginatedResponse> => {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
  });

  if (search) params.append("search", search);
  if (categoryId) params.append("category_id", categoryId);
  if (marketplace) params.append("marketplace", marketplace);

  const data: ProductResponseDTO & { meta: PaginatedResponse["meta"] } =
    await fetchWithErrorHandling(
      `${BACKEND_URL}/v1/products?${params.toString()}`,
      { cache: "no-store" },
    );

  return {
    data: ProductSchemas.array().parse(data.data),
    meta: data.meta,
  };
};
