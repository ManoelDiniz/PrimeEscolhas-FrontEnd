"use client";

import { ProductCard } from "@/src/components/ProductCard";
import { ProductDto } from "@/src/types/ProductDto";
import { useMemo, useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface Props {
  initialProducts: ProductDto[];
  categories: Category[];
}

export default function OffersPage({ initialProducts, categories }: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMarketplace, setSelectedMarketplace] = useState("");

  // 🔥 Normalização para evitar erro
  const safeProducts = useMemo(() => initialProducts ?? [], [initialProducts]);

  // 🔥 Pega marketplaces corretamente
  const marketplaces = [
    ...new Set(
      safeProducts.flatMap(
        (product) =>
          product.affiliate_links?.map((link) => link.platform) ?? [],
      ),
    ),
  ];

  // 🔥 Filtro completo
  const filteredProducts = useMemo(() => {
    return safeProducts.filter((product) => {
      const matchesSearch = product.title
        ?.toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        product.category_id?.toString() === selectedCategory;

      const matchesMarketplace =
        !selectedMarketplace ||
        product.affiliate_links?.some(
          (link) => link.platform === selectedMarketplace,
        );

      return matchesSearch && matchesCategory && matchesMarketplace;
    });
  }, [search, selectedCategory, selectedMarketplace, safeProducts]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-black">
      <h1 className="text-4xl font-bold mb-10">Ofertas</h1>

      {/* FILTROS */}
      <div className="bg-white p-6 rounded-2xl shadow-md border mb-10 grid md:grid-cols-3 gap-6">
        {/* 🔎 Buscar */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Buscar por nome
          </label>
          <input
            type="text"
            placeholder="Digite o nome do produto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
          />
        </div>

        {/* 🗂 Categoria */}
        <div>
          <label className="block text-sm font-medium mb-2">Categoria</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
          >
            <option value="">Todas</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* 🏪 Marketplace */}
        <div>
          <label className="block text-sm font-medium mb-2">Marketplace</label>
          <select
            value={selectedMarketplace}
            onChange={(e) => setSelectedMarketplace(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
          >
            <option value="">Todos</option>
            {marketplaces.map((market) => (
              <option key={market} value={market!}>
                {market}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* RESULTADOS */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">Nenhuma oferta encontrada.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white ">
              <ProductCard {...product} />
              {/* MARKETPLACES */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
