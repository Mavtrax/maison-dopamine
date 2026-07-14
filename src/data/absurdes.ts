import type { Product } from '../types'

/**
 * La ligne « Atelier Saugrenu » : matières impossibles, sérieux impeccable.
 * Pas de photos (et pour cause) : visuel monogramme doré.
 */

const HOUSE = 'Atelier Saugrenu'
const MONOGRAM = 'AS'

type AbsurdSeed = Omit<Product, 'house' | 'monogram' | 'gradient'> & {
  gradient?: [string, string]
}

const GRADIENTS: [string, string][] = [
  ['#2b1f14', '#6b4e2a'],
  ['#171a24', '#3d4763'],
  ['#241207', '#7a4a1f'],
  ['#1a1d22', '#5a6472'],
  ['#2b2008', '#96741e'],
  ['#16100d', '#5c3a33'],
  ['#101b18', '#3f5c50'],
  ['#20161c', '#5f4152'],
]

const SEEDS: AbsurdSeed[] = [
  // ——— Montres ———
  {
    id: 'a-montre-ronce',
    name: 'Montre en ronce de noyer « L\'Approximative »',
    category: 'montres',
    price: 45000,
    description:
      "Le bois vit, travaille, se dilate : l'heure est donc approximative, mais toujours donnée avec noblesse. Les retards deviennent des choix esthétiques.",
    detail: 'Ronce massive · aiguilles en brindilles · précision : saisonnière',
  },
  {
    id: 'a-cadran-solaire',
    name: 'Cadran solaire de poignet « Hélios »',
    category: 'montres',
    price: 28000,
    description:
      "Une exactitude remarquable par grand beau temps. Par temps couvert, l'heure devient une opinion personnelle que personne n'osera contester.",
    detail: 'Gnomon en or · garantie valable uniquement au sud de la Loire',
  },
  {
    id: 'a-montre-susceptible',
    name: 'Montre à remontage émotionnel « La Susceptible »',
    category: 'montres',
    price: 62000,
    description:
      "S'arrête net quand on la vexe et repart aux compliments. Nos horlogers recommandent de lui parler doucement chaque matin.",
    detail: 'Calibre à affect variable · livret de compliments fourni',
  },
  {
    id: 'a-sablier-poignet',
    name: 'Sablier de poignet « Patience »',
    category: 'montres',
    price: 19500,
    description:
      "Trois minutes de sable fin du Cap-Ferret, à retourner soi-même. Le temps redevient un geste, et les réunions un supplice élégant.",
    detail: 'Verre soufflé · sable calibré · poignet musclé conseillé',
  },
  {
    id: 'a-montre-mie',
    name: 'Montre en mie de pain « La Quotidienne »',
    category: 'montres',
    price: 8900,
    description:
      "Pétrie chaque matin par notre boulanger-horloger. À consommer avant midi, comme les bonnes résolutions.",
    detail: 'Mie de tradition · croûte polie main · DLC : 14 h',
  },
  {
    id: 'a-montre-presente',
    name: 'Montre sans aiguilles « Le Présent »',
    category: 'montres',
    price: 74000,
    description:
      "Aucune aiguille, aucun chiffre, aucun doute : il est toujours maintenant. Le seul garde-temps validé par trois philosophes sur quatre.",
    detail: 'Cadran vide poli miroir · notice de 340 pages',
  },
  {
    id: 'a-coucou-poignet',
    name: 'Coucou de poignet « L\'Alpage »',
    category: 'montres',
    price: 37000,
    description:
      "Un oiseau miniature sort chanter toutes les heures, y compris pendant vos visioconférences. L'autorité naturelle, en somme.",
    detail: 'Oiseau en tilleul · chant tyrolien · mode silencieux : aucun',
  },
  {
    id: 'a-montre-glace',
    name: 'Montre en glace « L\'Éphémère »',
    category: 'montres',
    price: 15500,
    description:
      "Taillée dans un glaçon de source alpine. Elle fond avec distinction, rappelant à votre poignet que tout passe, surtout elle.",
    detail: 'Glace 0 °C · écrin congélateur · port : 20 minutes',
  },
  {
    id: 'a-montre-nostalgique',
    name: 'Montre qui recule « La Nostalgique »',
    category: 'montres',
    price: 41000,
    description:
      "Les aiguilles tournent à l'envers, en direction d'une époque où tout était mieux. Best-seller inexplicable chez les plus de quarante ans.",
    detail: 'Mouvement rétrograde intégral · délivrée avec mouchoir',
  },
  {
    id: 'a-montre-ardoise',
    name: 'Montre en ardoise « La Scolaire »',
    category: 'montres',
    price: 12800,
    description:
      "L'heure s'écrit à la craie et s'efface à la première averse. Un rapport au temps que la météo seule décide.",
    detail: 'Ardoise des Pyrénées · craie dorée fournie · éponge en option',
  },

  // ——— Maroquinerie ———
  {
    id: 'a-sac-peche',
    name: 'Sac en peau de pêche « Le Velouté »',
    category: 'maroquinerie',
    price: 23000,
    description:
      "Un duvet incomparable au toucher, mais une sensibilité extrême : il se froisse si on le complimente trop directement.",
    detail: 'Peau de pêche de vigne · doublure abricot · manipuler avec tact',
  },
  {
    id: 'a-portefeuille-courgette',
    name: 'Portefeuille en cuir de courgette « L\'Économe »',
    category: 'maroquinerie',
    price: 4200,
    description:
      "Tanné au sel de Guérande, entièrement compostable. Le seul portefeuille qui finit au potager quand il est vide, par cohérence.",
    detail: 'Courgette bio pleine fleur · coutures en fane de radis',
  },
  {
    id: 'a-malle-papier',
    name: 'Malle en papier mâché « La Fragile »',
    category: 'maroquinerie',
    price: 56000,
    description:
      "Montée feuille à feuille avec des journaux de 1962, exclusivement des bonnes nouvelles. Voyage par temps sec uniquement.",
    detail: 'Papier mâché · colle de farine · météo exigée : grand beau',
  },
  {
    id: 'a-sac-banane',
    name: 'Sac banane en vraie banane « Le Régime »',
    category: 'maroquinerie',
    price: 3100,
    description:
      "La patine évolue du jaune éclatant au brun moucheté en une semaine : aucune autre maison n'ose un vieillissement aussi rapide.",
    detail: 'Banane équitable · fermoir en queue de fruit · mûrit à cœur',
  },
  {
    id: 'a-cartable-parmesan',
    name: 'Cartable en croûte de parmesan « Le Régent »',
    category: 'maroquinerie',
    price: 18700,
    description:
      "Affiné trente-six mois avant montage. Un parfum d'autorité et d'Italie qui précède son propriétaire dans chaque couloir.",
    detail: 'Croûte AOP · ferrures en gressin · souris strictement interdites',
  },
  {
    id: 'a-pochette-feuilles',
    name: 'Pochette en feuilles mortes « L\'Automnale »',
    category: 'maroquinerie',
    price: 9400,
    description:
      "Assemblée en octobre, feuille à feuille, dans un sous-bois privé. Elle bruisse élégamment à chaque pas — impossible d'arriver incognito.",
    detail: 'Érable et chêne · vernis de brume · édition : un automne',
  },
  {
    id: 'a-valise-miel',
    name: 'Valise en nid d\'abeilles « La Mielleuse »',
    category: 'maroquinerie',
    price: 32000,
    description:
      "Structure hexagonale d'une rigidité parfaite, finition légèrement collante. Vos affaires arrivent sucrées, mais jamais froissées.",
    detail: 'Cire d\'abeilles heureuses · poignée propolis · essaim non inclus',
  },
  {
    id: 'a-sacoche-araignee',
    name: 'Sacoche en toile d\'araignée « L\'Arachnéenne »',
    category: 'maroquinerie',
    price: 87000,
    description:
      "Tissée main par nos artisanes à huit pattes, nourries exclusivement de compliments. Plus résistante que l'acier, plus légère que le doute.",
    detail: 'Soie d\'araignée · 400 000 fils · délai de tissage : 3 ans',
  },
  {
    id: 'a-porte-monnaie-escargot',
    name: 'Porte-monnaie en coquille d\'escargot « Le Lent »',
    category: 'maroquinerie',
    price: 6800,
    description:
      "L'ouverture en spirale impose un certain temps avant chaque paiement — nos clients confirment des économies substantielles.",
    detail: 'Coquille de Bourgogne · charnière bave stabilisée · antivol naturel',
  },
  {
    id: 'a-sac-tortue',
    name: 'Sac en carapace de tortue (imitation) « Le Patient »',
    category: 'maroquinerie',
    price: 27500,
    description:
      "Aucune tortue consultée, dérangée ni même regardée. La lenteur est dans le style, pas dans la fabrication : huit ans tout de même.",
    detail: 'Résine écaille · doublure mousse d\'étang · 100 % sans reptile',
  },

  // ——— Joaillerie ———
  {
    id: 'a-collier-nouilles',
    name: 'Collier de nouilles « Le Maternel »',
    category: 'joaillerie',
    price: 185000,
    description:
      "Réédition fidèle du chef-d'œuvre offert un matin de fête des mères 1987. Macaronis premier choix, ficelle d'origine, émotion incluse.",
    detail: 'Macaroni doré à la feuille · ficelle de rôti · certificat de maman',
  },
  {
    id: 'a-bague-sucre',
    name: 'Bague en sucre candi « La Fondante »',
    category: 'joaillerie',
    price: 21000,
    description:
      "Cristallisée pendant onze mois dans notre cave à douceurs. Ne pas porter sous la pluie, ni près des personnes gourmandes.",
    detail: 'Sucre candi pur · sertissage caramel · taille unique : éphémère',
  },
  {
    id: 'a-diademe-sardine',
    name: 'Diadème en arêtes de sardine « Le Littoral »',
    category: 'joaillerie',
    price: 34000,
    description:
      "Arêtes sélectionnées une à une sur le port, montées en éventail royal. Un éclat nacré et un sillage marin qui ne laisse personne indifférent.",
    detail: 'Arêtes premier choix · vernis iodé · goélands déconseillés',
  },
  {
    id: 'a-boucles-grelons',
    name: 'Boucles d\'oreilles en grêlons « Les Météorologiques »',
    category: 'joaillerie',
    price: 16500,
    description:
      "Récoltés lors de l'orage du 14 juillet 2024, calibrés au millimètre. Livrées en écrin réfrigéré, à porter par -2 °C maximum.",
    detail: 'Grêle calibre 12 mm · monture givre · conservation : congélateur',
  },
  {
    id: 'a-bracelet-elastiques',
    name: 'Bracelet en élastiques de bureau « Le Corporate »',
    category: 'joaillerie',
    price: 12400,
    description:
      "Quarante-sept élastiques sélectionnés à la main dans les meilleures fournitures d'un siège social parisien. Le luxe de l'open space.",
    detail: 'Caoutchouc administratif · fermoir trombone or · série de 47',
  },
  {
    id: 'a-broche-crouton',
    name: 'Broche en croûton doré « La Gratinée »',
    category: 'joaillerie',
    price: 8800,
    description:
      "Un croûton de soupe à l'oignon, doré à la feuille de 24 carats. Le seul bijou qui rappelle à la fois Versailles et la brasserie.",
    detail: 'Pain rassis noble · dorure 24 carats · gruyère en pampille',
  },
  {
    id: 'a-sautoir-olives',
    name: 'Sautoir en noyaux d\'olives « Le Provençal »',
    category: 'joaillerie',
    price: 14200,
    description:
      "Cent quatre noyaux dénoyautés à la main un soir d'été, polis au galet de calanque. Sent légèrement l'apéritif, assumons.",
    detail: 'Noyaux de Nyons · fil de cigale · patine pastis',
  },
  {
    id: 'a-chevaliere-chewing',
    name: 'Chevalière en chewing-gum durci « L\'Insolente »',
    category: 'joaillerie',
    price: 26000,
    description:
      "Mâchée quarante jours par un maître verrier, puis figée dans l'insolence. Chaque exemplaire garde l'empreinte dentaire de l'artiste.",
    detail: 'Gomme menthe glaciale · empreinte certifiée · goût résiduel : oui',
  },
  {
    id: 'a-riviere-strass',
    name: 'Rivière en strass de rond-point « La Municipale »',
    category: 'joaillerie',
    price: 9900,
    description:
      "Strass récupérés sur les décorations de Noël d'un rond-point de sous-préfecture. Brille exactement comme le vrai, de loin, la nuit.",
    detail: 'Strass municipal · monture zinc d\'abribus · éclat : civique',
  },
  {
    id: 'a-perles-rosee',
    name: 'Perles de rosée montées sur fil « L\'Aurorale »',
    category: 'joaillerie',
    price: 148000,
    description:
      "Cueillies une à une avant l'aube sur des toiles d'araignée consentantes. À porter entre 6 h et 7 h, ensuite elles rejoignent le ciel.",
    detail: 'Rosée de mai · fil de brume · durée de vie : un lever de soleil',
  },

  // ——— Sneakers ———
  {
    id: 'a-chaussures-hamster',
    name: 'Chaussures en peau de hamster (synthétique) « Les Douillettes »',
    category: 'sneakers',
    price: 5400,
    description:
      "Aucun hamster consulté, approché, ni même croisé : duvet intégralement synthétique, moelleux authentique. On marche sur un câlin.",
    detail: 'Fausse fourrure roux doré · semelle roue d\'exercice · 0 % rongeur',
  },
  {
    id: 'a-mocassins-camembert',
    name: 'Mocassins en croûte de camembert « Les Normandes »',
    category: 'sneakers',
    price: 7200,
    description:
      "Moulés au lait cru, affinés vingt et un jours en cave. Ils se bonifient avec le temps, votre entourage confirme, hélas.",
    detail: 'Croûte fleurie AOP · semelle cidre compressé · affinage continu',
  },
  {
    id: 'a-baskets-mousse',
    name: 'Baskets en mousse de bain « Les Flottantes »',
    category: 'sneakers',
    price: 3900,
    description:
      "Un amorti que la concurrence qualifie d'irresponsable. Flottent en cas d'inondation, glissent dans tous les autres cas.",
    detail: 'Mousse lavande · bulles intégrées · adhérence : décorative',
  },
  {
    id: 'a-richelieu-bouleau',
    name: 'Richelieu en écorce de bouleau « Les Forestières »',
    category: 'sneakers',
    price: 11800,
    description:
      "Écorce levée à la pleine lune, cousue à la résine de pin. Elles craquent, mais uniquement en forêt, par respect du thème.",
    detail: 'Bouleau de Sologne · lacets de lierre · pointure : arbre moyen',
  },
  {
    id: 'a-sandales-souris',
    name: 'Sandales en tapis de souris « Les Bureautiques »',
    category: 'sneakers',
    price: 2800,
    description:
      "Ergonomiques, antistatiques, avec repose-poignet au talon. La glisse optimisée du lundi matin, enfin appliquée à la marche.",
    detail: 'Néoprène de bureau · surface de glisse calibrée · double-clic au talon',
  },
  {
    id: 'a-bottes-baguette',
    name: 'Bottes en baguette tradition « Les Boulangères »',
    category: 'sneakers',
    price: 6100,
    description:
      "Cuites chaque matin à 6 h, livrées tièdes. Croustillantes jusqu'à midi, tendres l'après-midi, croûtons le soir : une vie bien remplie.",
    detail: 'Farine label rouge · semelle bien cuite · gluten assumé',
  },
  {
    id: 'a-chaussons-barbe',
    name: 'Chaussons en barbe à papa « Les Sucrées »',
    category: 'sneakers',
    price: 4500,
    description:
      "Filés minute dans notre atelier forain. Fondent au premier pas de danse, mais la dignité reste intacte, c'est l'essentiel.",
    detail: 'Sucre rose fête foraine · pointure fondante · usage : un slow',
  },
  {
    id: 'a-sneakers-gomme',
    name: 'Sneakers à semelle de gomme à effacer « Les Discrètes »',
    category: 'sneakers',
    price: 8300,
    description:
      "Chaque pas efface le précédent : idéal pour les timides, les espions et les gens qui regrettent facilement leurs trajets.",
    detail: 'Gomme blanche d\'écolier · effacement propre · miettes de gomme incluses',
  },
  {
    id: 'a-espadrilles-spaghetti',
    name: 'Espadrilles en spaghetti tressé « Les Al Dente »',
    category: 'sneakers',
    price: 3600,
    description:
      "Tressées à Naples selon la tradition. Prévoir huit minutes de cuisson avant le premier port, égouttage compris.",
    detail: 'Spaghetti n°5 · tressage grand-mère · sauce vendue séparément',
  },
  {
    id: 'a-derbies-kiwi',
    name: 'Derbies en peau de kiwi « Les Vitaminées »',
    category: 'sneakers',
    price: 5900,
    description:
      "Poilues à l'extérieur, tendres à l'intérieur : la parfaite métaphore de votre patron. Riches en vitamine C par simple contact.",
    detail: 'Kiwi de l\'Adour · doublure pulpe · patine duveteuse',
  },

  // ——— Parfums ———
  {
    id: 'a-eau-garage',
    name: 'Eau de garage « Vidange Impériale »',
    category: 'parfums',
    price: 2400,
    description:
      "Notes de cambouis noble, de pneu neuf et de samedi matin productif. Le parfum de ceux qui savent, ou qui font semblant près d'un capot.",
    detail: 'Extrait 30 % · flacon bidon d\'huile · sillage : mécanique',
  },
  {
    id: 'a-extrait-cave',
    name: 'Extrait de vieille cave « Le Patrimoine »',
    category: 'parfums',
    price: 3800,
    description:
      "Salpêtre, carton humide et souvenirs de famille : l'odeur exacte de la maison de votre grand-mère, en concentration prestige.",
    detail: 'Macération 40 ans · flacon bocal · notes de fond : nostalgie',
  },
  {
    id: 'a-parfum-chien',
    name: 'Parfum « Chien Mouillé, édition d\'automne »',
    category: 'parfums',
    price: 1900,
    description:
      "Le retour de promenade sous la pluie, capturé au plus près du labrador. Une fidélité olfactive que la critique qualifie de troublante.",
    detail: 'Accord poil humide · cœur de forêt · fond : canapé interdit',
  },
  {
    id: 'a-essence-cahier',
    name: 'Essence de cahier neuf « La Rentrée »',
    category: 'parfums',
    price: 2100,
    description:
      "Papier vierge, gomme neuve et protège-cahier : la promesse intacte d'une année où, cette fois, tout sera bien tenu.",
    detail: 'Notes de spirale · cœur d\'encre violette · fond : bonnes résolutions',
  },
  {
    id: 'a-eau-barbecue',
    name: 'Eau de barbecue « Le Dominical »',
    category: 'parfums',
    price: 2700,
    description:
      "Merguez fumée, gazon coupé et polo propre : l'assurance tranquille de l'homme qui tient la pince et ne la lâchera pas.",
    detail: 'Fumée de sarments · cœur chipolata · tenue : tout l\'été',
  },
  {
    id: 'a-brume-autoroute',
    name: 'Brume d\'autoroute « Aire de Repos n°7 »',
    category: 'parfums',
    price: 1600,
    description:
      "Café tiède de machine, bitume chaud et liberté des grands départs. Vaporiser avant tout trajet de plus de 400 kilomètres.",
    detail: 'Accord gasoil léger · cœur sandwich triangle · fond : horizon',
  },
  {
    id: 'a-extrait-saucisson',
    name: 'Extrait de saucisson « Le Rosette »',
    category: 'parfums',
    price: 3200,
    description:
      "Quatorze heures de tenue charcutière, un sillage qui fédère les foules et les chiens. Notre best-seller à l'apéritif.",
    detail: 'Rosette de Lyon · cœur poivre · fond : cave d\'affinage',
  },
  {
    id: 'a-parfum-photocopieuse',
    name: 'Parfum de photocopieuse « Le Bureau des Légendes »',
    category: 'parfums',
    price: 2900,
    description:
      "Toner chaud, ambition tiède et moquette neuve. Porté par ceux qui veulent sentir la promotion avant de l'obtenir.",
    detail: 'Notes de toner · cœur post-it · fond : réunion qui aurait pu être un mail',
  },
  {
    id: 'a-eau-petrichor',
    name: 'Eau de pluie sur bitume « Petrichor Prestige »',
    category: 'parfums',
    price: 4600,
    description:
      "Le premier orage d'été sur un trottoir brûlant, mis en flacon à la seconde exacte. Les poètes pleurent, les chimistes aussi.",
    detail: 'Orage millésimé · récolte : 40 secondes par an · flacon nuage',
  },
  {
    id: 'a-essence-monnaie',
    name: 'Essence de monnaie « Main de Banquier »',
    category: 'parfums',
    price: 5200,
    description:
      "Cuivre, nickel et pouvoir discret : l'odeur des mains qui comptent. Ironique, pour une boutique où l'on ne paie jamais.",
    detail: 'Pièces de collection infusées · cœur coffre-fort · fond : intérêts composés',
  },

  // ——— Lunettes ———
  {
    id: 'a-lunettes-saucisson',
    name: 'Lunettes en peau de saucisson « Les Rosette »',
    category: 'lunettes',
    price: 6400,
    description:
      "Monture affinée douze mois en cave, ficelle d'origine en guise de cordon. Le gras nourrit la peau du nez, c'est cadeau.",
    detail: 'Peau de rosette · charnières ficelle · odeur : assumée',
  },
  {
    id: 'a-monture-radis',
    name: 'Monture en radis noir « La Croquante »',
    category: 'lunettes',
    price: 3800,
    description:
      "Taillée dans un radis d'hiver premier choix. La vision devient légèrement piquante, les regards aussi.",
    detail: 'Radis de pleine terre · verres à croquer · fraîcheur : 5 jours',
  },
  {
    id: 'a-solaires-orange',
    name: 'Solaires en écorce d\'orange « Les Vitaminées »',
    category: 'lunettes',
    price: 4200,
    description:
      "Verres pressés à froid, monture zestée main. Le monde paraît plus ensoleillé, ce qui est précisément le cahier des charges.",
    detail: 'Orange sanguine · verres pulpe · indice de protection : agrume',
  },
  {
    id: 'a-lunettes-mie',
    name: 'Lunettes en mie de pain « Les Tendres »',
    category: 'lunettes',
    price: 2900,
    description:
      "D'une légèreté incomparable et d'une fragilité totale. Formellement déconseillées dans les squares fréquentés par des pigeons.",
    detail: 'Mie moulée · pont croûton · ennemi juré : le canard',
  },
  {
    id: 'a-monture-seiche',
    name: 'Monture en os de seiche « La Marine »',
    category: 'lunettes',
    price: 5600,
    description:
      "Légère, iodée, et légèrement sifflante par vent de face. Les perruches la convoitent, tenez-vous-le pour dit.",
    detail: 'Os de seiche calibré · verres embruns · sifflement : mélodieux',
  },
  {
    id: 'a-lunettes-reglisse',
    name: 'Lunettes en réglisse « Les Torsadées »',
    category: 'lunettes',
    price: 3400,
    description:
      "Branches torsadées comestibles, en cas d'ennui profond ou de réunion qui s'éternise. La monture raccourcit avec la journée.",
    detail: 'Réglisse artisanale · verres anis · durée de vie : votre volonté',
  },
  {
    id: 'a-binocle-gruyere',
    name: 'Binocle en croûte de gruyère « Le Percé »',
    category: 'lunettes',
    price: 7100,
    description:
      "Les trous font office de verres : une évidence que l'industrie optique refusait de voir depuis un siècle.",
    detail: 'Gruyère suisse véritable · correction : aucune · vision : optimiste',
  },
  {
    id: 'a-solaires-ardoise',
    name: 'Solaires en ardoise « Les Opaques »',
    category: 'lunettes',
    price: 8900,
    description:
      "Protection solaire absolue : ne laissent rien passer, surtout pas la lumière. Le mystère total, au prix de quelques meubles heurtés.",
    detail: 'Ardoise pleine · indice UV : infini · canne blanche offerte',
  },
  {
    id: 'a-lunettes-gel',
    name: 'Lunettes en gel douche solidifié « Les Matinales »',
    category: 'lunettes',
    price: 2600,
    description:
      "La buée est parfumée à la fleur de coton : voir flou n'a jamais senti aussi bon. Ne pas porter sous la douche, paradoxalement.",
    detail: 'Gel figé à froid · verres savon · parfum : matin pressé',
  },
  {
    id: 'a-monture-scarabee',
    name: 'Monture en carapace de scarabée (vide) « L\'Égyptienne »',
    category: 'lunettes',
    price: 12500,
    description:
      "Carapaces trouvées vides, sur rendez-vous, dans un jardin de Louxor. Portées par zéro pharaon, ce qui en fait toute la rareté.",
    detail: 'Chitine irisée · charnières hiéroglyphes · malédiction : non incluse',
  },

  // ——— Accessoires ———
  {
    id: 'a-echarpe-araignee',
    name: 'Écharpe en toile d\'araignée double fil « L\'Hivernale »',
    category: 'accessoires',
    price: 41000,
    description:
      "Chaude comme un frisson, légère comme un soupçon. Nos araignées tricotent d'octobre à mars, syndiquées et considérées.",
    detail: 'Double fil de soie · maille invisible · lavage : rosée uniquement',
  },
  {
    id: 'a-gants-flan',
    name: 'Gants en peau de flan « Les Tremblants »',
    category: 'accessoires',
    price: 5800,
    description:
      "Une poignée de main absolument inoubliable, quoique difficile à décrire. Tremblent d'eux-mêmes : parfaits pour feindre l'émotion.",
    detail: 'Flan pâtissier ferme · caramel aux coutures · frisson intégré',
  },
  {
    id: 'a-ceinture-reglisse',
    name: 'Ceinture en réglisse « La Gourmande »',
    category: 'accessoires',
    price: 3100,
    description:
      "Se déguste en cas de petit creux, le maintien du pantalon devenant dès lors une question de conviction personnelle.",
    detail: 'Réglisse au mètre · boucle bonbon anisé · risque : assumé',
  },
  {
    id: 'a-parapluie-sucre',
    name: 'Parapluie en sucre filé « L\'Optimiste »',
    category: 'accessoires',
    price: 6700,
    description:
      "Réservé à ceux qui croient sincèrement au beau temps. Sous la pluie, il devient un souvenir délicieux et collant.",
    detail: 'Sucre filé main · baleine caramel · garantie : ciel bleu',
  },
  {
    id: 'a-foulard-lait',
    name: 'Foulard en peau de lait « Le Crémeux »',
    category: 'accessoires',
    price: 4900,
    description:
      "Récolté à la surface de chocolats chauds d'exception, tendu et séché à l'air des alpages. La douceur, littéralement.",
    detail: 'Peau de lait entier · ourlets cacao · frisson garanti à l\'enfilage',
  },
  {
    id: 'a-boutons-des',
    name: 'Boutons de manchette en dés à coudre « Les Discrets »',
    category: 'accessoires',
    price: 8200,
    description:
      "Dés à coudre anciens, de provenance délicieusement floue. Chaque paire raconte une mercerie, et peut-être un larcin.",
    detail: 'Laiton 1920 · gravures effacées · alibi fourni',
  },
  {
    id: 'a-cravate-anguille',
    name: 'Cravate en anguille séchée « La Glissante »',
    category: 'accessoires',
    price: 7400,
    description:
      "Le nœud est objectivement impossible, mais l'effet en réunion est total. Se porte de préférence loin des buffets.",
    detail: 'Anguille de Loire · séchage 6 mois · nœud : bonne chance',
  },
  {
    id: 'a-chapeau-tourte',
    name: 'Chapeau en croûte de tourte « Le Dominical »',
    category: 'accessoires',
    price: 5300,
    description:
      "Sorti du four à 11 h 45 précises, porté à la messe de midi. Dorure à l'œuf, prestance de sortie de boulangerie.",
    detail: 'Pâte feuilletée 96 tours · dorure œuf fermier · rebord croustillant',
  },
  {
    id: 'a-gants-banane',
    name: 'Gants de conduite en peau de banane « Les Dérapants »',
    category: 'accessoires',
    price: 4100,
    description:
      "Le grip exact d'une peau de banane sur du marbre. ABS, ESP et prière fortement conseillés. Homologués nulle part.",
    detail: 'Banane plantain · surpiqûres fibre de mangue · adhérence : théorique',
  },
  {
    id: 'a-pochette-laitue',
    name: 'Pochette de costume en feuille de laitue « La Fraîche »',
    category: 'accessoires',
    price: 2300,
    description:
      "Croquante au pliage, d'un vert impossible à imiter. À remplacer toutes les deux heures, comme les conversations en cocktail.",
    detail: 'Laitue de serre froide · pli cathédrale · brumisateur inclus',
  },

  // ——— Maison / Art de vivre ———
  {
    id: 'a-villa-papier',
    name: 'Villa en papier mâché « La Résidence »',
    category: 'maison',
    price: 4800000,
    description:
      "240 m² montés feuille à feuille, vue imprenable, sonorisation naturelle par temps de pluie. Vendue avec un parapluie géant et beaucoup d'espoir.",
    detail: 'Papier mâché double épaisseur · fondations en carton · DPE : humide',
  },
  {
    id: 'a-canape-pain',
    name: 'Canapé en croûte de pain « Le Rassis »',
    category: 'maison',
    price: 38000,
    description:
      "Assise croustillante les premiers jours, moelleuse ensuite, historique après un mois. Les miettes font partie de l'expérience.",
    detail: 'Croûte levain · accoudoirs quignon · plaid en mie',
  },
  {
    id: 'a-lustre-sucre',
    name: 'Lustre en sucre glace « Le Fondant »',
    category: 'maison',
    price: 52000,
    description:
      "Un éclairage doux, une neige lente et sucrée sur les invités. Le plafond devient collant, mais les dîners deviennent légendaires.",
    detail: 'Sucre glace pressé · pampilles caramel · nettoyage : à la langue, dit-on',
  },
  {
    id: 'a-cheminee-glacons',
    name: 'Cheminée en glaçons « La Paradoxale »',
    category: 'maison',
    price: 67000,
    description:
      "L'objet le plus discuté de nos salons : une cheminée qui fond dès qu'elle sert. Le feu de bois est vendu séparément, par prudence.",
    detail: 'Glace de source · manteau banquise · durée : une flambée',
  },
  {
    id: 'a-vase-gelatine',
    name: 'Vase en gélatine « Le Vacillant »',
    category: 'maison',
    price: 9800,
    description:
      "Tremble avec les fleurs, frémit quand on claque la porte. Le seul vase capable d'exprimer une opinion sur vos bouquets.",
    detail: 'Gélatine or pâle · prise 48 h · sensible aux courants d\'air',
  },
  {
    id: 'a-tapis-herbe',
    name: 'Tapis en herbe fraîche « Le Dimanche »',
    category: 'maison',
    price: 24000,
    description:
      "L'odeur du gazon coupé, en permanence, dans votre salon. Tonte hebdomadaire comprise pendant douze ans, jardinier discret.",
    detail: 'Ray-grass anglais · arrosage intégré · pâquerettes en option',
  },
  {
    id: 'a-bibliotheque-spaghetti',
    name: 'Bibliothèque en spaghetti crus « L\'Italienne »',
    category: 'maison',
    price: 15600,
    description:
      "Structure fine, élancée, d'une élégance milanaise. Supporte jusqu'à trois livres de poche, choisissez-les bien.",
    detail: 'Spaghetti n°7 · assemblage al dente · capacité : la mesure',
  },
  {
    id: 'a-bougie-beurre',
    name: 'Bougie en beurre demi-sel « La Bretonne »',
    category: 'maison',
    price: 3200,
    description:
      "Une flamme dorée, un parfum de crêperie un dimanche de pluie. Les invités salivent, la déco s'en trouve inexplicablement grandie.",
    detail: 'Beurre AOP baratté · mèche salée · brûlage : 4 h ou un goûter',
  },
  {
    id: 'a-theiere-chocolat',
    name: 'Théière en chocolat « L\'Unique »',
    category: 'maison',
    price: 7900,
    description:
      "Un seul service possible, mais quel service : le thé infuse, la théière fond, les convives applaudissent. L'art éphémère à son sommet.",
    detail: 'Grand cru 70 % · anse pralinée · usage unique et inoubliable',
  },
  {
    id: 'a-piscine-bulle',
    name: 'Piscine en papier bulle « L\'Éclatante »',
    category: 'maison',
    price: 89000,
    description:
      "Chaque longueur crépite délicieusement. Plonger avec délicatesse, nager avec philosophie, sortir avant la dernière bulle.",
    detail: 'Triple épaisseur · margelle mousse · bande-son : incluse',
  },
]

export const ABSURD_PRODUCTS: Product[] = SEEDS.map((seed, index) => ({
  ...seed,
  house: HOUSE,
  monogram: MONOGRAM,
  gradient: seed.gradient ?? GRADIENTS[index % GRADIENTS.length],
}))
