import { BlogCard } from "@/src/components/BlogCard";
import { getBlogs } from "@/src/services/Blog";
import type { BlogDto } from "@/src/types/Blogs";

export function generateMetadata() {
  return {
    title: "Blog e Artigos - Prime Escolhas",
    description:
      "Explore nossos artigos e análises detalhadas sobre os melhores produtos do mercado. Fique por dentro das últimas tendências e dicas para fazer escolhas inteligentes.",
    openGraph: {
      title: "Blog e Artigos - Prime Escolhas",
      description:
        "Explore nossos artigos e análises detalhadas sobre os melhores produtos do mercado.",
      url: "https://afiliado.primeescolhas.com.br/blog",
      type: "website",
    },
    alternates: {
      canonical: "https://afiliado.primeescolhas.com.br/blog",
    },
  };
}
export default async function Blog() {
  const urlBackEnd =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  const data: BlogDto[] = await getBlogs();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-serif mb-10 text-black text-center">
        Blogs e Artigos
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((blog: BlogDto) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            imageUrl={`${urlBackEnd}/storage/${blog.featured_image}`}
            createdAt={blog.created_at}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
}
