export async function getCategories() {
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

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return [];
  }
}
