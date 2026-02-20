import { CategoryDto } from "../types/CategoryDto";
import { CategoriesDTO } from "../types/MainResponse";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
const REVALIDATE_TIME = 60; // seconds

const fetchCategoryData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BACKEND_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching category data from ${endpoint}:`, error);
    throw error;
  }
};

export async function getCategories(): Promise<CategoryDto[]> {
  try {
    const data = await fetchCategoryData<CategoriesDTO>("/v1/categories");
    return data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getCategoryBySlug(
  slug: string,
): Promise<CategoryDto | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/v1/categories/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Erro ao buscar categoria");
    const data: CategoryDto = await res.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar categoria: ", error);
    return null;
  }
}
