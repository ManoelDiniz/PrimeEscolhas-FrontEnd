import { getCategories } from "@/src/services/Category";
import { CategoryDto } from "@/src/types/CategoryDto";
import OffersPage from "./OffersPage";

export const metadata = {
  title: "Ofertas e Promoções - Prime Escolhas",
  description:
    "Filtre e encontre as melhores ofertas por categoria, nome ou marketplace. Compare preços e economize nas suas compras online.",
  keywords: [
    "ofertas",
    "promoções",
    "descontos",
    "melhores preços",
    "marketplace",
    "comparação de preços",
  ],
  openGraph: {
    title: "Ofertas e Promoções - Prime Escolhas",
    description:
      "Filtre e encontre as melhores ofertas por categoria, nome ou marketplace.",
    url: "https://afiliado.primeescolhas.com.br/ofertas",
    type: "website",
  },
  alternates: {
    canonical: "https://afiliado.primeescolhas.com.br/ofertas",
  },
};

export default async function Page() {
  const categories: CategoryDto[] = await getCategories();

  return <OffersPage categories={categories} />;
}
