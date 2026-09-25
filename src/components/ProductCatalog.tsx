import React, { useState, useMemo } from 'react';
import { PRODUCTS, Product, ProductColor, StorageOption } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { Search, SlidersHorizontal } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // State for technical detail modal
  const [activeModalProduct, setActiveModalProduct] = useState<{
    product: Product;
    color: ProductColor;
    storage: StorageOption;
  } | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os iPhones' },
    { id: '16-pro', label: 'Linha iPhone 16 Pro' },
    { id: '16', label: 'Linha iPhone 16' },
    { id: '15-pro', label: 'Linha iPhone 15 Pro' },
    { id: '15', label: 'Linha iPhone 15' },
    { id: '14-13', label: 'Linhas 14 e 13' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.series === activeCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleOpenSpecs = (product: Product, color: ProductColor, storage: StorageOption) => {
    setActiveModalProduct({ product, color, storage });
  };

  return (
    <section id="catalogo" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Catálogo Completo
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Escolha seu Novo iPhone
            </h2>
            <p className="text-sm text-zinc-400 mt-2 max-w-xl">
              Modelos novos lacrados e revisados com garantia e procedência. Selecione a cor, capacidade e compre direto pelo Mercado Livre ou WhatsApp.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Buscar modelo (ex: 16 Pro, 15)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 focus:border-amber-400 rounded-xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-300"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenSpecs={handleOpenSpecs}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800">
            <p className="text-zinc-400 text-sm">Nenhum modelo encontrado para "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline font-semibold"
            >
              Ver todos os modelos
            </button>
          </div>
        )}
      </div>

      {/* Product Spec Modal */}
      {activeModalProduct && (
        <ProductDetailModal
          product={activeModalProduct.product}
          selectedColor={activeModalProduct.color}
          selectedStorage={activeModalProduct.storage}
          onClose={() => setActiveModalProduct(null)}
          onSelectColor={(c) =>
            setActiveModalProduct({
              ...activeModalProduct,
              color: c,
            })
          }
          onSelectStorage={(s) =>
            setActiveModalProduct({
              ...activeModalProduct,
              storage: s,
            })
          }
        />
      )}
    </section>
  );
};
