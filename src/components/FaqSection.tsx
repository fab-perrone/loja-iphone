import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/links';
import { ChevronDown, MessageCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Como funciona a compra pelo Mercado Livre?',
      answer:
        'Ao clicar no botão de compra no Mercado Livre, você é redirecionado para a loja oficial com a proteção do Mercado Pago. Você pode parcelar em até 12x sem juros no cartão de crédito, e seu pagamento só é liberado para a loja após você receber o aparelho intacto em suas mãos.',
    },
    {
      question: 'Os aparelhos são originais e homologados pela Anatel?',
      answer:
        'Sim, 100% originais Apple. Todos os aparelhos novos vêm em caixa lacrada de fábrica com selo Anatel, número de série válido para consulta no site oficial da Apple (checkcoverage.apple.com) e Nota Fiscal Eletrônica no nome do comprador.',
    },
    {
      question: 'Qual é a garantia do iPhone?',
      answer:
        'Os aparelhos novos lacrados possuem 1 ano de garantia mundial oficial Apple, válida em qualquer Apple Store ou assistência técnica autorizada do Brasil. Para seminovos selecionados, oferecemos garantia da loja com laudo de teste de 3 meses.',
    },
    {
      question: 'Como funciona a compra à vista no Pix pelo WhatsApp?',
      answer:
        'Para compras à vista via WhatsApp (11) 96510-9999, conseguimos repassar o desconto das taxas de plataforma diretamente para você, resultando em um valor promocional bem mais atrativo. Enviamos fotos do produto real, número de série e código de rastreamento no mesmo dia.',
    },
    {
      question: 'Como funciona a troca do meu iPhone usado?',
      answer:
        'Você pode utilizar nosso simulador no site ou enviar fotos do seu iPhone atual diretamente no nosso WhatsApp. Fazemos uma pré-avaliação rápida e abatemos o valor acordado diretamente na compra do seu modelo novo.',
    },
    {
      question: 'Vocês realizam envios para todo o Brasil?',
      answer:
        'Sim! Realizamos envios diários através do Mercado Envios Full e Sedex Expresso com seguro total de carga para qualquer cidade do Brasil. Em poucas horas após a confirmação você já recebe o código de rastreamento oficial dos Correios/transportadora.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-20 bg-zinc-950/60 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas & Respostas
          </h2>
          <p className="text-zinc-400 text-sm">
            Tudo o que você precisa saber antes de adquirir seu novo iPhone.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/90 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 text-center p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-3">
          <p className="text-xs sm:text-sm text-zinc-300 font-medium">
            Ainda tem alguma dúvida específica sobre estoque, cores ou entrega?
          </p>
          <a
            href={getWhatsAppLink('Olá! Estava lendo as dúvidas frequentes no site e gostaria de tirar uma dúvida.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com um Consultor no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
