"use client";

import Link from "next/link";
import { clickAffiliateLink, viewItem } from "../lib/Analytics";

interface ButtonAddCartsProps {
  link?: string | null;
  slug?: string | null;
  platform?: string | null;
}

export const ButtonAddCarts = ({
  link,
  slug,
  platform,
}: ButtonAddCartsProps) => {
  const handleClickLink = () => {
    if (slug) {
      viewItem(slug);
    }
  };
  const handleClickAffiliateLink = () => {
    if (platform && link) {
      clickAffiliateLink(platform, link);
    }
  };
  return (
    <div className="mt-2 space-y-3 text-center">
      {/* Botão adicionar ao carrinho */}
      {link && (
        <Link
          href={link!}
          onClick={handleClickAffiliateLink}
          className={`
          w-full rounded-md font-bold transition
          flex items-center justify-center
          whitespace-nowrap overflow-hidden text-ellipsis
          bg-green-500 hover:bg-green-600 text-white

          px-3 py-2 text-xs
          sm:px-4 sm:py-2 sm:text-sm
             
          }
        `}
        >
          Ver oferta
        </Link>
      )}

      {/* Botão ver detalhes */}
      {slug && (
        <Link
          href={`/produto/${slug}`}
          onClick={handleClickLink}
          className={`
            w-full rounded-md font-bold transition
            flex items-center justify-center
            whitespace-nowrap overflow-hidden text-ellipsis

            px-3 py-2 text-xs
            sm:px-4 sm:py-2 sm:text-sm         
           bg-gray-300 hover:bg-gray-400 text-black
            
          `}
        >
          Ver detalhes
        </Link>
      )}
    </div>
  );
};
