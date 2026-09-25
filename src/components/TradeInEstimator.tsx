import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/links';
import { RefreshCw, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnalyticsEvents } from '../utils/analytics';

interface TradeInModel {
  model: string;
  baseValue: number;
}

const TRADE_IN_MODELS: TradeInModel[] = [
  { model: 'iPhone 15 Pro Max', baseValue: 4600 },
  { model: 'iPhone 15 Pro', baseValue: 3900 },
  { model: 'iPhone 15 Plus', baseValue: 3400 },
  { model: 'iPhone 15', baseValue: 3000 },
  { model: 'iPhone 14 Pro Max', baseValue: 3600 },
  { model: 'iPhone 14 Pro', baseValue: 3100 },
  { model: 'iPhone 14', baseValue: 2400 },
  { model: 'iPhone 13 Pro Max', baseValue: 2800 },
  { model: 'iPhone 13 Pro', baseValue: 2400 },
  { model: 'iPhone 13', baseValue: 1900 },
  { model: 'iPhone 12 Pro Max', baseValue: 2100 },
  { model: 'iPhone 12', baseValue: 1500 },
  { model: 'iPhone 11 Pro / Max', baseValue: 1400 },
  { model: 'iPhone 11', baseValue: 1100 },
];

export const TradeInEstimator: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>(TRADE_IN_MODELS[0].model);
  const [selectedStorage, setSelectedStorage] = useState<string>('128GB');
  const [condition, setCondition] = useState<string>('Excelente (Sem marcas ou riscos)');
  const [batteryHealth, setBatteryHealth] = useState<string>('Acima de 85%');

  const baseItem = TRADE_IN_MODELS.find((m) => m.model === selectedModel) || TRADE_IN_MODELS[0];

  // Simple modifier logic
  let storageMultiplier = 1;
  if (selectedStorage === '256GB') storageMultiplier = 1.1;
  if (selectedStorage === '512GB') storageMultiplier = 1.2;
  if (selectedStorage === '1TB') storageMultiplier = 1.3;

  let conditionMultiplier = 1;
  if (condition.includes('Muito Bom')) conditionMultiplier = 0.9;
  if (condition.includes('Bom')) conditionMultiplier = 0.8;

  let batteryMultiplier = batteryHealth.includes('Abaixo') ? 0.92 : 1;

  const estimatedValue = Math.round(
    baseItem.baseValue * storageMultiplier * conditionMultiplier * batteryMultiplier
  );

  const handleSendToWhatsApp = () => {
    AnalyticsEvents.tradeInSimulation(selectedModel, estimatedValue);
    AnalyticsEvents.clickWhatsApp(`Troca: ${selectedModel}`);
    const msg = `Olá! Fiz a simulação de troca no site da iPhone Store Premium:\n\n📱 Meu iPhone atual: ${selectedModel}\n💾 Capacidade: ${selectedStorage}\n✨ Estado: ${condition}\n🔋 Bateria: ${batteryHealth}\n💰 Estimativa no site: até R$ ${estimatedValue.toLocaleString('pt-BR')}\n\nGostaria de abater esse valor na compra de um novo iPhone!`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="troca" className="py-16 bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Information column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Troca Inteligente</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Use seu iPhone atual como entrada no novo
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Aceitamos seu iPhone usado na troca pelo seu novo modelo. Faça uma simulação rápida e envie diretamente para nossos consultores no WhatsApp avaliarem na hora.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Avaliação justa baseada no valor de mercado atual</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Abatimento imediato no valor final do seu iPhone novo</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Migração gratuita e segura dos seus dados se desejar</span>
              </div>
            </div>
          </div>

          {/* Calculator Card */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-base font-bold text-white">Simulador de Avaliação</h3>
              <span className="text-xs text-zinc-400">Resposta em minutos</span>
            </div>

            <div className="space-y-4 text-xs">
              {/* Select Model */}
              <div>
                <label className="block text-zinc-400 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  1. Qual é o seu modelo atual?
                </label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-amber-400 rounded-xl text-white text-xs sm:text-sm focus:outline-none"
                >
                  {TRADE_IN_MODELS.map((m) => (
                    <option key={m.model} value={m.model}>
                      {m.model}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Storage */}
              <div>
                <label className="block text-zinc-400 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  2. Capacidade de Armazenamento
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['64GB', '128GB', '256GB', '512GB'].map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`py-2 px-2 rounded-lg font-semibold border transition-all ${
                        selectedStorage === storage
                          ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-zinc-400 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  3. Condição Estética
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 focus:border-amber-400 rounded-xl text-white text-xs sm:text-sm focus:outline-none"
                >
                  <option value="Excelente (Sem marcas ou riscos)">Excelente (Sem marcas ou riscos visíveis)</option>
                  <option value="Muito Bom (Pequenas marcas leves de uso)">Muito Bom (Pequenas marcas leves de uso)</option>
                  <option value="Bom (Marcas visíveis de uso, tela 100% intacta)">Bom (Marcas visíveis, sem trincos)</option>
                </select>
              </div>

              {/* Battery Health */}
              <div>
                <label className="block text-zinc-400 font-semibold mb-1.5 uppercase tracking-wider text-[11px]">
                  4. Saúde da Bateria
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Acima de 85%', 'Abaixo de 85%'].map((health) => (
                    <button
                      key={health}
                      onClick={() => setBatteryHealth(health)}
                      className={`py-2 px-3 rounded-lg font-semibold border transition-all ${
                        batteryHealth === health
                          ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {health}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimation Result */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/90 text-center space-y-1">
              <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">
                Valor Estimado de Avaliação:
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
                até R$ {estimatedValue.toLocaleString('pt-BR')}
              </div>
              <p className="text-[11px] text-zinc-500">
                Valor sujeito à conferência física do aparelho e funcionamento de todas as peças.
              </p>
            </div>

            {/* CTA Button to WhatsApp */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-600/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Avaliação no WhatsApp</span>
              <ArrowRight className="w-4 h-4 opacity-75" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
