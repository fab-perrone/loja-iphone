export interface ProductColor {
  name: string;
  hex: string;
  textColorClass?: string;
  deviceGradient: string;
  ringHex: string;
}

export interface StorageOption {
  size: string;
  pricePix: number;
  priceMl: number;
  installments: string;
}

export interface ProductSpecs {
  chip: string;
  screen: string;
  camera: string;
  battery: string;
  material: string;
  connection: string;
}

export interface Product {
  id: string;
  name: string;
  series: '16-pro' | '16' | '15-pro' | '15' | '14-13';
  tagline: string;
  condition: 'Novo Lacrado' | 'Seminovo Impecável Grade A+';
  badge?: string;
  isFlagship?: boolean;
  colors: ProductColor[];
  storageOptions: StorageOption[];
  specs: ProductSpecs;
  inStock: boolean;
  mercadoLivreTitle: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    series: '16-pro',
    tagline: 'O ápice da tecnologia Apple com tela de 6,9" e titânio de grau aeroespacial.',
    condition: 'Novo Lacrado',
    badge: 'Mais Vendido',
    isFlagship: true,
    colors: [
      {
        name: 'Titânio Deserto',
        hex: '#C5A88B',
        deviceGradient: 'from-[#d9be9f] via-[#c4a98c] to-[#9c8269]',
        ringHex: '#C5A88B',
      },
      {
        name: 'Titânio Natural',
        hex: '#9E988F',
        deviceGradient: 'from-[#b8b2a7] via-[#9e988f] to-[#787269]',
        ringHex: '#9E988F',
      },
      {
        name: 'Titânio Preto',
        hex: '#303033',
        deviceGradient: 'from-[#424245] via-[#2d2d30] to-[#1a1a1d]',
        ringHex: '#303033',
      },
      {
        name: 'Titânio Branco',
        hex: '#E3E4E5',
        deviceGradient: 'from-[#f5f5f7] via-[#e5e5e7] to-[#c7c8cb]',
        ringHex: '#E3E4E5',
      },
    ],
    storageOptions: [
      {
        size: '256 GB',
        pricePix: 8799,
        priceMl: 9299,
        installments: '12x de R$ 774,92 sem juros',
      },
      {
        size: '512 GB',
        pricePix: 9899,
        priceMl: 10499,
        installments: '12x de R$ 874,92 sem juros',
      },
      {
        size: '1 TB',
        pricePix: 11499,
        priceMl: 12199,
        installments: '12x de R$ 1.016,58 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A18 Pro com GPU de 6 núcleos',
      screen: 'Super Retina XDR OLED 6,9" ProMotion 120Hz',
      camera: 'Sistema Pro 48MP Fuso + 48MP Ultra-Angular + 12MP Teleobjetiva 5x',
      battery: 'Até 33 horas de reprodução de vídeo',
      material: 'Titânio Grau 5 com acabamento jateado',
      connection: 'USB-C com suporte a USB 3 (até 10 Gb/s)',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 16 Pro Max 256GB Titânio Lacrado Garantia 1 Ano',
    features: [
      'Novo Botão Controle de Câmera instantâneo',
      'Gravação em 4K Dolby Vision a 120 qps',
      'Ceramic Shield de última geração 2x mais resistente',
      'Garantia oficial Apple de 1 ano válida no Brasil',
    ],
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    series: '16-pro',
    tagline: 'Desempenho profissional incomparável em um formato compacto de 6,3".',
    condition: 'Novo Lacrado',
    badge: 'Destaque',
    colors: [
      {
        name: 'Titânio Natural',
        hex: '#9E988F',
        deviceGradient: 'from-[#b8b2a7] via-[#9e988f] to-[#787269]',
        ringHex: '#9E988F',
      },
      {
        name: 'Titânio Deserto',
        hex: '#C5A88B',
        deviceGradient: 'from-[#d9be9f] via-[#c4a98c] to-[#9c8269]',
        ringHex: '#C5A88B',
      },
      {
        name: 'Titânio Preto',
        hex: '#303033',
        deviceGradient: 'from-[#424245] via-[#2d2d30] to-[#1a1a1d]',
        ringHex: '#303033',
      },
      {
        name: 'Titânio Branco',
        hex: '#E3E4E5',
        deviceGradient: 'from-[#f5f5f7] via-[#e5e5e7] to-[#c7c8cb]',
        ringHex: '#E3E4E5',
      },
    ],
    storageOptions: [
      {
        size: '128 GB',
        pricePix: 7499,
        priceMl: 7899,
        installments: '12x de R$ 658,25 sem juros',
      },
      {
        size: '256 GB',
        pricePix: 8199,
        priceMl: 8649,
        installments: '12x de R$ 720,75 sem juros',
      },
      {
        size: '512 GB',
        pricePix: 9299,
        priceMl: 9799,
        installments: '12x de R$ 816,58 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A18 Pro com Neural Engine de 16 núcleos',
      screen: 'Super Retina XDR OLED 6,3" ProMotion 120Hz',
      camera: 'Sistema Pro 48MP Principal + 48MP Ultra-Angular + 12MP Tele 5x',
      battery: 'Até 27 horas de reprodução de vídeo',
      material: 'Titânio com molduras mais finas do mundo',
      connection: 'USB-C com USB 3 de alta velocidade',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 16 Pro 128GB Lacrado Original com NF',
    features: [
      'Câmera Teleobjetiva de 5x presente também no Pro de 6,3"',
      'Controle de Câmera tátil integrado ao chassi',
      'Microfones com qualidade de estúdio profissional',
      'Apple Intelligence integrado',
    ],
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    series: '16',
    tagline: 'Cores vibrantes, chip A18 ultra veloz e novo Controle de Câmera.',
    condition: 'Novo Lacrado',
    badge: 'Lançamento',
    colors: [
      {
        name: 'Ultramarino',
        hex: '#38558F',
        deviceGradient: 'from-[#4d72b8] via-[#38558f] to-[#253961]',
        ringHex: '#38558F',
      },
      {
        name: 'Verde-Acizentado',
        hex: '#8DAAA2',
        deviceGradient: 'from-[#a7c5be] via-[#8daaa2] to-[#67827b]',
        ringHex: '#8DAAA2',
      },
      {
        name: 'Rosa',
        hex: '#E39BB6',
        deviceGradient: 'from-[#f2b3cc] via-[#e39bb6] to-[#b8708c]',
        ringHex: '#E39BB6',
      },
      {
        name: 'Branco',
        hex: '#F3F4F6',
        deviceGradient: 'from-[#ffffff] via-[#f3f4f6] to-[#d1d5db]',
        ringHex: '#F3F4F6',
      },
      {
        name: 'Preto',
        hex: '#212124',
        deviceGradient: 'from-[#3a3a3d] via-[#212124] to-[#121214]',
        ringHex: '#212124',
      },
    ],
    storageOptions: [
      {
        size: '128 GB',
        pricePix: 5999,
        priceMl: 6399,
        installments: '12x de R$ 533,25 sem juros',
      },
      {
        size: '256 GB',
        pricePix: 6699,
        priceMl: 7099,
        installments: '12x de R$ 591,58 sem juros',
      },
      {
        size: '512 GB',
        pricePix: 7899,
        priceMl: 8399,
        installments: '12x de R$ 699,92 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A18 de segunda geração (3nm)',
      screen: 'Super Retina XDR OLED 6,1" com Dynamic Island',
      camera: 'Sistema avançado Fusion de 48MP + Ultra-Angular 12MP com Macro',
      battery: 'Até 22 horas de reprodução de vídeo',
      material: 'Alumínio de qualidade aeroespacial com vidro colorido por infusão',
      connection: 'USB-C universal',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 16 128GB Novo Lacrado Envio Full Mercado Livre',
    features: [
      'Novo Botão de Ação configurável',
      'Controle de Câmera sensível ao toque',
      'Fotos espaciais e vídeos espaciais para Apple Vision',
      'Até 2x mais rápido em jogos pesados com Ray Tracing',
    ],
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus',
    series: '16',
    tagline: 'Tela ampla de 6,7" e a bateria de maior duração da linha.',
    condition: 'Novo Lacrado',
    colors: [
      {
        name: 'Ultramarino',
        hex: '#38558F',
        deviceGradient: 'from-[#4d72b8] via-[#38558f] to-[#253961]',
        ringHex: '#38558F',
      },
      {
        name: 'Verde-Acizentado',
        hex: '#8DAAA2',
        deviceGradient: 'from-[#a7c5be] via-[#8daaa2] to-[#67827b]',
        ringHex: '#8DAAA2',
      },
      {
        name: 'Rosa',
        hex: '#E39BB6',
        deviceGradient: 'from-[#f2b3cc] via-[#e39bb6] to-[#b8708c]',
        ringHex: '#E39BB6',
      },
      {
        name: 'Preto',
        hex: '#212124',
        deviceGradient: 'from-[#3a3a3d] via-[#212124] to-[#121214]',
        ringHex: '#212124',
      },
    ],
    storageOptions: [
      {
        size: '128 GB',
        pricePix: 6699,
        priceMl: 7099,
        installments: '12x de R$ 591,58 sem juros',
      },
      {
        size: '256 GB',
        pricePix: 7399,
        priceMl: 7799,
        installments: '12x de R$ 649,92 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A18 Bionic',
      screen: 'Super Retina XDR OLED 6,7" com Dynamic Island',
      camera: 'Sistema Fusion de 48MP + Ultra-Angular 12MP',
      battery: 'Até 27 horas de reprodução de vídeo',
      material: 'Alumínio de alta resistência e vidro traseiro reforçado',
      connection: 'USB-C',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 16 Plus 128GB Lacrado Garantia Oficial',
    features: [
      'Bateria recordista de autonomia',
      'Tela imersiva de 6,7 polegadas para vídeos e jogos',
      'Botão de Ação personalizável',
      'Fotografia Macro com lente Ultra-Angular',
    ],
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    series: '15-pro',
    tagline: 'O campeão de vendas em titânio e zoom óptico de 5x.',
    condition: 'Novo Lacrado',
    badge: 'Oferta Especial',
    colors: [
      {
        name: 'Titânio Natural',
        hex: '#9E988F',
        deviceGradient: 'from-[#b8b2a7] via-[#9e988f] to-[#787269]',
        ringHex: '#9E988F',
      },
      {
        name: 'Titânio Azul',
        hex: '#2F3C4D',
        deviceGradient: 'from-[#3e4f66] via-[#2f3c4d] to-[#1e2733]',
        ringHex: '#2F3C4D',
      },
      {
        name: 'Titânio Preto',
        hex: '#303033',
        deviceGradient: 'from-[#424245] via-[#2d2d30] to-[#1a1a1d]',
        ringHex: '#303033',
      },
      {
        name: 'Titânio Branco',
        hex: '#E3E4E5',
        deviceGradient: 'from-[#f5f5f7] via-[#e5e5e7] to-[#c7c8cb]',
        ringHex: '#E3E4E5',
      },
    ],
    storageOptions: [
      {
        size: '256 GB',
        pricePix: 6999,
        priceMl: 7499,
        installments: '12x de R$ 624,92 sem juros',
      },
      {
        size: '512 GB',
        pricePix: 7999,
        priceMl: 8499,
        installments: '12x de R$ 708,25 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A17 Pro (3nm) com Ray Tracing acelerado por hardware',
      screen: 'Super Retina XDR OLED 6,7" ProMotion 120Hz Always-On',
      camera: 'Câmera Principal 48MP + Teleobjetiva 5x de 120mm + Ultra-Angular',
      battery: 'Até 29 horas de reprodução de vídeo',
      material: 'Estrutura leve de Titânio',
      connection: 'USB-C com velocidades USB 3',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 15 Pro Max 256GB Titânio Lacrado Mercado Livre',
    features: [
      'Primeiro iPhone construído em Titânio de alta resistência',
      'Estrutura super leve com bordas arredondadas confortáveis',
      'Botão de Ação multifunção com respostas táteis',
      'Gravação em ProRes diretamente em SSD externo',
    ],
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    series: '15',
    tagline: 'Dynamic Island, câmera de 48MP e conector USB-C com o melhor custo-benefício.',
    condition: 'Novo Lacrado',
    badge: 'Custo-Benefício',
    colors: [
      {
        name: 'Preto',
        hex: '#2A2B2D',
        deviceGradient: 'from-[#3e3f42] via-[#2a2b2d] to-[#171719]',
        ringHex: '#2A2B2D',
      },
      {
        name: 'Azul Claro',
        hex: '#D1DEE7',
        deviceGradient: 'from-[#e4edf3] via-[#d1dee7] to-[#adc3d4]',
        ringHex: '#D1DEE7',
      },
      {
        name: 'Verde Pastel',
        hex: '#D7E2D6',
        deviceGradient: 'from-[#e9f0e8] via-[#d7e2d6] to-[#b7c9b5]',
        ringHex: '#D7E2D6',
      },
      {
        name: 'Rosa',
        hex: '#F2D5D8',
        deviceGradient: 'from-[#f9e6e8] via-[#f2d5d8] to-[#deb0b6]',
        ringHex: '#F2D5D8',
      },
    ],
    storageOptions: [
      {
        size: '128 GB',
        pricePix: 4599,
        priceMl: 4899,
        installments: '12x de R$ 408,25 sem juros',
      },
      {
        size: '256 GB',
        pricePix: 5199,
        priceMl: 5549,
        installments: '12x de R$ 462,42 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A16 Bionic comprovadamente potente',
      screen: 'Super Retina XDR OLED 6,1" com Dynamic Island',
      camera: 'Câmera Principal 48MP com teleobjetiva integrada de 2x de 12MP',
      battery: 'Até 20 horas de reprodução de vídeo',
      material: 'Alumínio fosco acetinado com vidro traseiro colorido',
      connection: 'USB-C universal',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 15 128GB Original Anatel Lacrado Pronta Entrega',
    features: [
      'Dynamic Island interativa para alertas e atividades ao vivo',
      'Câmera de 48MP com fotos em altíssima resolução',
      'Conector USB-C para carregar todos os seus dispositivos com um único cabo',
      'Vidro traseiro com toque suave que não retém marcas de dedo',
    ],
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    series: '14-13',
    tagline: 'Desempenho fluido, excelente autonomia de bateria e câmeras brilhantes.',
    condition: 'Novo Lacrado',
    badge: 'Preço Imbatível',
    colors: [
      {
        name: 'Meia-Noite',
        hex: '#1F2024',
        deviceGradient: 'from-[#30333b] via-[#1f2024] to-[#111214]',
        ringHex: '#1F2024',
      },
      {
        name: 'Estelar',
        hex: '#F0EBE3',
        deviceGradient: 'from-[#ffffff] via-[#f0ebe3] to-[#d6d0c5]',
        ringHex: '#F0EBE3',
      },
      {
        name: 'Azul',
        hex: '#9CBAD1',
        deviceGradient: 'from-[#b6cee0] via-[#9cbad1] to-[#769cb8]',
        ringHex: '#9CBAD1',
      },
      {
        name: 'Roxo',
        hex: '#D7D1DF',
        deviceGradient: 'from-[#e7e3ed] via-[#d7d1df] to-[#b6abbf]',
        ringHex: '#D7D1DF',
      },
    ],
    storageOptions: [
      {
        size: '128 GB',
        pricePix: 3699,
        priceMl: 3999,
        installments: '12x de R$ 333,25 sem juros',
      },
      {
        size: '256 GB',
        pricePix: 4299,
        priceMl: 4599,
        installments: '12x de R$ 383,25 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A15 Bionic com GPU de 5 núcleos',
      screen: 'Super Retina XDR OLED 6,1"',
      camera: 'Dupla de 12MP com Modo Cinema 4K e Modo Ação superestável',
      battery: 'Até 20 horas de reprodução de vídeo',
      material: 'Alumínio de qualidade aeroespacial e Ceramic Shield',
      connection: 'Lightning',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 14 128GB Novo Lacrado Garantia Apple 1 Ano',
    features: [
      'Modo Ação para gravações de vídeos em movimento sem trepidação',
      'Detecção de Acidentes que liga para emergência caso necessário',
      'Excelente desempenho para redes sociais, fotos noturnas e games',
      'Garantia Apple de 1 ano válida em qualquer autorizada',
    ],
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    series: '14-13',
    tagline: 'O modelo de entrada perfeito para quem quer a qualidade e durabilidade do iPhone.',
    condition: 'Novo Lacrado',
    colors: [
      {
        name: 'Meia-Noite',
        hex: '#1E2024',
        deviceGradient: 'from-[#2e3138] via-[#1e2024] to-[#101113]',
        ringHex: '#1E2024',
      },
      {
        name: 'Estelar',
        hex: '#EFECE6',
        deviceGradient: 'from-[#ffffff] via-[#efece6] to-[#cfcac0]',
        ringHex: '#EFECE6',
      },
      {
        name: 'Azul',
        hex: '#41637E',
        deviceGradient: 'from-[#547999] via-[#41637e] to-[#2a4357]',
        ringHex: '#41637E',
      },
      {
        name: 'Rosa',
        hex: '#F9D9D6',
        deviceGradient: 'from-[#fdeceb] via-[#f9d9d6] to-[#ddb1ac]',
        ringHex: '#F9D9D6',
      },
    ],
    storageOptions: [
      {
        size: '128 GB',
        pricePix: 3199,
        priceMl: 3499,
        installments: '12x de R$ 291,58 sem juros',
      },
    ],
    specs: {
      chip: 'Apple A15 Bionic ultra veloz',
      screen: 'Super Retina XDR OLED 6,1"',
      camera: 'Sistema de câmera dupla de 12MP na diagonal com estabilização óptica',
      battery: 'Até 19 horas de reprodução de vídeo',
      material: 'Alumínio de alta precisão com vidro Ceramic Shield frontal',
      connection: 'Lightning',
    },
    inStock: true,
    mercadoLivreTitle: 'Apple iPhone 13 128GB Lacrado Original com Nota Fiscal',
    features: [
      'Modo Cinema em 1080p a 30 qps com profundidade de campo cinematográfica',
      'Desempenho veloz com bateria que dura o dia inteiro com folga',
      'Suporte a 5G ultrarrápido para todas as operadoras do Brasil',
      'Totalmente compatível com as versões mais recentes do iOS',
    ],
  },
];
