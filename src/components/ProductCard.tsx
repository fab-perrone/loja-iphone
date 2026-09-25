import React, { useState } from 'react';
import { Product, ProductColor, StorageOption } from '../data/products';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { IphoneDeviceVisual } from './IphoneDeviceVisual';
import { ShoppingBag, MessageCircle, Info, Sparkles } from 'lucide-react';
import { AnalyticsEvents } from '../utils/analytics';

interface ProductCardProps {
  product: Product;
  onOpenSpecs: (product: Product, color: ProductColor, storage: StorageOption) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenSpecs }) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>(product.storageOptions[0]);

  const isPro = product.series.includes('pro');

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    AnalyticsEvents.clickWhatsApp(`${product.name} ${selectedStorage.size}`);
    const msg = `Olá! Gostaria de comprar o ${product.name} ${selectedStorage.size} na cor ${selectedColor.name} que vi na iPhone Store Premium.`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const handleMercadoLivreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    AnalyticsEvents.clickMercadoLivre(product.name, selectedStorage.priceMl);
    window.open(STORE_LINKS.MERCADO_LIVRE, '_blank');
  };

  return (
    <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg">
      {/* Top Header info */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>{product.condition}</span>
            <span aria-hidden="true">·</span>
            <span>Garantia 1 Ano</span>
          </div>
          {product.badge && (
            <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
              {product.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>
      </div>

      {/* Visual Device Area */}
      <div className="py-2 px-4 flex flex-col items-center justify-center relative cursor-pointer" onClick={() => onOpenSpecs(product, selectedColor, selectedStorage)}>
        <IphoneDeviceVisual
          modelName={product.name}
          isPro={isPro}
          colorHex={selectedColor.hex}
          colorName={selectedColor.name}
          size="md"
          showBack={true}
        />

        {/* Color picker swatches */}
        <div className="mt-4 flex items-center justify-center gap-2 z-10" onClick={(e) => e.stopPropagation()}>
          {product.colors.map((color) => {
            const isActive = selectedColor.name === color.name;
            return (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border transition-all ${
                  isActive ? 'ring-2 ring-amber-400 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                style={{ backgroundColor: color.hex, borderColor: 'rgba(255,255,255,0.2)' }}
                title={color.name}
                aria-label={color.name}
              />
            );
          })}
        </div>
        <div className="text-[11px] text-zinc-400 mt-1.5 font-medium">
          Cor: <span className="text-zinc-200">{selectedColor.name}</span>
        </div>
      </div>

      {/* Storage and Pricing Box */}
      <div className="p-5 pt-3 space-y-4 border-t border-zinc-800/80 bg-zinc-950/40">
        {/* Storage capacity selector buttons */}
        <div>
          <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-1.5 flex justify-between">
            <span>Armazenamento</span>
            <button
              onClick={() => onOpenSpecs(product, selectedColor, selectedStorage)}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 text-[11px] normal-case"
            >
              <Info className="w-3 h-3" /> Ficha Técnica
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {product.storageOptions.map((opt) => {
              const isSelected = selectedStorage.size === opt.size;
              return (
                <button
                  key={opt.size}
                  onClick={() => setSelectedStorage(opt)}
                  className={`py-1.5 px-2 text-xs font-semibold rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                      : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  {opt.size}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing display */}
        <div className="space-y-1">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-zinc-400">À vista no Pix:</span>
            <span className="text-xl font-extrabold text-white tabular-nums tracking-tight">
              R$ {selectedStorage.pricePix.toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="flex items-baseline justify-between text-xs text-zinc-400">
            <span>No Mercado Livre:</span>
            <span className="text-zinc-300 font-medium text-[11px]">{selectedStorage.installments}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          {/* Primary Mercado Livre Buy Button */}
          <button
            onClick={handleMercadoLivreClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Comprar no Mercado Livre</span>
          </button>

          {/* Secondary WhatsApp negotiation button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 hover:text-emerald-200 font-semibold rounded-xl text-xs sm:text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Pedir via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
