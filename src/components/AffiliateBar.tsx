"use client";

import Image from "next/image";

const platforms = [
  { name: "Mercado Livre", logo: "/logo/mercado_livre.png" },
  { name: "Temu", logo: "/logo/temu.png" },
  { name: "Aliexpress", logo: "/logo/aliexpress.png" },
];

const duplicated = [
  ...platforms,
  ...platforms,
  ...platforms,
  ...platforms,
  ...platforms,
  ...platforms,
];

export const AffiliateBar = () => {
  return (
    <div className="w-full mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white/50 rounded-xl shadow-2xl shadow-black/20">
        <p className="text-center text-sm font-semibold text-gray-500 mb-6 tracking-wide">
          Somos afiliados de
        </p>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll w-max">
            {duplicated.map((platform, index) => (
              <div key={index} className="flex items-center px-10">
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  width={100}
                  height={50}
                  className="object-contain opacity-60 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
