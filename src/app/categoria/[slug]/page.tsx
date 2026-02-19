import { ProductCard } from "@/src/components/ProductCard";
import { getCategories, getCategoryBySlug } from "@/src/services/Category";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return {
      title: "Categoria não encontrada",
      description: "A categoria que você procura não foi encontrada.",
    };
  }
  return {
    title: category.meta_title || category.name,
    description:
      category.meta_description ||
      `Produtos relacionados à categoria ${category.name}`,
    keywords: category.meta_keywords || category.name,
  };
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return <div>Categoria não encontrada</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl text-center font-bold mb-4">{category.name}</h1>
      <p className="text-center text-gray-600 mb-8">
        Produtos relacionados à categoria {category.name}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
