export function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Prime Escolhas",
    url: "https://afiliado.primeescolhas.com.br",
    logo: "https://afiliado.primeescolhas.com.br/logo/logo.png",
    description:
      "Compare produtos, encontre as melhores ofertas e leia análises detalhadas antes de comprar. Decisões inteligentes com Prime Escolhas.",
    sameAs: [
      // Adicione as redes sociais do projeto aqui
      // "https://www.facebook.com/primeescolhas",
      // "https://www.instagram.com/primeescolhas",
      // "https://twitter.com/primeescolhas",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://afiliado.primeescolhas.com.br/contato",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
