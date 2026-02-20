"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Prime Escolhas Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/ofertas" className="hover:text-primary transition">
            Ofertas
          </Link>
          <Link href="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <Link href="/sobre" className="hover:text-primary transition">
            Sobre
          </Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link
            href="/contato"
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-xl hover:bg-primary-dark transition"
          >
            Contato
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
          >
            <rect x="3" y="6" width="18" height="2" rx="1" />
            <rect x="3" y="12" width="18" height="2" rx="1" />
            <rect x="3" y="18" width="18" height="2" rx="1" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Home
          </Link>
          <Link
            href="/produtos"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Produtos
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Blog
          </Link>

          <Link
            href="/sobre"
            onClick={() => setOpen(false)}
            className="text-gray-700 font-medium"
          >
            Sobre
          </Link>
          <Link
            href="/contato"
            onClick={() => setOpen(false)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow-xl hover:bg-primary-dark transition text-center"
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  );
}
