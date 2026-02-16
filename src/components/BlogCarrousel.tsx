"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { BlogDto } from "../types/Blogs";
import { BlogCard } from "./BlogCard";

interface BlogCarouselProps {
  blogsPosts: BlogDto[];
}

export function BlogCarousel({ blogsPosts }: BlogCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 380;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* SETA ESQUERDA */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-gray-100 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>

      {/* CARDS */}
      <div
        ref={scrollRef}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          snap-x
          snap-mandatory
          scrollbar-hide
          px-4
        "
      >
        {blogsPosts.map((blog) => (
          <div key={blog.id} className="snap-start shrink-0 w-[85%] sm:w-90">
            <BlogCard
              createdAt={blog.created_at}
              title={blog.title}
              excerpt={blog.excerpt}
              imageUrl={`${backendUrl}/storage/${blog.featured_image}`}
              slug={blog.slug}
            />
          </div>
        ))}
      </div>

      {/* SETA DIREITA */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow hover:bg-gray-100 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
