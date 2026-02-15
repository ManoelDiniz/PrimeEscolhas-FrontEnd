/**
 * Formata um número para o formato de moeda brasileira (R$)
 * @param value - Valor numérico a ser formatado
 * @param options - Opções de formatação
 * @returns String formatada como "R$ 123,45"
 */
export function formatCurrency(
  value: number,
  options: { showSymbol?: boolean } = {},
): string {
  const { showSymbol = true } = options;

  const formatted = Number(value).toFixed(2).replace(".", ",");

  return showSymbol ? `R$ ${formatted}` : formatted;
}

/**
 * Formata um número para o formato de moeda brasileira (R$)
 * @param value - Valor numérico a ser formatado
 * @param options - Opções de formatação
 * @returns String formatada como "R$ 123,45"
 */
export function formatCurrencyNumber(
  value: number,
  options: { showSymbol?: boolean } = {},
): string {
  const { showSymbol = true } = options;

  const formatted = value.toFixed(2).replace(".", ",");

  return showSymbol ? `R$ ${formatted}` : formatted;
}
/**
 * Converte string de moeda "R$ 123,45" para número
 * @param currencyString - String no formato "R$ 123,45"
 * @returns Valor numérico
 */
export function parseCurrency(currencyString: string): number {
  return (
    parseFloat(
      currencyString.replace("R$", "").replace(/\s/g, "").replace(",", "."),
    ) || 0
  );
}
