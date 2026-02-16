"use client";

import Image from "next/image";
import Link from "next/link";
import { viewBlogPost } from "../lib/Analytics";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  createdAt: string;
  slug?: string;
}

export const BlogCard = ({
  title,
  excerpt,
  imageUrl,
  createdAt,
  slug,
}: BlogCardProps) => {
  const handleClick = () => {
    if (title) {
      viewBlogPost(title);
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={slug ? `/blog/${slug}` : "#"}
      className="
        w-full
        sm:w-72
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition
        duration-300
        overflow-hidden
        cursor-pointer
        flex
        flex-col
        mb-2
      "
    >
      {/* IMAGEM */}
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* CONTEÚDO */}
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

        <p className="text-gray-400 text-xs mt-auto">
          Publicado em {new Date(createdAt).toLocaleDateString("pt-BR")}
        </p>
      </div>
    </Link>
  );
};
