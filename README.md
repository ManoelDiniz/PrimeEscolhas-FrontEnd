# Prime Escolhas

Este é um projeto desenvolvido com [Next.js](https://nextjs.org), utilizando as funcionalidades mais recentes do framework, como o App Router e suporte a Server Components. O objetivo do projeto é oferecer uma plataforma para comparação de produtos, artigos de blog e ofertas, com foco em SEO e desempenho.

## Funcionalidades

- **PWA (Progressive Web App)**: Configurado com `next-pwa` para suporte offline.
- **Renderização Híbrida**: Suporte a SSR (Server-Side Rendering), ISR (Incremental Static Regeneration) e SSG (Static Site Generation).
- **Estilização**: Utiliza Tailwind CSS para um design moderno e responsivo.
- **Gerenciamento de Estado**: Implementado com Zustand para gerenciamento de estado global.
- **Validação de Formulários**: Utiliza React Hook Form e Zod para validação de formulários.

## Estrutura do Projeto

A estrutura principal do projeto é a seguinte:

```
public/          # Arquivos estáticos (imagens, manifest.json, etc.)
src/
  app/           # Diretório do App Router (páginas e rotas)
  components/    # Componentes reutilizáveis
  services/      # Lógica de integração com APIs
  types/         # Definições de tipos TypeScript
  utils/         # Funções utilitárias
```

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Navegue até o diretório do projeto:

```bash
cd prime-escolhas
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `npm run dev`

Inicia o servidor de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm run build`

Cria uma versão otimizada para produção na pasta `.next`.

### `npm run start`

Inicia o servidor em modo de produção. Certifique-se de executar `npm run build` antes.

### `npm run lint`

Executa o linter para verificar problemas no código.

## Tecnologias Utilizadas

- **Next.js**: Framework React para produção.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Tailwind CSS**: Framework de CSS utilitário.
- **Zustand**: Gerenciamento de estado leve e escalável.
- **React Hook Form**: Manipulação de formulários.
- **Zod**: Validação de esquemas.
- **next-pwa**: Suporte a Progressive Web App.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
