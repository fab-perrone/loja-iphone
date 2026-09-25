import React from 'react';
import { Product, ProductColor, StorageOption } from '../data/products';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { IphoneDeviceVisual } from './IphoneDeviceVisual';
import { X, ShoppingBag, MessageCircle, ShieldCheck, Check, Cpu, Battery, Camera, Maximize, Layers, Zap } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  selectedColor: ProductColor;
  selectedStorage: StorageOption;
  onClose: () => void;
  onSelectColor: (color: ProductColor) => void;
  onSelectStorage: (storage: StorageOption) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  selectedColor,
  selectedStorage,
  onClose,
  onSelectColor,
  onSelectStorage,
}) => {
  const isPro = product.series.includes('pro');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors z-10"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Visual Column */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
            <IphoneDeviceVisual
              modelName={product.name}
              isPro={isPro}
              colorHex={selectedColor.hex}
              colorName={selectedColor.name}
              size="md"
              showBack={true}
            />
            <div className="mt-4 text-center">
              <span className="text-xs text-zinc-400">Cor Selecionada: </span>
              <span className="text-xs font-semibold text-white">{selectedColor.name}</span>
            </div>

            {/* Mini Color Swatches */}
            <div className="flex items-center gap-2 mt-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => onSelectColor(c)}
                  className={`w-6 h-6 rounded-full border transition-all ${
                    selectedColor.name === c.name ? 'ring-2 ring-amber-400 scale-110' : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: c.hex, borderColor: 'rgba(255,255,255,0.2)' }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-400 mb-1">
                <span>{product.condition}</span>
                <span className="text-zinc-600">·</span>
                <span>Garantia Apple 1 Ano</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{product.name}</h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">{product.tagline}</p>
            </div>

            {/* Storage selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Armazenamento
              </label>
              <div className="grid grid-cols-3 gap-2">
                {product.storageOptions.map((opt) => {
                  const isSelected = selectedStorage.size === opt.size;
                  return (
                    <button
                      key={opt.size}
                      onClick={() => onSelectStorage(opt)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <div className="text-sm font-bold">{opt.size}</div>
                      <div className="text-[10px] opacity-70 mt-0.5">
                        R$ {opt.pricePix.toLocaleString('pt-BR')}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pricing Box */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400">Preço à vista no Pix:</span>
                <span className="text-2xl font-extrabold text-emerald-400 tabular-nums">
                  R$ {selectedStorage.pricePix.toLocaleString('pt-BR')}
                </span>
              </div>
              <div className="flex items-baseline justify-between text-xs text-zinc-400 pt-1 border-t border-zinc-800/80">
                <span>No Mercado Livre:</span>
                <span className="text-white font-medium">{selectedStorage.installments}</span>
              </div>
            </div>

            {/* Technical Specifications Grid */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Especificações Principais
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Processador</span>
                    <span className="text-zinc-200 font-medium">{product.specs.chip}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 flex items-start gap-2">
                  <Maximize className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Tela</span>
                    <span className="text-zinc-200 font-medium">{product.specs.screen}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 flex items-start gap-2">
                  <Camera className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Câmera</span>
                    <span className="text-zinc-200 font-medium">{product.specs.camera}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 flex items-start gap-2">
                  <Battery className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Bateria</span>
                    <span className="text-zinc-200 font-medium">{product.specs.battery}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In the box items */}
            <div className="text-xs text-zinc-400 space-y-1.5 pt-1">
              <div className="font-semibold text-zinc-300">Conteúdo da Embalagem Original:</div>
              <ul className="grid grid-cols-2 gap-1 text-[11px]">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> iPhone com iOS atualizado
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Cabo de Carregamento USB-C
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Manual e documentação Apple
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Nota Fiscal Eletrônica e Garantia
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <a
                href={STORE_LINKS.MERCADO_LIVRE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Comprar no Mercado Livre</span>
              </a>

              <a
                href={getWhatsAppLink(
                  `Olá! Tenho interesse no ${product.name} ${selectedStorage.size} na cor ${selectedColor.name}. Gostaria de fechar negócio!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Negociar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
