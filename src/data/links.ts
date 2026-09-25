/**
 * Links oficiais da loja iPhone Store Premium
 */
export const STORE_LINKS = {
  INSTAGRAM: 'https://www.instagram.com/iphonestorepremium/',
  FACEBOOK: 'https://www.facebook.com/IphoneStorePremium1',
  MERCADO_LIVRE: 'https://www.mercadolivre.com.br/loja/apple#client=CUSTOM_CONTENT_PAGE&component_id=header_logo&component=header_logo&label=Apple&tracking_id=4101ab166ab179da3b56eeab7cf0fa59&global_position=1',
  TIKTOK: 'https://www.tiktok.com/@rafaellasenabras/video/7581621584167734536',
  WHATSAPP_PHONE: '11965109999',
  WHATSAPP_DISPLAY: '(11) 96510-9999',
};

export function getWhatsAppLink(customMessage?: string): string {
  const base = `https://wa.me/55${STORE_LINKS.WHATSAPP_PHONE}`;
  const defaultMsg = 'Olá! Vim pelo site da iPhone Store Premium e gostaria de informações sobre os modelos disponíveis.';
  const msg = encodeURIComponent(customMessage || defaultMsg);
  return `${base}?text=${msg}`;
}
