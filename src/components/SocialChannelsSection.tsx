import React from 'react';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { ExternalLink, Play, ShoppingBag, MessageCircle, CheckCircle2 } from 'lucide-react';
import { AnalyticsEvents } from '../utils/analytics';

export const SocialChannelsSection: React.FC = () => {
  return (
    <section id="redes" className="py-16 border-y border-zinc-800/80 bg-zinc-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Canais Oficiais & Confiança
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Acompanhe Nossas Redes & Entregas
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Veja unboxings de clientes no TikTok, stories diários de entregas no Instagram, nossa comunidade no Facebook e compre com total garantia no Mercado Livre ou WhatsApp.
          </p>
        </div>

        {/* 4 Cards Grid: TikTok, Instagram, Facebook, Mercado Livre */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: TikTok with direct video highlight */}
          <div className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between group hover:border-pink-500/50 transition-all shadow-lg hover:shadow-pink-500/5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.87-4.47V8.67a8.28 8.28 0 0 0 4.9 1.58V6.81a4.8 4.8 0 0 1-1-.12z" />
                  </svg>
                </div>
                <span className="text-xs text-pink-400 font-medium flex items-center gap-1">
                  <Play className="w-3 h-3 fill-current" /> Vídeo Viral
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">TikTok Oficial</h3>
                <p className="text-xs text-zinc-400 mt-1">@rafaellasenabras</p>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  Assista ao vídeo em destaque mostrando detalhes reais do iPhone, tela, câmera e acabamento.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                  <span>Unboxing & Teste de Câmera</span>
                </div>
                <p className="text-[11px] text-zinc-500 truncate">video/7581621584167734536</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STORE_LINKS.TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => AnalyticsEvents.clickSocial('tiktok')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-pink-950/40 text-pink-300 hover:text-pink-200 border border-zinc-700 hover:border-pink-500/50 rounded-xl text-xs font-semibold transition-all group-hover:shadow"
              >
                <span>Assistir no TikTok</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Instagram */}
          <div className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between group hover:border-purple-500/50 transition-all shadow-lg hover:shadow-purple-500/5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-xs text-purple-400 font-medium">Stories Diários</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Instagram</h3>
                <p className="text-xs text-zinc-400 mt-1">@iphonestorepremium</p>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  Acompanhe fotos reais de cada aparelho em estoque, comprovantes de envio e depoimentos nos destaques.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Destaques com envios e clientes</span>
                </div>
                <p className="text-[11px] text-zinc-500">Postagens constantes de novidades</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STORE_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => AnalyticsEvents.clickSocial('instagram')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-purple-950/40 text-purple-300 hover:text-purple-200 border border-zinc-700 hover:border-purple-500/50 rounded-xl text-xs font-semibold transition-all group-hover:shadow"
              >
                <span>Seguir no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Facebook */}
          <div className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 flex flex-col justify-between group hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-xs text-blue-400 font-medium">Página Oficial</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Facebook</h3>
                <p className="text-xs text-zinc-400 mt-1">IphoneStorePremium1</p>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  Avaliações verificadas, informações da loja e promoções atualizadas para a comunidade.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>Comunidade e avaliações</span>
                </div>
                <p className="text-[11px] text-zinc-500">Transparência e credibilidade</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STORE_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => AnalyticsEvents.clickSocial('facebook')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-zinc-900 hover:bg-blue-950/40 text-blue-300 hover:text-blue-200 border border-zinc-700 hover:border-blue-500/50 rounded-xl text-xs font-semibold transition-all group-hover:shadow"
              >
                <span>Acessar no Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: Mercado Livre */}
          <div className="rounded-2xl bg-gradient-to-b from-amber-950/20 via-zinc-900 to-zinc-950 border border-amber-500/40 p-6 flex flex-col justify-between group hover:border-amber-400 transition-all shadow-lg hover:shadow-amber-500/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-zinc-950 flex items-center justify-center font-black group-hover:scale-105 transition-transform shadow-md">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Compra Garantida
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Mercado Livre</h3>
                <p className="text-xs text-amber-400/90 font-medium mt-1">Loja Oficial com Envio Full</p>
                <p className="text-xs text-zinc-300 mt-3 leading-relaxed">
                  Compre com a proteção do Mercado Pago: parcele em até 12x sem juros e receba com entrega expressa rastreada.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dinheiro 100% Protegido</span>
                </div>
                <p className="text-[11px] text-amber-300/60">Se não receber como combinado, devolvemos seu dinheiro</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={STORE_LINKS.MERCADO_LIVRE}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => AnalyticsEvents.clickMercadoLivre('Card Destaque Mercado Livre')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <span>Visitar Loja Mercado Livre</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
