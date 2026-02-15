"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import banner1 from "../../public/Banners/banner1.png";
import banner2 from "../../public/Banners/banner2.png";
import banner3 from "../../public/Banners/banner3.png";

const banners = [banner1, banner2, banner3];

export const BannerSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block w-full">
      <div className="relative w-full h-96 overflow-hidden rounded-2xl">
        {banners.map((banner, index) => (
          <Image
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
};
