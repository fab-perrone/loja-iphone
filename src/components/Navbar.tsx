import React, { useState } from 'react';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { ShoppingBag, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/80">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-b border-zinc-800 text-xs py-1.5 px-4 text-center text-zinc-300 flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> Compra Garantida Mercado Livre
        </span>
        <span className="text-zinc-600 hidden sm:inline">·</span>
        <span className="hidden sm:inline text-zinc-400">Envio Full com rastreio imediato</span>
        <span className="text-zinc-600 hidden md:inline">·</span>
        <span className="hidden md:inline text-zinc-400">Atendimento WhatsApp: {STORE_LINKS.WHATSAPP_DISPLAY}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Wordmark / Brand Title */}
        <a href="#" className="flex items-center gap-2 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-white group-hover:border-zinc-500 transition-colors">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.7-14.42-6.09-9.78-10.74-20.76-13.97-32.93-3.23-12.17-4.84-23.77-4.84-34.8 0-14.56 3.63-26.68 10.88-36.37 7.26-9.69 16.48-14.65 27.67-14.88 4.88 0 10.37 1.34 16.47 4.01 6.1 2.67 10.15 4.06 12.16 4.17 1.74 0 5.86-1.45 12.37-4.34 6.51-2.9 12.25-4.14 17.21-3.73 13.04 1.07 23.36 6.3 30.95 15.69-11.51 6.94-17.15 16.71-16.92 29.31.23 9.9 4.09 18.23 11.58 24.99 7.49 6.76 16.27 10.72 26.33 11.89-2.03 6.09-4.43 12.01-7.2 17.76zM119.22 33.56c0-6.72 2.39-13.3 7.16-19.74 4.77-6.44 10.84-11.08 18.2-13.92.35 1.57.53 3.09.53 4.56 0 6.64-2.5 13.25-7.51 19.82-5.01 6.57-11.14 11.16-18.38 13.78z" />
            </svg>
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
            iPhone Store <span className="text-amber-400 font-semibold">Premium</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <a href="#destaques" className="hover:text-white transition-colors">Destaques</a>
          <a href="#catalogo" className="hover:text-white transition-colors">Modelos</a>
          <a href="#redes" className="hover:text-white transition-colors">Redes Sociais</a>
          <a href="#troca" className="hover:text-white transition-colors">Troca Fácil</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Avaliações</a>
          <a href="#duvidas" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={STORE_LINKS.MERCADO_LIVRE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Loja no</span> Mercado Livre
          </a>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/60 border border-emerald-800/60 rounded-lg transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-4 space-y-3">
          <a
            href="#destaques"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            Destaques
          </a>
          <a
            href="#catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            Modelos Disponíveis
          </a>
          <a
            href="#redes"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            Nossas Redes (TikTok, Insta, Face)
          </a>
          <a
            href="#troca"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            Simulador de Troca
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            Depoimentos de Clientes
          </a>
          <a
            href="#duvidas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-lg"
          >
            Perguntas Frequentes
          </a>
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={STORE_LINKS.MERCADO_LIVRE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400 text-zinc-950 font-semibold text-sm rounded-lg"
            >
              <ShoppingBag className="w-4 h-4" /> Comprar no Mercado Livre
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 text-white font-semibold text-sm rounded-lg"
            >
              <MessageCircle className="w-4 h-4" /> Atendimento no WhatsApp ({STORE_LINKS.WHATSAPP_DISPLAY})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
