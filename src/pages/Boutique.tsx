import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PRODUCTS } from '../data/products'
import { CATEGORY_LABELS } from '../types'
import type { Category } from '../types'
import { ProductCard } from '../components/ProductCard'

const ALL_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[]

function isCategory(value: string | null): value is Category {
  return value !== null && value in CATEGORY_LABELS
}

export function Boutique() {
  const [searchParams, setSearchParams] = useSearchParams()
  const rawCategory = searchParams.get('categorie')
  const activeCategory = isCategory(rawCategory) ? rawCategory : null

  const visibleProducts = activeCategory
    ? PRODUCTS.filter((product) => product.category === activeCategory)
    : PRODUCTS

  const selectCategory = (category: Category | null) => {
    setSearchParams(category ? { categorie: category } : {}, { replace: true })
  }

  const chipClass = (isActive: boolean) =>
    `border px-4 py-2 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
      isActive
        ? 'border-or bg-or text-ivoire'
        : 'border-ligne text-taupe hover:border-or hover:text-or'
    }`

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="text-center">
        <p className="text-xs tracking-[0.32em] uppercase text-or">
          Tout est à vous
        </p>
        <h1 className="font-display mt-3 text-4xl text-encre sm:text-5xl">
          La Collection
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
          {PRODUCTS.length} pièces d'exception. Aucune n'existe, toutes sont
          disponibles immédiatement.
        </p>
      </header>

      <nav aria-label="Filtrer par catégorie" className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        <button type="button" onClick={() => selectCategory(null)} className={chipClass(activeCategory === null)}>
          Tout
        </button>
        {ALL_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => selectCategory(category)}
            className={chipClass(activeCategory === category)}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </nav>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.5), ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
