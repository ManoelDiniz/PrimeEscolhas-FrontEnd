import OffersPage from "./OffersPage";
import { getProducts } from "@/src/services/Product";
import { getCategories } from "@/src/services/Category";
import { ProductDto } from "@/src/types/ProductDto";
import { CategoryDto } from "@/src/types/CategoryDto";

export const metadata = {
  title: "Ofertas - Prime Escolhas",
  description:
    "Filtre e encontre as melhores ofertas por categoria, nome ou marketplace.",
};

export default async function Page() {
  const products: ProductDto[] = await getProducts();
  const categories: CategoryDto[] = await getCategories();

  return <OffersPage initialProducts={products} categories={categories} />;
}
