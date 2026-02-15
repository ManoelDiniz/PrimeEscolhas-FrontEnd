import { ShieldCheck, SearchCheck, ExternalLink } from "lucide-react";

export const AboutThisService = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 mt-20 bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">
          Confiança & Transparência
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Nosso compromisso é ajudar você a comprar com mais segurança, clareza
          e confiança.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <ShieldCheck className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg mb-2">Não vendemos produtos</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            O Prime Escolhas é um portal informativo. Ao escolher uma oferta,
            você é direcionado para o site oficial do fornecedor.
          </p>
        </div>

        <div className="text-center">
          <SearchCheck className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg mb-2">Análise criteriosa</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Avaliamos reputação da loja, histórico do produto e feedbacks de
            consumidores antes de recomendar qualquer oferta.
          </p>
        </div>

        <div className="text-center">
          <ExternalLink className="mx-auto text-green-600 mb-4" size={36} />
          <h3 className="font-semibold text-lg mb-2">
            Como funciona o afiliado
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Podemos receber uma comissão quando você compra através dos nossos
            links, sem custo adicional para você.
          </p>
        </div>
      </div>
    </div>
  );
};
