"use client";

import { useState } from "react";
import Image from "next/image";
import he from "he";
import { ProductDto } from "@/src/types/ProductDto";
import { clickAffiliateLink } from "@/src/lib/Analytics";

export default function ProductDetails({ product }: { product: ProductDto }) {
  const backEnd = process.env.NEXT_PUBLIC_BACKEND_URL;

  const links = product.affiliate_links ?? [];

  const [selectedLinkId, setSelectedLinkId] = useState(
    links.length > 0 ? links[0].id : null,
  );

  const selectedLink = links.find((l) => l.id === selectedLinkId);
  const handleClickLink = () => {
    if (selectedLink) {
      clickAffiliateLink(selectedLink.platform ?? "", selectedLink!.url ?? "");
    }
  };

  return (
    <div className="text-black">
      <div className="flex flex-col md:flex-row gap-14">
        {/* IMAGEM */}
        {product.image && (
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={`${backEnd}/storage/${product.image}`}
              alt={product.title}
              width={500}
              height={500}
              className="shadow-xl rounded-2xl object-contain"
              unoptimized
            />
          </div>
        )}

        {/* INFO */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold leading-tight mb-6">
            {product.title}
          </h1>

          {/* 🔥 BOTÕES DE MARKETPLACE */}
          {links.length > 1 && (
            <div className="flex gap-3 mb-6 flex-wrap">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setSelectedLinkId(link.id)}
                  className={`px-4 py-2 rounded-lg border transition font-medium
                    ${
                      selectedLinkId === link.id
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {link.platform}
                </button>
              ))}
            </div>
          )}

          {/* 💰 PREÇO DINÂMICO */}
          {selectedLink ? (
            <div className="mb-6">
              {(() => {
                const current = Number(selectedLink.currentPrice);
                const old = Number(selectedLink.oldPrice);

                return (
                  <>
                    <div className="flex items-center gap-4">
                      <span className="text-3xl text-green-600 font-bold">
                        R$ {current.toFixed(2)}
                      </span>

                      {old > current && (
                        <span className="text-gray-400 line-through text-lg">
                          R$ {old.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {old > current && (
                      <p className="text-sm text-green-700 mt-2">
                        Economize R$ {(old - current).toFixed(2)}
                      </p>
                    )}
                  </>
                );
              })()}
            </div>
          ) : (
            <>
              {(product.current_price || product.old_price) && (
                <div className="mb-6">
                  {(() => {
                    const current = Number(product.current_price);
                    const old = Number(product.old_price);
                    const hasDiscount = current > 0 && old > current;

                    return (
                      <>
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-3xl font-bold ${
                              hasDiscount ? "text-green-600" : "text-gray-800"
                            }`}
                          >
                            R${" "}
                            {hasDiscount ? current.toFixed(2) : old.toFixed(2)}
                          </span>
                          {hasDiscount && (
                            <span className="text-gray-400 line-through text-lg">
                              R$ {old.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {hasDiscount && (
                          <p className="text-sm text-green-700 mt-2">
                            Economize R$ {(old - current).toFixed(2)}
                          </p>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
            </>
          )}

          {/* BOTÃO PRINCIPAL */}
          {selectedLink && (
            <a
              href={selectedLink.url || "#"}
              target="_blank"
              onClick={handleClickLink}
              className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-4 rounded-xl text-lg font-semibold text-center shadow-md"
            >
              Ver Oferta na {selectedLink.platform}
            </a>
          )}
        </div>
      </div>

      {/* DESCRIÇÃO */}
      {product.long_description && (
        <div className="prose prose-neutral lg:prose-lg max-w-none mt-14">
          <div
            dangerouslySetInnerHTML={{
              __html: he.decode(product.long_description),
            }}
          />
        </div>
      )}
    </div>
  );
}
