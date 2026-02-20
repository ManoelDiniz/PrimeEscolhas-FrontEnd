import { ProductDto } from "@/src/types/ProductDto";
import { NextResponse } from "next/server";

export async function GET() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const res = await fetch(`${backendUrl}/v1/products?limit=20`, {
    cache: "no-store",
  });

  const products = await res.json();

  const xml = `
  <rss version="2.0">
    <channel>
      <title>Novos Produtos</title>
      <link>https://afiliado.primeescolhas.com.br</link>

      ${products.data
        .map(
          (product: ProductDto) => `
        <item>
          <title>${product.title}</title>
          <link>
            https://afiliado.primeescolhas.com.br/produto/${product.slug}
          </link>
          <pubDate>
            ${product.created_at ? new Date(product.created_at).toUTCString() : ""}
          </pubDate>
        </item>
      `,
        )
        .join("")}

    </channel>
  </rss>
  `;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
