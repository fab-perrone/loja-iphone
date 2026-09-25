import React from 'react';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { ShieldCheck, Truck, Award, Headphones, ShoppingBag, ExternalLink } from 'lucide-react';

export const TrustFeaturesSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Compra Protegida Mercado Livre',
      desc: 'Compre com o programa Compra Garantida do Mercado Pago. Receba o produto exatamente como anunciado ou seu dinheiro de volta na hora.',
      cta: 'Ver Loja Oficial',
      url: STORE_LINKS.MERCADO_LIVRE,
    },
    {
      icon: Award,
      title: 'Aparelhos 100% Originais Apple',
      desc: 'Todos os iPhones são originais, homologados pela Anatel, com Nota Fiscal Eletrônica e garantia oficial de 1 ano válida em todo o Brasil.',
      cta: 'Consultar Garantia',
      url: getWhatsAppLink('Olá! Gostaria de saber mais sobre a garantia dos iPhones.'),
    },
    {
      icon: Truck,
      title: 'Envio Imediato Full Express',
      desc: 'Estoque real a pronta entrega. Embalagem reforçada e lacrada, despachada no mesmo dia com seguro total e código de rastreamento.',
      cta: 'Calcular Frete',
      url: STORE_LINKS.MERCADO_LIVRE,
    },
    {
      icon: Headphones,
      title: 'Atendimento VIP no WhatsApp',
      desc: 'Tire suas dúvidas antes, durante e após a compra diretamente com nossa equipe especializada no WhatsApp (11) 96510-9999.',
      cta: 'Chamar no WhatsApp',
      url: getWhatsAppLink(),
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Segurança & Transparência
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que comprar na iPhone Store Premium?
          </h2>
          <p className="text-zinc-400 text-sm">
            Unimos a credibilidade do Mercado Livre com o atendimento ágil e personalizado das nossas redes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>

                <div className="pt-5 mt-4 border-t border-zinc-800/80">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
                  >
                    <span>{p.cta}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
