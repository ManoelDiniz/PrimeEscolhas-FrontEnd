import { ProductDto } from "@/src/types/ProductDto";
import { NextResponse } from "next/server";

const SITE_URL = "https://afiliado.primeescolhas.com.br";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/v1/products?perPage=20`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    const products = data.data || [];

    // Função para escapar caracteres especiais XML
    const escapeXml = (str: string | null | undefined): string => {
      if (!str) return "";
      return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
    };

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Prime Escolhas - Novos Produtos</title>
    <link>${SITE_URL}</link>
    <description>Confira os novos produtos e ofertas do Prime Escolhas</description>
    <language>pt-br</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Prime Escolhas RSS Feed</generator>
    ${products
      .map(
        (product: ProductDto) => `
    <item>
      <title>${escapeXml(product.title)}</title>
      <description>${escapeXml(product.description || product.meta_description)}</description>
      <link>${SITE_URL}/produto/${escapeXml(product.slug)}</link>
      <guid isPermaLink="true">${SITE_URL}/produto/${escapeXml(product.slug)}</guid>
      <pubDate>${product.created_at ? new Date(product.created_at).toUTCString() : new Date().toUTCString()}</pubDate>
      ${product.image ? `<image>${escapeXml(product.image)}</image>` : ""}
      ${product.current_price ? `<content:encoded><![CDATA[<p>Preço: ${escapeXml(product.current_price)}</p>]]></content:encoded>` : ""}
    </item>
    `,
      )
      .join("")}
  </channel>
</rss>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    return new NextResponse("Error generating feed", { status: 500 });
  }
}
