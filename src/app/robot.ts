export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [
      "https://afiliado.primeescolhas.com.br/sitemap.xml",
      "https://afiliado.primeescolhas.com.br/feed.xml",
    ],
  };
}
