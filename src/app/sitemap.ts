import { MetadataRoute } from "next";
import { ProductDto } from "../types/ProductDto";
import { BlogDto } from "../types/Blogs";
import { getProducts } from "../services/Product";
import { getBlogs } from "../services/Blog";
import { getCategories } from "../services/Category";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://afiliado.primeescolhas.com.br";

  try {
    const [productsRes, blogsRes, categoriesRes] = await Promise.all([
      await getProducts(),
      await getBlogs(),
      await getCategories(),
    ]);

    const products = productsRes;
    const blogs = blogsRes;
    const categories = categoriesRes;

    const staticPages: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      },
      {
        url: `${baseUrl}/ofertas`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/categorias`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      },
      {
        url: `${baseUrl}/sobre`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/contato`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];

    const productPages: MetadataRoute.Sitemap = products.map(
      (product: ProductDto) => ({
        url: `${baseUrl}/produto/${product.slug}`,
        lastModified: new Date(
          product.updated_at ?? product.created_at ?? new Date().toISOString(),
        ),
        changeFrequency: "weekly",
        priority: 0.8,
      }),
    );

    const blogPages: MetadataRoute.Sitemap = blogs.map((blog: BlogDto) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(
        blog.updated_at ?? blog.created_at ?? new Date().toISOString(),
      ),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

    const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
      url: `${baseUrl}/categoria/${category.slug}`,
      lastModified: new Date(
        category.updated_at ?? category.created_at ?? new Date().toISOString(),
      ),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

    return [...staticPages, ...productPages, ...blogPages, ...categoryPages];
  } catch (error) {
    console.error("Erro ao gerar sitemap:", error);

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
    ];
  }
}
