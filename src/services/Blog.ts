import { BlogDto } from "../types/Blogs";

const urlBackEnd =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export const getBlogs = async (): Promise<BlogDto[]> => {
  try {
    const response = await fetch(`${urlBackEnd}/v1/blog-posts`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getBlogById = async (id: string): Promise<BlogDto> => {
  try {
    const response = await fetch(`${urlBackEnd}/v1/blog-posts/${id}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};

export const getBlogBySlug = async (slug: string): Promise<BlogDto> => {
  try {
    const response = await fetch(`${urlBackEnd}/v1/blog-posts/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog:", error);
    throw error;
  }
};
