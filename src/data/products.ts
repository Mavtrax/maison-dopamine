import type { Product } from '../types'
import { generateProducts } from './generator'

const CURATED_PRODUCTS: Product[] = [
  {
    id: 'perpetuelle-eclipse',
    name: 'Perpétuelle « Éclipse »',
    house: 'Chronomé & Fils',
    category: 'montres',
    price: 84000,
    description:
      "Calibre manufacture à remontage émotionnel. Chaque complication a été polie à la main pendant onze mois par un maître horloger qui ne répond plus à ses e-mails.",
    detail: 'Or rose 18 carats · cadran aventurine · 47 pièces au monde',
    monogram: 'CF',
    gradient: ['#2b1f14', '#6b4e2a'],
  },
  {
    id: 'tourbillon-minuit',
    name: 'Tourbillon Minuit n°7',
    house: 'Maison Aurelle',
    category: 'montres',
    price: 148000,
    description:
      "Le tourbillon visible côté cadran tourne exactement à la vitesse de vos pensées à 3 h du matin. Livrée avec son écrin en noyer et un silence admiratif.",
    detail: 'Platine 950 · réserve de marche 8 jours · pièce unique',
    monogram: 'MA',
    gradient: ['#171a24', '#3d4763'],
  },
  {
    id: 'chrono-heritier',
    name: "Chronographe L'Héritier",
    house: 'Chronomé & Fils',
    category: 'montres',
    price: 32500,
    description:
      "Dessiné pour ceux qui n'ont jamais couru après rien. Le chronographe mesure le temps que vous ne perdez plus à hésiter.",
    detail: 'Acier brossé · bracelet alligator cognac · édition 1962',
    monogram: 'CF',
    gradient: ['#1c1c1a', '#4a463c'],
  },
  {
    id: 'sac-grand-soir',
    name: 'Sac « Grand Soir » 28',
    house: 'Vachette Paris',
    category: 'maroquinerie',
    price: 21400,
    description:
      "Cuir de taurillon nourri au beurre demi-sel, sellier main au point de 3 mm. Liste d'attente officielle : quatre ans. Ici : zéro seconde.",
    detail: 'Taurillon grainé · doublure chèvre · ferrures plaquées or',
    monogram: 'VP',
    gradient: ['#241207', '#7a4a1f'],
  },
  {
    id: 'cabas-riviera',
    name: 'Cabas Riviera GM',
    house: 'Delmas Rive Gauche',
    category: 'maroquinerie',
    price: 8900,
    description:
      "Assez grand pour contenir tout ce que vous auriez acheté ailleurs. Le cuir développe une patine unique au contact de votre sérénité retrouvée.",
    detail: 'Veau lisse ivoire · fait main à Paris · monogramme à chaud',
    monogram: 'DR',
    gradient: ['#2a2118', '#8f7a58'],
  },
  {
    id: 'pochette-insomnie',
    name: 'Pochette « Insomnie »',
    house: 'Vachette Paris',
    category: 'maroquinerie',
    price: 4750,
    description:
      "Format exact d'un téléphone qu'on a enfin décidé de poser. Fermoir en laiton massif dont le clic a été accordé en studio.",
    detail: 'Box-calf noir · intérieur agneau bordeaux',
    monogram: 'VP',
    gradient: ['#16100d', '#5c3a33'],
  },
  {
    id: 'riviere-constellation',
    name: 'Rivière « Constellation »',
    house: 'Or & Argent Doux',
    category: 'joaillerie',
    price: 96000,
    description:
      "Trente-deux diamants taille brillant alignés comme vos priorités après une bonne nuit de sommeil. Sertissage invisible, effet très visible.",
    detail: 'Diamants 12,4 cts · or blanc · certificat de rêve inclus',
    monogram: 'OA',
    gradient: ['#1a1d22', '#5a6472'],
  },
  {
    id: 'solitaire-aube',
    name: "Solitaire L'Aube",
    house: 'Or & Argent Doux',
    category: 'joaillerie',
    price: 54000,
    description:
      "Un diamant de 3,2 carats taillé pour capturer la lumière exacte de 6 h 42 en été. Se porte seul, comme les grandes décisions.",
    detail: 'Diamant 3,2 cts D-IF · monture platine',
    monogram: 'OA',
    gradient: ['#20242b', '#7d8494'],
  },
  {
    id: 'manchette-empire',
    name: 'Manchette Empire',
    house: 'Maison Aurelle',
    category: 'joaillerie',
    price: 27800,
    description:
      "Or jaune martelé à la main selon une technique gardée secrète, principalement parce que personne n'a pensé à la demander.",
    detail: 'Or jaune 22 carats · 118 grammes · pièce numérotée',
    monogram: 'MA',
    gradient: ['#2b2008', '#96741e'],
  },
  {
    id: 'sneakers-comete',
    name: 'Comète 001 « Ivoire »',
    house: 'Atelier Blanche Côte',
    category: 'sneakers',
    price: 2400,
    description:
      "Drop limité à 88 paires, cousues main dans un atelier qui refuse le mot « drop ». La semelle absorbe les chocs et les regards.",
    detail: 'Veau ivoire · semelle gomme naturelle · n° 001–088',
    monogram: 'BC',
    gradient: ['#23201b', '#a49a85'],
  },
  {
    id: 'sneakers-orage',
    name: 'Comète 002 « Orage »',
    house: 'Atelier Blanche Côte',
    category: 'sneakers',
    price: 3100,
    description:
      "Colorway inspiré du ciel d'Oloron un soir de juin. Jamais restockée, jamais revendue : ici, tout le monde a sa paire.",
    detail: 'Nubuck gris orage · lacets tissés main · exclusivité maison',
    monogram: 'BC',
    gradient: ['#191c20', '#4e5860'],
  },
  {
    id: 'derby-signature',
    name: 'Derby Signature',
    house: 'Delmas Rive Gauche',
    category: 'sneakers',
    price: 5600,
    description:
      "Patine réalisée à la main en sept couches, comme un tableau qu'on porterait aux pieds. Craque légèrement, mais seulement de plaisir.",
    detail: 'Box-calf patiné moka · cousu Goodyear · forme 1947',
    monogram: 'DR',
    gradient: ['#1e130b', '#6b4326'],
  },
  {
    id: 'parfum-heure-doree',
    name: "L'Heure Dorée, extrait",
    house: 'Essence Rare',
    category: 'parfums',
    price: 1850,
    description:
      "Iris de Florence, santal, et une note de fond très rare : la satisfaction de n'avoir rien dépensé. Tenue : 14 heures et toute une réputation.",
    detail: 'Extrait 30 % · flacon soufflé bouche · 100 ml',
    monogram: 'ER',
    gradient: ['#241a08', '#8c6a1d'],
  },
  {
    id: 'parfum-minuit-blanc',
    name: 'Minuit Blanc',
    house: 'Essence Rare',
    category: 'parfums',
    price: 980,
    description:
      "Tubéreuse glacée et cuir blanc. Le parfum que l'on porte quand on n'a rien à prouver, c'est-à-dire après avoir utilisé ce site.",
    detail: 'Eau de parfum · 75 ml · coffret laqué',
    monogram: 'ER',
    gradient: ['#1d1e1c', '#767d70'],
  },
  {
    id: 'malle-cabine',
    name: 'Malle Cabine 1908',
    house: 'Vachette Paris',
    category: 'maroquinerie',
    price: 68000,
    description:
      "Réédition de la malle qui a fait trois tours du monde sans jamais payer d'excédent bagage. Coins laiton, serrures numérotées, légende comprise.",
    detail: 'Toile enduite · lozine · 2 serrures · monogramme sur demande',
    monogram: 'VP',
    gradient: ['#231409', '#7d5426'],
  },
]

export const PRODUCTS: Product[] = [...CURATED_PRODUCTS, ...generateProducts()]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id)
}
