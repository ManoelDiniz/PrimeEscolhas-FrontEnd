import { ProductDto } from "../types/ProductDto";

/**
 * Verifica se um produto tem desconto promocional ativo
 */
export function hasActiveDiscount(product: ProductDto): boolean {
  const currentPrice = Number(product.current_price);
  const oldPrice = Number(product.old_price);

  return (
    oldPrice > 0 &&
    currentPrice !== null &&
    currentPrice !== undefined &&
    currentPrice > 0 &&
    currentPrice < oldPrice
  );
}

/**
 * Retorna o preço final do produto (promocional ou regular)
 */
export function getFinalPrice(product: ProductDto): number {
  const currentPrice = Number(product.current_price);
  const oldPrice = Number(product.old_price);
  return hasActiveDiscount(product) && currentPrice ? currentPrice : oldPrice;
}

/**
 * Calcula a porcentagem de desconto
 */
export function getDiscountPercent(
  originalPrice: number,
  promotionalPrice: number,
): number {
  if (promotionalPrice >= originalPrice) return 0;

  return Math.round(((originalPrice - promotionalPrice) / originalPrice) * 100);
}
