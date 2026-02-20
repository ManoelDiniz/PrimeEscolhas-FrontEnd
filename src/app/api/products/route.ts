import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("per_page") || "12";
    const search = searchParams.get("search") || "";
    const categoryId = searchParams.get("category_id") || "";
    const marketplace = searchParams.get("marketplace") || "";

    const params = new URLSearchParams({
      page,
      per_page: perPage,
    });

    if (search) params.append("search", search);
    if (categoryId) params.append("category_id", categoryId);
    if (marketplace) params.append("marketplace", marketplace);

    const response = await fetch(
      `${BACKEND_URL}/v1/products?${params.toString()}`,
      {
        headers: {
          "Content-Type": "application/json",
        },

        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
