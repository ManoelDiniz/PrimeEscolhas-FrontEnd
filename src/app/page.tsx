import { AboutThisService } from "../components/AboutThisService";
import { AffiliateBar } from "../components/AffiliateBar";
import { BannerSection } from "../components/BannerSection";
import { BlogCarousel } from "../components/BlogCarrousel";
import CategoriesCarrousel from "../components/CategoriesCarrousel";
import { ProductCarousel } from "../components/ProductCarrousel";
import { getBlogs } from "../services/Blog";
import { getCategories } from "../services/Category";
import { getProductsIsFeatured } from "../services/Product";

export default async function Home() {
  const featuredProducts = await getProductsIsFeatured();
  const featureBlog = await getBlogs();
  const featureCategories = await getCategories();

  return (
    <div className="text-black">
      <BannerSection />

      <AffiliateBar />
      <section className="mt-16 border-y pt-8  ">
        <CategoriesCarrousel categories={featureCategories} />
        <h2 className="text-xl font-semibold mt-10">🔥 Produtos em Destaque</h2>
        {featuredProducts.length === 0 ? (
          <p className="mt-4 text-gray-500">
            Nenhum produto em destaque no momento.
          </p>
        ) : (
          <div className="">
            <ProductCarousel products={featuredProducts} />
          </div>
        )}
        <div className="grid grid-cols-4 gap-6 mt-6"></div>
      </section>
      <AboutThisService />

      <section className="mt-16 mb-12 border-b pt-8 border-none md:border-b">
        <h2 className="text-xl font-semibold">📰 Últimos Artigos</h2>
        {featureBlog.length === 0 ? (
          <p className="mt-4 text-gray-500">
            Nenhum artigo disponível no momento.
          </p>
        ) : (
          <div className="mt-6 overflow-hidden mb-5">
            <BlogCarousel blogsPosts={featureBlog} />
          </div>
        )}
      </section>
      <div className="border-b" />
    </div>
  );
}
