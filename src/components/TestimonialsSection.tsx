import React from 'react';
import { STORE_LINKS } from '../data/links';
import { Star, CheckCircle, ExternalLink, MessageCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Lucas Ferreira',
      city: 'São Paulo - SP',
      model: 'iPhone 16 Pro Max 256GB Titânio Natural',
      date: 'Compra pelo Mercado Livre Full',
      comment:
        'Aparelho chegou no dia seguinte, lacrado de fábrica com nota fiscal e garantia de 1 ano ativada direto no site da Apple. Atendimento no WhatsApp tirou todas as minhas dúvidas antes da compra.',
      rating: 5,
    },
    {
      name: 'Camila Mendonça',
      city: 'Belo Horizonte - MG',
      model: 'iPhone 16 128GB Ultramarino',
      date: 'Compra com desconto no Pix via WhatsApp',
      comment:
        'Vi o vídeo no TikTok e chamei no WhatsApp. Negociação super rápida e transparente. Postaram no mesmo dia com seguro e rastreio. Recomendo de olhos fechados!',
      rating: 5,
    },
    {
      name: 'Rodrigo Albuquerque',
      city: 'Curitiba - PR',
      model: 'iPhone 15 Pro Max 256GB Titânio Preto',
      date: 'Troca com iPhone 13 usado de entrada',
      comment:
        'Avaliaram meu iPhone 13 por um valor excelente no simulador e abateram no iPhone 15 Pro Max. Tudo certinho, equipe 10!',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Avaliações Reais
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              O que nossos clientes dizem
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Centenas de aparelhos entregues em todo o Brasil com 100% de satisfação.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white text-sm">4.9 / 5.0</span>
            <span className="text-zinc-600">·</span>
            <span>Mercado Livre & Redes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{r.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      {r.name}
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="text-[11px] text-zinc-500">{r.city}</div>
                  </div>
                </div>
                <div className="mt-2 text-[11px] font-medium text-amber-400/90 truncate">
                  {r.model}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with links to TikTok video and Instagram stories */}
        <div className="mt-10 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-xs font-semibold text-white">
              Quer conferir mais unboxings e aparelhos entregues?
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Acesse nosso TikTok e veja o vídeo de @rafaellasenabras ou os stories do Instagram.
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={STORE_LINKS.TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 bg-pink-950/60 border border-pink-700/60 text-pink-300 hover:text-pink-200 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <span>Ver no TikTok</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={STORE_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 bg-purple-950/60 border border-purple-700/60 text-purple-300 hover:text-purple-200 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <span>Ver no Instagram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
