import React from 'react';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { ShoppingBag, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.7-14.42-6.09-9.78-10.74-20.76-13.97-32.93-3.23-12.17-4.84-23.77-4.84-34.8 0-14.56 3.63-26.68 10.88-36.37 7.26-9.69 16.48-14.65 27.67-14.88 4.88 0 10.37 1.34 16.47 4.01 6.1 2.67 10.15 4.06 12.16 4.17 1.74 0 5.86-1.45 12.37-4.34 6.51-2.9 12.25-4.14 17.21-3.73 13.04 1.07 23.36 6.3 30.95 15.69-11.51 6.94-17.15 16.71-16.92 29.31.23 9.9 4.09 18.23 11.58 24.99 7.49 6.76 16.27 10.72 26.33 11.89-2.03 6.09-4.43 12.01-7.2 17.76zM119.22 33.56c0-6.72 2.39-13.3 7.16-19.74 4.77-6.44 10.84-11.08 18.2-13.92.35 1.57.53 3.09.53 4.56 0 6.64-2.5 13.25-7.51 19.82-5.01 6.57-11.14 11.16-18.38 13.78z" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white tracking-tight">
                iPhone Store <span className="text-amber-400">Premium</span>
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed text-xs max-w-sm">
              Sua referência em compra segura de iPhones novos e selecionados. Compre diretamente com proteção pelo Mercado Livre ou com atendimento VIP pelo WhatsApp.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Compra 100% Segura e Verificada</span>
            </div>
          </div>

          {/* Links: Redes Sociais */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Canais Sociais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={STORE_LINKS.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram @iphonestorepremium</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={STORE_LINKS.TIKTOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-1.5"
                >
                  <span>TikTok @rafaellasenabras</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={STORE_LINKS.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Facebook /IphoneStorePremium1</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Compras e Loja */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Onde Comprar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={STORE_LINKS.MERCADO_LIVRE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Loja Oficial Mercado Livre</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp: {STORE_LINKS.WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href="#troca" className="hover:text-white transition-colors">
                  Simulação de Troca
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Catálogo de Modelos
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento e Horários */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Atendimento
            </h4>
            <div className="space-y-1 text-xs text-zinc-400">
              <p>Segunda a Sábado: 09h às 20h</p>
              <p>Domingo: 10h às 16h (Plantão WhatsApp)</p>
              <p className="text-emerald-400 font-medium pt-1">
                WhatsApp: {STORE_LINKS.WHATSAPP_DISPLAY}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} iPhone Store Premium. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span>Apple e iPhone são marcas registradas da Apple Inc.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
