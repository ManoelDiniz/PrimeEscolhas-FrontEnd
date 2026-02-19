import { CategoryDto } from "../types/CategoryDto";
import { CategoriesDTO } from "../types/MainResponse";

export async function getCategories(): Promise<CategoryDto[]> {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  try {
    const res = await fetch(`${backendUrl}/v1/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Erro ao buscar categorias");

    const data: CategoriesDTO = await res.json();
    return data.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
}

export async function getCategoryBySlug(
  slug: string,
): Promise<CategoryDto | null> {
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  try {
    const res = await fetch(`${backendUrl}/v1/categories/${slug}`, {
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
    console.error("Erro ao buscar categoria:", error);
    return null;
  }
}
