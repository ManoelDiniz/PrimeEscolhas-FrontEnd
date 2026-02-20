export const metadata = {
  title: "Sobre Nós - Prime Escolhas",
  description:
    "Conheça o Prime Escolhas, como analisamos produtos e como funcionam nossos links de afiliado. Transparência, confiança e comparação real.",
  keywords: [
    "sobre prime escolhas",
    "análise de produtos",
    "comparação",
    "transparência",
    "links de afiliado",
  ],
  openGraph: {
    title: "Sobre Nós - Prime Escolhas",
    description:
      "Conheça o Prime Escolhas, como analisamos produtos e como funcionam nossos links de afiliado.",
    url: "https://afiliado.primeescolhas.com.br/sobre",
    type: "website",
  },
  alternates: {
    canonical: "https://afiliado.primeescolhas.com.br/sobre",
  },
};

export default function Sobre() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-black">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sobre o Prime Escolhas
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Ajudamos você a tomar decisões de compra mais inteligentes, comparando
          produtos, analisando reputação de fornecedores e destacando as
          melhores ofertas disponíveis no mercado.
        </p>
      </div>

      {/* MISSÃO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Nossa Missão</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          O Prime Escolhas nasceu com o objetivo de simplificar sua decisão de
          compra. Sabemos que escolher o melhor produto pode ser confuso,
          especialmente diante de tantas opções e promessas no mercado.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Por isso, analisamos critérios como reputação do fornecedor,
          avaliações reais de consumidores, custo-benefício e histórico do
          produto antes de recomendar qualquer oferta.
        </p>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Como Funciona</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              1. Analisamos o produto
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Avaliamos especificações técnicas, avaliações de usuários,
              reputação da loja e posicionamento no mercado.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              2. Comparamos alternativas
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Colocamos lado a lado diferentes opções para facilitar sua decisão
              e destacar o melhor custo-benefício.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">
              3. Você compra direto na loja
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ao clicar em uma oferta, você é direcionado para o site oficial do
              fornecedor, garantindo segurança na compra.
            </p>
          </div>
        </div>
      </section>

      {/* TRANSPARÊNCIA */}
      <section className="mb-20 bg-gray-50 p-10 rounded-2xl border">
        <h2 className="text-2xl font-semibold mb-6">Transparência</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          O Prime Escolhas não vende produtos diretamente. Atuamos como um
          portal informativo e comparativo.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Podemos receber uma comissão quando você realiza uma compra através
          dos nossos links de afiliado — sem qualquer custo adicional para você.
          Isso nos ajuda a manter o site atualizado e continuar produzindo
          conteúdo independente e imparcial.
        </p>
      </section>

      {/* COMPROMISSO */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Nosso Compromisso</h2>

        <ul className="space-y-4 text-gray-700">
          <li>✔ Indicar apenas fornecedores confiáveis</li>
          <li>✔ Atualizar rankings regularmente</li>
          <li>✔ Priorizar custo-benefício real</li>
          <li>✔ Manter clareza e transparência nas recomendações</li>
        </ul>
      </section>
    </div>
  );
}
