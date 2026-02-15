"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { BlogDto } from "../types/Blogs";
import { BlogCard } from "./BlogCard";

interface BlogCarouselProps {
  blogsPosts: BlogDto[];
  blog_length?: (blog_length: number) => void;
}

export function BlogCarousel({ blogsPosts }: BlogCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Seta esquerda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Lista de produtos */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto md:overflow-x-hidden scroll-smooth ml-12"
      >
        {blogsPosts.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              createdAt={blog.created_at}
              title={blog.title}
              excerpt={blog.excerpt}
              imageUrl={`${backendUrl}/storage/${blog.featured_image}`}
              slug={blog.slug}
            />
          );
        })}
      </div>

      {/* Seta direita */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-100 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
