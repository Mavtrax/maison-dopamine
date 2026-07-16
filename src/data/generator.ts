import type { Category, Product } from '../types'

/**
 * Générateur déterministe : mêmes produits à chaque chargement (seed fixe),
 * noms uniques par catégorie (combinaisons mélangées, jamais tirées deux fois).
 */

const SEED = 20260712

function mulberry32(seed: number): () => number {
  let state = seed
  return () => {
    state |= 0
    state = (state + 0x6d2b79f5) | 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function shuffled<T>(source: readonly T[], rand: () => number): T[] {
  const copy = [...source]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function pick<T>(source: readonly T[], rand: () => number): T {
  return source[Math.floor(rand() * source.length)]
}

interface HouseDef {
  name: string
  monogram: string
}

const HOUSES: Record<Category, HouseDef[]> = {
  montres: [
    { name: 'Chronomé & Fils', monogram: 'CF' },
    { name: 'Maison Aurelle', monogram: 'MA' },
    { name: 'Manufacture du Gave', monogram: 'MG' },
  ],
  maroquinerie: [
    { name: 'Vachette Paris', monogram: 'VP' },
    { name: 'Delmas Rive Gauche', monogram: 'DR' },
    { name: 'Sellerie du Faubourg', monogram: 'SF' },
  ],
  joaillerie: [
    { name: 'Or & Argent Doux', monogram: 'OA' },
    { name: 'Comtesse & Broussard', monogram: 'CB' },
  ],
  sneakers: [
    { name: 'Atelier Blanche Côte', monogram: 'BC' },
    { name: 'Delmas Rive Gauche', monogram: 'DR' },
  ],
  parfums: [
    { name: 'Essence Rare', monogram: 'ER' },
    { name: 'Maison des Cimes', monogram: 'MC' },
  ],
  voitures: [
    { name: 'Écurie du Gave', monogram: 'EG' },
    { name: 'Grandjean Automobiles', monogram: 'GA' },
    { name: 'Carrosserie Vermeil', monogram: 'CV' },
  ],
  bateaux: [
    { name: "Chantiers de l'Estuaire", monogram: 'CE' },
    { name: 'Voiles & Merveilles', monogram: 'VM' },
    { name: 'Arsenal du Ponant', monogram: 'AP' },
  ],
  lunettes: [
    { name: 'Lunetier Davoust', monogram: 'LD' },
    { name: 'Atelier Blanche Côte', monogram: 'BC' },
  ],
  accessoires: [
    { name: 'Gantier Mercier', monogram: 'GM' },
    { name: 'Vachette Paris', monogram: 'VP' },
    { name: 'Sellerie du Faubourg', monogram: 'SF' },
  ],
  maison: [
    { name: 'Maison des Cimes', monogram: 'MC' },
    { name: "Verrerie de l'Aube", monogram: 'VA' },
  ],
}

const BASES: Record<Category, string[]> = {
  montres: [
    'Chronographe',
    'Automatique',
    'Régulateur',
    'Squelette',
    'Petite Seconde',
    'Heures du Monde',
    'Calendrier Perpétuel',
    'Réserve de Marche',
  ],
  maroquinerie: [
    'Sac',
    'Cabas',
    'Pochette',
    'Portefeuille',
    'Vanity',
    'Porte-documents',
    'Sacoche',
    'Bandoulière',
  ],
  joaillerie: [
    'Bague',
    'Collier',
    'Bracelet',
    'Broche',
    "Boucles d'oreilles",
    'Sautoir',
    'Diadème',
  ],
  sneakers: ['Comète', 'Météore', 'Zéphyr', 'Boréale', 'Céleste'],
  parfums: ['Extrait', 'Eau de parfum', 'Essence', 'Eau de minuit'],
  voitures: [
    'Coupé',
    'Berline',
    'Roadster',
    'GT',
    'Cabriolet',
    'Break de chasse',
    'Supercar',
    'Limousine',
  ],
  bateaux: [
    'Yacht',
    'Voilier',
    'Runabout',
    'Vedette',
    'Catamaran',
    'Goélette',
    'Canot automobile',
  ],
  lunettes: ['Solaires', 'Monture optique', 'Panto', 'Papillon', 'Aviateur'],
  accessoires: [
    'Gants',
    'Écharpe',
    'Ceinture',
    'Foulard',
    'Parapluie',
    'Portefeuille de voyage',
    'Étui à lunettes',
  ],
  maison: [
    'Vase',
    'Carafe',
    'Bougie',
    'Plaid',
    "Jeu d'échecs",
    'Théière',
    'Presse-papiers',
    'Photophore',
  ],
}

const EPITHETS: Record<Category, string[]> = {
  montres: [
    '« Aube »',
    '« Solstice »',
    '« Comète »',
    '« Altitude »',
    '« Méridien »',
    "« Éclipse d'Été »",
    '« Grand Ciel »',
    '« Minuit Pile »',
    '« Apnée »',
    '« Longitude Zéro »',
  ],
  maroquinerie: [
    '« Grand Matin »',
    '« Rive Droite »',
    '« Week-end Éternel »',
    '« Insouciance »',
    '« Bagatelle »',
    '« Escapade »',
    '« Beau Geste »',
    '« Nonchalance »',
    '« Correspondance »',
    '« Entracte »',
  ],
  joaillerie: [
    "« Averse d'Or »",
    '« Première Neige »',
    '« Lueur »',
    '« Vertige »',
    '« Murmure »',
    '« Apogée »',
    '« Rosée »',
    '« Frisson »',
    '« Clair-Obscur »',
  ],
  sneakers: [
    '« Craie »',
    '« Orage »',
    '« Sable Chaud »',
    '« Nuit Claire »',
    '« Menthe Glaciale »',
    '« Terre Battue »',
    '« Brouillard »',
    '« Grenadine »',
    '« Petit Matin »',
    '« Béton Ciré »',
  ],
  parfums: [
    "« Pluie d'Août »",
    '« Cuir Silencieux »',
    '« Néroli Sauvage »',
    '« Bois de Minuit »',
    '« Vétiver Impérial »',
    '« Figuier Jaloux »',
    '« Ambre Distrait »',
    '« Tubéreuse Fantôme »',
    '« Santal Diplomate »',
    '« Iris Millionnaire »',
  ],
  voitures: [
    '« Grand Prix »',
    "« Col d'Aubisque »",
    '« Ligne Droite »',
    '« Sortie de Virage »',
    '« Kilomètre Zéro »',
    '« Nationale 7 »',
    '« Transatlantique »',
    '« Belle Allure »',
    '« Dernier Péage »',
    '« Essence Rare »',
  ],
  bateaux: [
    '« Marée Haute »',
    '« Cap au Sud »',
    '« Grand Large »',
    "« Sillage d'Or »",
    '« Escale »',
    '« Alizé »',
    '« Mouillage Privé »',
    '« Ligne de Flottaison »',
    '« Bout du Quai »',
    '« Vent Portant »',
  ],
  lunettes: [
    '« Riviera »',
    '« Panthéon »',
    '« Belle Étoile »',
    '« Corniche »',
    '« Incognito »',
    '« Palace »',
    '« Croisette »',
    '« Éditorialiste »',
  ],
  accessoires: [
    '« Baiser Volé »',
    '« Diplomate »',
    '« Flânerie »',
    '« Grand Nord »',
    '« Réception »',
    '« Aparté »',
    '« Villégiature »',
    '« Manières »',
  ],
  maison: [
    '« Hiver Confortable »',
    '« Salon Bleu »',
    '« Dimanche Long »',
    '« Bibliothèque »',
    '« Feu Doux »',
    '« Belle Hauteur »',
    '« Silence de Verre »',
    '« Après-midi »',
  ],
}

const OPENINGS: Record<Category, string[]> = {
  montres: [
    "Calibre manufacture réglé sur le rythme d'une vie enfin apaisée.",
    'Chaque composant a été poli plus longtemps que nécessaire, par principe.',
    "Le cadran capture la lumière exacte des matins où l'on n'a rien à faire.",
    'Assemblée dans un silence que seul le tic-tac ose interrompre.',
    "Une complication de plus, et elle aurait exigé son propre majordome.",
    'Le remontage est manuel, comme les plus belles décisions.',
  ],
  maroquinerie: [
    'Cuir sellier cousu main au point de trois millimètres, patience comprise.',
    "La patine se bonifie au contact d'une conscience tranquille.",
    "Assez de compartiments pour ranger tout ce que vous n'achèterez plus ailleurs.",
    "Le fermoir produit un clic accordé en studio, quelque part entre si et do.",
    "Doublure en chèvre velours, parce que l'intérieur compte autant que le reste.",
    'Chaque pièce demande quarante heures et une certaine idée de la vie.',
  ],
  joaillerie: [
    'Sertissage invisible, effet parfaitement visible.',
    "Les pierres ont été choisies une à une, puis félicitées individuellement.",
    "L'or est travaillé à la main selon un secret que personne ne demande à percer.",
    'Un éclat calibré pour les dîners où tout le monde fait semblant.',
    'Portée seule, elle suffit. Comme les grandes certitudes.',
    "Chaque facette renvoie la lumière — et un peu de votre sang-froid retrouvé.",
  ],
  sneakers: [
    "Série limitée cousue main dans un atelier qui refuse le mot « drop ».",
    'La semelle absorbe les chocs, les regards et les compliments.',
    "Un colorway pensé pour être vu, jamais revendu : ici, tout le monde a sa paire.",
    "Cuir souple, laçage précis, allure de quelqu'un qui n'attend rien.",
    "Conçue pour marcher nulle part avec une élégance certaine.",
    'La tige est montée à la main, le mythe aussi.',
  ],
  parfums: [
    "Un sillage qui tient quatorze heures et toute une réputation.",
    'La note de fond, très rare, évoque la satisfaction de ne rien avoir dépensé.',
    "Flacon soufflé bouche par un artisan qui ne souffle qu'ici.",
    "Un accord construit comme un alibi : simple, élégant, incontestable.",
    'À porter les soirs où vous ne devez rien à personne.',
    "L'essence repose deux ans en cave avant d'avoir le droit de sortir.",
  ],
  voitures: [
    "Douze cylindres réglés comme un orchestre de chambre, mais en plus ponctuel.",
    "Le cuir des sièges provient de vaches qui n'ont jamais connu le stress.",
    'De zéro à cent avant que vous ayez eu le temps de le regretter.',
    'La carrosserie est polie à la main jusqu\'à refléter votre meilleure version.',
    'Conçue pour les routes de la côte, tolérée sur les ronds-points.',
    "Le moteur ronronne si juste que nos ingénieurs l'ont fait accorder au diapason.",
  ],
  bateaux: [
    'La coque est vernie douze fois, puis une treizième pour la beauté du geste.',
    'Taillé pour le grand large, amarré surtout devant les terrasses.',
    "Les voiles sont cousues par des mains qui n'ont jamais connu la houle.",
    'Un sillage si net que les mouettes le suivent par respect.',
    "L'acajou du pont provient de forêts qui donnent sur la mer.",
    "Conçu pour l'horizon, homologué pour le port.",
  ],
  lunettes: [
    "Acétate poli main, charnières d'horloger, aplomb immédiat.",
    "Les verres teintent le monde d'une nuance nettement plus favorable.",
    'Une monture qui dit « non merci » avec beaucoup de politesse.',
    "Dessinée pour regarder les vitrines sans plus jamais y entrer.",
    'Sept étapes de polissage, dont deux purement cérémonielles.',
    "L'équilibre parfait entre discrétion et envie d'être vu.",
  ],
  accessoires: [
    'Le détail qui laisse entendre que tout le reste est à la hauteur.',
    "Cousu main dans un atelier où l'on parle bas et où l'on coud droit.",
    "L'accessoire ne fait pas tout, mais il le fait savoir.",
    'Une pièce pensée pour durer plus longtemps que vos anciennes habitudes.',
    "La matière vient d'un fournisseur si exclusif qu'il ne fournit presque personne.",
    'À porter négligemment, après des années d’entraînement.',
  ],
  maison: [
    "Un objet qui tient le salon entier à un certain niveau d'exigence.",
    "Façonné à la main, lentement, pendant que d'autres produisaient en série.",
    "La pièce que vos invités remarquent en premier et commentent en dernier.",
    'Pensé pour les intérieurs où même la poussière prend rendez-vous.',
    "Un poids, une matière, une présence. Le reste est décoration.",
    'Chaque exemplaire est unique, comme les soirées où il sert.',
  ],
}

const FLOURISHES: string[] = [
  "Livraison offerte vers toutes les adresses inexistantes.",
  "Stock illimité, comme tout ce qui est imaginaire.",
  'Aucune liste d’attente : le néant est immédiatement disponible.',
  "Prix indicatif — de toute façon, vous ne paierez pas.",
  "Certificat d'authenticité fictif fourni, signé et tamponné.",
  "Peut être combiné avec tous vos autres achats imaginaires.",
  'Garantie à vie, la vôtre comme la sienne.',
  "Chaque commande finance zéro atelier, mais beaucoup de sérénité.",
  "Exemplaire réservé aux clients qui savent qu'ils ne le recevront pas.",
  "Retours acceptés, bien qu'aucun envoi ne soit prévu.",
  'Édition dont on parlera longtemps, faute de la voir.',
  "Convient parfaitement aux pulsions d'achat de 23 h 47.",
]

const DETAILS: Record<Category, string[]> = {
  montres: [
    'Or rose 18 carats · cadran aventurine',
    'Acier brossé · bracelet alligator',
    'Platine 950 · réserve de marche 8 jours',
    'Titane grade 5 · cadran émail grand feu',
    'Or jaune · verre saphir bombé',
  ],
  maroquinerie: [
    'Taurillon grainé · ferrures plaquées or',
    'Box-calf noir · doublure agneau',
    'Veau lisse ivoire · monogramme à chaud',
    'Cuir grené cognac · coutures sellier',
    'Toile enduite · lozine · laiton massif',
  ],
  joaillerie: [
    'Diamants taille brillant · or blanc',
    'Or jaune 22 carats · pièce numérotée',
    'Saphirs du soir · monture platine',
    'Perles de culture · fermoir invisible',
    'Émeraudes choisies · sertissage neige',
  ],
  sneakers: [
    'Veau ivoire · semelle gomme naturelle',
    'Nubuck · lacets tissés main',
    'Cuir pleine fleur · série numérotée',
    'Daim brossé · semelle cousue',
    'Toile et cuir · œillets laiton',
  ],
  parfums: [
    'Extrait 30 % · flacon soufflé bouche · 100 ml',
    'Eau de parfum · 75 ml · coffret laqué',
    'Essence pure · 50 ml · bouchon pierre',
    'Concentration confidentielle · 100 ml',
  ],
  voitures: [
    'V12 atmosphérique · cuir cognac · 620 ch',
    'Boîte manuelle · toit panoramique · série limitée',
    'Carbone forgé · échappement titane',
    'Intérieur bois de rose · compteurs émaillés',
    'Châssis aluminium · édition circuit · 2 places',
  ],
  bateaux: [
    'Coque acajou · accastillage bronze',
    'Pont en teck · voiles coton égyptien',
    'Double motorisation · cave de bord',
    'Gréement aurique · pavillon brodé',
    'Carbone marin · cabines cuir sellier',
  ],
  lunettes: [
    'Acétate italien · verres minéraux',
    'Corne blonde · charnières or',
    'Titane brossé · verres dégradés',
    'Écaille véritable façon · pochette cuir',
  ],
  accessoires: [
    'Agneau glacé · doublure soie',
    'Cachemire double fil · roulotté main',
    'Cuir de veau · boucle laiton poli',
    'Soie imprimée à Lyon · ourlets main',
  ],
  maison: [
    'Cristal soufflé · pièce signée',
    'Cire végétale · mèche silencieuse',
    'Cachemire des Cimes · tissé serré',
    'Porcelaine fine · filet or posé main',
    'Noyer massif · finition huilée',
  ],
}

const EDITIONS: string[] = [
  '· édition numérotée',
  "· pièce d'atelier",
  '· série de 12',
  '· exclusivité maison',
  '· réédition 1968',
  '· pièce unique (ou presque)',
]

const PRICE_RANGES: Record<Category, [number, number]> = {
  montres: [9500, 180000],
  maroquinerie: [1800, 75000],
  joaillerie: [4500, 220000],
  sneakers: [900, 6500],
  parfums: [420, 2900],
  voitures: [85000, 2400000],
  bateaux: [120000, 8500000],
  lunettes: [650, 4800],
  accessoires: [380, 5200],
  maison: [520, 18000],
}

const GRADIENTS: [string, string][] = [
  ['#2b1f14', '#6b4e2a'],
  ['#171a24', '#3d4763'],
  ['#1c1c1a', '#4a463c'],
  ['#241207', '#7a4a1f'],
  ['#2a2118', '#8f7a58'],
  ['#16100d', '#5c3a33'],
  ['#1a1d22', '#5a6472'],
  ['#20242b', '#7d8494'],
  ['#2b2008', '#96741e'],
  ['#23201b', '#a49a85'],
  ['#191c20', '#4e5860'],
  ['#1e130b', '#6b4326'],
  ['#241a08', '#8c6a1d'],
  ['#1d1e1c', '#767d70'],
  ['#20161c', '#5f4152'],
  ['#101b18', '#3f5c50'],
]

const COUNTS: Record<Category, number> = {
  montres: 30,
  maroquinerie: 30,
  joaillerie: 25,
  sneakers: 25,
  parfums: 20,
  voitures: 20,
  bateaux: 20,
  lunettes: 20,
  accessoires: 25,
  maison: 20,
}

function roundPrice(value: number): number {
  if (value >= 10000) return Math.round(value / 500) * 500
  if (value >= 1000) return Math.round(value / 50) * 50
  return Math.round(value / 10) * 10
}

export function generateProducts(): Product[] {
  const rand = mulberry32(SEED)
  const products: Product[] = []

  for (const category of Object.keys(COUNTS) as Category[]) {
    const combos: string[] = []
    for (const base of BASES[category]) {
      for (const epithet of EPITHETS[category]) {
        combos.push(`${base} ${epithet}`)
      }
    }
    const names = shuffled(combos, rand).slice(0, COUNTS[category])
    const [min, max] = PRICE_RANGES[category]

    names.forEach((name, index) => {
      const house = pick(HOUSES[category], rand)
      products.push({
        id: `g-${category}-${index}`,
        name,
        house: house.name,
        category,
        price: roundPrice(min + rand() * (max - min)),
        description: `${pick(OPENINGS[category], rand)} ${pick(FLOURISHES, rand)}`,
        detail: `${pick(DETAILS[category], rand)} ${pick(EDITIONS, rand)}`,
        monogram: house.monogram,
        gradient: pick(GRADIENTS, rand),
        // Pool de photos libres : une image par produit, index aligné sur COUNTS
        image: `/images/${category}-${String(index).padStart(2, '0')}.webp`,
      })
    })
  }

  return products
}
