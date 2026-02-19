"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategoryDto } from "../types/CategoryDto";
import { useRef } from "react";
import { AiFillProduct } from "react-icons/ai";
import Link from "next/link";

interface CategoriesCarrouselProps {
  categories: CategoryDto[];
}

export default function CategoriesCarrousel({
  categories,
}: CategoriesCarrouselProps) {
  const carrouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carrouselRef.current) {
      carrouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carrouselRef.current) {
      carrouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full py-4 h-full">
      <p className="text-center text-2xl font-extrabold text-black mb-6 tracking-wide">
        <AiFillProduct className="inline-block mr-2" />
        Explore nossas categorias
      </p>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100 hidden md:flex"
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={carrouselRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 px-6"
        >
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categoria/${category.slug}`}
              className="w-40 h-20 relative top-2 left-5 flex items-center cursor-pointer justify-center bg-transparent rounded-lg shadow-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition duration-300 shrink-0 mb-5 mx-5 text-center"
            >
              {category.name}
            </Link>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100 hidden md:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
