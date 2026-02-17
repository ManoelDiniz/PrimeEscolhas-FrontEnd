import { ProductDto } from "../types/ProductDto";
import { formatCurrency } from "../utils/Currency";
import { hasActiveDiscount } from "../utils/Product";
import Image from "next/image";
import { ButtonAddCarts } from "./ButtonsRedirect";

export const ProductCard = (product: ProductDto) => {
  const currentPrice = Number(product.current_price);
  const oldPrice = Number(product.old_price);
  const hasDiscount = hasActiveDiscount(product);

  const finalPrice = hasDiscount && oldPrice > 0 ? currentPrice : oldPrice;
  console.log(
    "ProductCard renderizado para:",
    product.title,
    "com desconto?",
    hasDiscount,
    "preço atual:",
    formatCurrency(currentPrice),
    "preço antigo:",
    formatCurrency(finalPrice),
  );
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

  return (
    <div className="relative flex h-90 w-50 shrink-0 flex-col rounded-xl bg-white  shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 mb-5 ">
      {/* Badge desconto */}
      {hasDiscount && (
        <span className="absolute left-3 top-3 rounded-full bg-lime-500 px-2 py-1 text-xs font-bold text-black">
          OFERTA
        </span>
      )}

      {/* Imagem */}
      <div className="flex h-35 items-center justify-center">
        {product.image ? (
          <Image
            src={`${backendUrl}/storage/${product.image}`}
            alt={product.title}
            width={120}
            height={120}
            className="object-contain"
            unoptimized
          />
        ) : (
          <div className="h-30 w-30 bg-gray-100 rounded-md" />
        )}
      </div>

      {/* Nome */}
      <div className="mt-2 h-10">
        <h3 className="text-sm font-medium text-black line-clamp-2">
          {product.title}
        </h3>
      </div>

      {/* Espaçador */}
      <div className="flex-1" />

      {/* Preço */}
      <div className="">
        {hasDiscount && (
          <span className="block text-sm text-gray-400 line-through">
            {formatCurrency(oldPrice)}
          </span>
        )}

        <span className="text-lg font-bold text-black">
          {finalPrice > 0
            ? formatCurrency(finalPrice)
            : formatCurrency(currentPrice)}
        </span>

        <ButtonAddCarts
          link={product.affiliate_links?.[0]?.url}
          slug={product.slug}
          platform={product.affiliate_links?.[0]?.platform}
        />
      </div>
    </div>
  );
};
