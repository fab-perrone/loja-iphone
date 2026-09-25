import React, { useState } from 'react';
import { STORE_LINKS, getWhatsAppLink } from '../data/links';
import { MessageCircle, X, Send, CheckCheck, Sparkles } from 'lucide-react';
import { AnalyticsEvents } from '../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSendMessage = (textToSend?: string) => {
    const finalMsg = textToSend || userMsg;
    AnalyticsEvents.clickWhatsApp(finalMsg ? `Mensagem: ${finalMsg.slice(0, 30)}` : 'Chat Flutuante');
    window.open(getWhatsAppLink(finalMsg), '_blank');
    setIsOpen(false);
    setUserMsg('');
  };

  const quickQuestions = [
    'Olá! Gostaria de consultar os iPhones disponíveis à pronta entrega.',
    'Como funciona a compra pelo Mercado Livre com garantia?',
    'Tenho um iPhone usado e quero dar de entrada na troca.',
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-auto">
      {/* Expandable Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-[330px] sm:w-[360px] rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center font-bold text-sm">
                  
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-sm leading-none">iPhone Store Premium</div>
                <div className="text-[11px] text-emerald-100 mt-1 flex items-center gap-1">
                  <span>Online</span>
                  <span>·</span>
                  <span>Responde em minutos</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-emerald-700 transition-colors text-white"
              aria-label="Fechar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-zinc-900/60 space-y-3 max-h-[320px] overflow-y-auto text-xs">
            {/* Store incoming message */}
            <div className="p-3 rounded-2xl rounded-tl-none bg-zinc-800/90 text-zinc-200 space-y-1 shadow-sm border border-zinc-700/50">
              <p className="leading-relaxed">
                Olá! 👋 Bem-vindo à <strong>iPhone Store Premium</strong>.
              </p>
              <p className="text-[11px] text-zinc-400">
                Estamos prontos para te atender. Escolha uma das opções abaixo ou digite sua mensagem:
              </p>
              <div className="text-[10px] text-zinc-500 text-right flex items-center justify-end gap-1">
                <span>Agora</span>
                <CheckCheck className="w-3 h-3 text-emerald-400" />
              </div>
            </div>

            {/* Quick action question chips */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 block">
                Dúvidas Rápidas:
              </span>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="w-full text-left p-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/60 text-zinc-300 hover:text-white text-[11px] transition-all hover:bg-zinc-900"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input Area */}
          <div className="p-2.5 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && userMsg.trim()) {
                  handleSendMessage();
                }
              }}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-colors shrink-0 shadow-md"
              aria-label="Enviar mensagem no WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Atendimento no WhatsApp"
      >
        {/* Pulsing glow ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none opacity-40" />

        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-current text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-emerald-600" />
        </div>

        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          {isOpen ? 'Fechar Atendimento' : 'Atendimento WhatsApp'}
        </span>
      </button>
    </div>
  );
};
