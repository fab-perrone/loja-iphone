import React, { useState } from 'react';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { PRODUCTS } from '../data/products';
import { IphoneDeviceVisual } from './IphoneDeviceVisual';
import { ShoppingBag, MessageCircle, ShieldCheck, Truck, CreditCard, Sparkles, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const flagship = PRODUCTS[0]; // iPhone 16 Pro Max
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const activeColor = flagship.colors[selectedColorIdx];

  return (
    <section id="destaques" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Loja Oficial iPhone Store Premium</span>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400 font-normal normal-case">Linha 2026 Disponível</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              iPhone 16 Pro Max.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-zinc-200 to-amber-400">
                Titânio puro. Força suprema.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
              Adquira seu iPhone lacrado com <strong className="text-white font-medium">garantia oficial Apple de 1 ano</strong> e a máxima segurança comprando através da nossa <strong className="text-amber-400 font-medium">loja oficial no Mercado Livre</strong> ou com desconto exclusivo à vista no WhatsApp.
            </p>

            {/* Price highlight */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 max-w-lg space-y-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xs uppercase tracking-wider text-zinc-400">A partir de</span>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                  Economia no Pix
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  R$ {flagship.storageOptions[0].pricePix.toLocaleString('pt-BR')}
                </span>
                <span className="text-sm text-zinc-400 line-through">
                  R$ 9.999
                </span>
              </div>
              <div className="text-xs text-zinc-400">
                Ou no <strong className="text-zinc-200">Mercado Livre</strong> em até <strong className="text-white">12x de R$ 774,92 sem juros</strong> com Envio Full.
              </div>
            </div>

            {/* Interactive Color selector directly on Hero */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-medium text-zinc-300 flex items-center gap-2">
                <span>Acabamento selecionado:</span>
                <span className="text-white font-semibold">{activeColor.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {flagship.colors.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColorIdx(idx)}
                    className={`group relative flex items-center justify-center p-1 rounded-full transition-all ${
                      selectedColorIdx === idx ? 'ring-2 ring-amber-400 scale-110' : 'hover:scale-105'
                    }`}
                    title={color.name}
                    aria-label={color.name}
                  >
                    <span
                      className="w-7 h-7 rounded-full shadow-inner border border-white/20 block"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={STORE_LINKS.MERCADO_LIVRE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-amber-400/20 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Comprar no Mercado Livre</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>

              <a
                href={getWhatsAppLink(`Olá! Gostaria de comprar o ${flagship.name} na cor ${activeColor.name}. Podem me passar mais detalhes?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-lg hover:shadow-emerald-600/20 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>

            {/* Trust Checklist */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Original Apple</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Envio Full Express</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
                <span>12x Sem Juros</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1 Ano de Garantia</span>
              </div>
            </div>
          </div>

          {/* Right Showcase Device */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative p-6 rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800/80 shadow-2xl backdrop-blur-sm w-full max-w-sm flex flex-col items-center">
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-400/10 border border-amber-400/30 text-amber-300">
                  <Sparkles className="w-3 h-3" /> Chip A18 Pro
                </span>
              </div>

              <div className="py-4">
                <IphoneDeviceVisual
                  modelName={flagship.name}
                  isPro={true}
                  colorHex={activeColor.hex}
                  colorName={activeColor.name}
                  size="lg"
                  showBack={true}
                />
              </div>

              <div className="w-full mt-2 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="font-mono">{flagship.name}</span>
                <span className="text-zinc-200 font-medium">Controle de Câmera 48MP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
