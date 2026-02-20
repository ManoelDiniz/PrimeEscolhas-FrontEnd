import { getProductBySlug, getProducts } from "../../../services/Product";
import ProductDetails from "./ProductDetail";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  const baseUrl = "https://afiliado.primeescolhas.com.br";
  const productUrl = `${baseUrl}/produto/${slug}`;

  return {
    title: product.meta_title || product.title,
    description: product.meta_description || product.description,
    keywords: product.meta_keywords?.split(",") || [product.title],
    openGraph: {
      title: product.meta_title || product.title,
      description: product.meta_description || product.description,
      url: productUrl,
      type: "product",
      images: [
        {
          url: product.image || "/logo/logo-og.png",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.meta_title || product.title,
      description: product.meta_description || product.description,
      images: [product.image || "/logo/logo-og.png"],
    },
    alternates: {
      canonical: productUrl,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  // JSON-LD Schema para Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description || product.meta_description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: "Prime Escolhas",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: product.current_price,
      highPrice: product.old_price || product.current_price,
      availability: product.in_stock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.review_count || 0,
        }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetails product={product} />
    </>
  );
}
