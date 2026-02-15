export function Footer() {
  return (
    <footer className="mt-16 border-t bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-lg">Prime Escolhas</span>
          <span className="text-xs mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados
          </span>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="/privacidade" className="hover:underline">
            Privacidade
          </a>
          <a href="/termos" className="hover:underline">
            Termos
          </a>
          <a href="/como-ganhamos" className="hover:underline">
            Como Ganhamos
          </a>
        </nav>

        <div className="flex gap-4">
          <a
            href="https://github.com/ManoelDiniz"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.65.35-1.11.63-1.37-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.04A9.4 9.4 0 0 1 12 7.5c.85.004 1.71.11 2.51.32 1.91-1.32 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.03.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/manoelviitor/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="hover:text-gray-300"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-.56-2.25-1.75-2.25s-1.75.87-1.75 2.25v5.5h-3v-10h3v1.25c.41-.59 1.25-1.25 2.25-1.25 2.06 0 3.5 1.44 3.5 4.25v6z" />
            </svg>
          </a>
        </div>

        <div className="text-xs text-gray-300 mt-4 md:mt-0 text-center md:text-right w-full md:w-auto">
          Desenvolvido por{" "}
          <a
            href="https://github.com/ManoelDiniz"
            target="_blank"
            rel="noopener"
            className="underline hover:text-white"
          >
            ManoelDiniz
          </a>
        </div>
      </div>
    </footer>
  );
}
