"use client";

import { ProductCard } from "@/src/components/ProductCard";
import { ProductDto } from "@/src/types/ProductDto";
import { useCallback, useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
}

export default function OffersPage({ categories }: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMarketplace, setSelectedMarketplace] = useState("");
  const [products, setProducts] = useState<ProductDto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [marketplaces, setMarketplaces] = useState<string[]>([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        perPage: "12",
      });

      if (search) params.append("search", search);
      if (selectedCategory) params.append("category_id", selectedCategory);
      if (selectedMarketplace)
        params.append("marketplace", selectedMarketplace);

      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      console.log("Fetched products:", data);
      setProducts(data.data || []);
      setTotalPages(data?.last_page || 1);

      // Extrair marketplaces únicos
      const uniqueMarketplaces = [
        ...new Set(
          data.data.flatMap(
            (product: ProductDto) =>
              product.affiliate_links?.map((link) => link.platform) ?? [],
          ),
        ),
      ] as string[];
      setMarketplaces(uniqueMarketplaces);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, search, selectedCategory, selectedMarketplace]);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, fetchProducts]);

  const handleSearch = () => {
    setCurrentPage(1);
    fetchProducts();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-black">
      <h1 className="text-4xl font-bold mb-10 text-center">Produtos</h1>

      {/* FILTROS */}
      <div className="bg-white p-6 rounded-2xl shadow-md border mb-10">
        <div className="grid md:grid-cols-3 gap-6 mb-4">
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
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
            <label className="block text-sm font-medium mb-2">
              Marketplace
            </label>
            <select
              value={selectedMarketplace}
              onChange={(e) => setSelectedMarketplace(e.target.value)}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
            >
              <option value="">Todos</option>
              {marketplaces.map((market) => (
                <option key={market} value={market}>
                  {market}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
        >
          {loading ? "Buscando..." : "Buscar Ofertas"}
        </button>
      </div>

      {/* RESULTADOS */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Carregando ofertas...</p>
        </div>
      ) : products.length === 0 ? (
        <p className="text-gray-500">Nenhuma oferta encontrada.</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* PAGINAÇÃO */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12 ">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1 || loading}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Anterior
              </button>

              <span className="text-gray-700">
                Página {currentPage} de {totalPages}
              </span>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages || loading}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Próxima
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
