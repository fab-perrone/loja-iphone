/**
 * Utilitário de rastreamento de eventos para o Google Analytics (gtag.js)
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

export const AnalyticsEvents = {
  clickMercadoLivre: (productName?: string, price?: number) => {
    trackEvent('purchase_lead_mercadolivre', {
      event_category: 'ecommerce',
      event_label: productName || 'Loja Geral Mercado Livre',
      value: price,
      currency: 'BRL',
    });
  },
  clickWhatsApp: (context?: string) => {
    trackEvent('contact_whatsapp', {
      event_category: 'lead',
      event_label: context || 'Botao WhatsApp',
    });
  },
  clickSocial: (platform: 'tiktok' | 'instagram' | 'facebook') => {
    trackEvent('social_channel_click', {
      event_category: 'engagement',
      platform,
    });
  },
  tradeInSimulation: (model: string, estimatedValue: number) => {
    trackEvent('trade_in_simulation', {
      event_category: 'lead',
      model,
      estimated_value: estimatedValue,
    });
  },
};
