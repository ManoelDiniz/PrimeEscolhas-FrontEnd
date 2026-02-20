import { BlogDto } from "../types/Blogs";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
const REVALIDATE_TIME = 60; // seconds

const fetchBlogData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${BACKEND_URL}${endpoint}`, {
      next: { revalidate: REVALIDATE_TIME },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog data from ${endpoint}:`, error);
    throw error;
  }
};

export const getBlogs = async (): Promise<BlogDto[]> => {
  const data = await fetchBlogData<{ data: BlogDto[] }>("/v1/blog-posts");
  return data.data;
};

export const getBlogById = async (id: string): Promise<BlogDto> => {
  return await fetchBlogData<BlogDto>(`/v1/blog-posts/${id}`);
};

export const getBlogBySlug = async (slug: string): Promise<BlogDto> => {
  return await fetchBlogData<BlogDto>(`/v1/blog-posts/${slug}`);
};
