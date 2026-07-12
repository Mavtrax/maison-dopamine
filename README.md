# Maison Dopamine — Le luxe, sans l'addition.

Boutique de luxe **entièrement fictive** : on remplit son panier, on passe commande,
on suit son livreur imaginaire — et on ne dépense jamais rien.

Expérience anti-pulsion d'achat inspirée d'une tendance sud-coréenne
(« fake shopping » anti-stress). Rien n'est en vente, aucune donnée bancaire
n'est demandée ni saisissable.

## Fonctionnalités

- **210 pièces fictives** réparties sur 8 catégories (montres, maroquinerie,
  joaillerie, sneakers, parfums, lunettes, accessoires, art de vivre) —
  15 écrites à la main + 195 générées de façon déterministe (`src/data/generator.ts`)
- Catalogue filtrable (filtre dans l'URL), fiches produit, panier persistant (localStorage)
- Faux checkout : carte bancaire factice en lecture seule (« Banque de Nulle Part »)
- Confirmation avec confettis et compteur cumulé « argent économisé »
- Suivi de livraison simulé accéléré (~2 min) jusqu'à « Livrée nulle part »

## Stack

React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · canvas-confetti

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build de production
npx tsc --noEmit -p tsconfig.app.json   # vérification des types
```

## Déploiement

Vercel (`vercel.json` : rewrite SPA + en-têtes de sécurité).

---

Une expérience conçue par **Maverick Nova**.
