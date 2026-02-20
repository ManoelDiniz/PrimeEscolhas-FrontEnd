import { getBlogBySlug, getBlogs } from "@/src/services/Blog";
import he from "he";
import Image from "next/image";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog não encontrado",
      description: "O blog que você está procurando não foi encontrado.",
    };
  }

  const baseUrl = "https://afiliado.primeescolhas.com.br";
  const blogUrl = `${baseUrl}/blog/${slug}`;
  const urlBackEnd =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  const imageUrl = `${urlBackEnd}/storage/${blog.featured_image}`;

  return {
    title: blog.meta_title || blog.title,
    description: blog.meta_description || blog.excerpt,
    keywords: blog.meta_keywords || [blog.title],
    authors: [{ name: "Prime Escolhas" }],
    openGraph: {
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt,
      url: blogUrl,
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.meta_title || blog.title,
      description: blog.meta_description || blog.excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const urlBackEnd =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
  const { slug } = await params;

  const data = await getBlogBySlug(slug);

  // JSON-LD Schema para Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.excerpt,
    image: `${urlBackEnd}/storage/${data.featured_image}`,
    datePublished: data.created_at,
    dateModified: data.updated_at || data.created_at,
    author: {
      "@type": "Person",
      name: "Prime Escolhas",
    },
    publisher: {
      "@type": "Organization",
      name: "Prime Escolhas",
      logo: {
        "@type": "ImageObject",
        url: "https://afiliado.primeescolhas.com.br/logo/logo.png",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12 text-black">
        {/* Título */}
        <h1 className="text-4xl font-bold leading-tight mb-6">{data.title}</h1>

        {/* Meta info */}
        <p className="text-gray-500 text-sm mb-8">
          Publicado em {data.created_at}
        </p>

        {/* Imagem destaque */}
        <div className="w-full mb-10 rounded-2xl overflow-hidden">
          <Image
            src={`${urlBackEnd}/storage/${data.featured_image}` || ""}
            alt={data.title}
            width={800}
            height={400}
            className="shadow-xl rounded-2xl object-contain"
            unoptimized
          />
        </div>

        {/* Conteúdo */}
        <div
          className="
              [&&_span]:text-xl
              [&&_h1]:text-3xl
              [&&_h1]:font-bold
              [&&_h1]:mt-10
              
              [&&_h2]:text-2xl
              [&&_h2]:font-bold
              [&&_h2]:mt-8

              [&&_h3]:text-xl
              [&&_h3]:font-semibold
              [&&_h3]:mt-6

              [&&_p]:leading-relaxed
              [&&_p]:text-shadow-2xs
              [&&_p]:text-sm
              [&&_p]:md:text-xl
             
              [&&_p]:text-black
              [&&_ul]:list-disc
              [&&_ul]:pl-6

              [&&_link]:bg-green-500

              [&&_table]:mt-5
              [&&_table]:block
              [&&_table]:w-full
              [&&_table]:overflow-x-auto
              [&&_table]:md:table

              [&&_th]:whitespace-nowrap
              [&&_td]:whitespace-nowrap
        prose prose-neutral lg:prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: he.decode(data.content),
          }}
        />

        {/* CTA afiliado */}
        <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-3">
            Confira a melhor oferta agora
          </h3>
          <a
            href="#"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Ver Oferta
          </a>
        </div>
      </article>
    </>
  );
}
