import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getProduct } from '../data/products'
import { CATEGORY_LABELS } from '../types'
import { ProductVisual } from '../components/ProductVisual'
import { formatEuros } from '../lib/format'
import { useCart } from '../context/CartContext'

const ADDED_FEEDBACK_MS = 1600

export function Produit() {
  const { id } = useParams()
  const product = id ? getProduct(id) : undefined
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  if (!product) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl text-encre">Pièce introuvable</h1>
        <p className="mt-4 text-sm text-taupe">
          Même chez nous, certaines choses n'existent vraiment pas.
        </p>
        <Link
          to="/boutique"
          className="mt-8 inline-block border border-or px-8 py-3 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
        >
          Retour à la collection
        </Link>
      </section>
    )
  }

  const handleAdd = () => {
    addToCart(product.id)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), ADDED_FEEDBACK_MS)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label="Fil d'Ariane" className="mb-8 text-[11px] tracking-[0.2em] uppercase text-taupe">
        <Link to="/boutique" className="transition-colors hover:text-or">
          La Collection
        </Link>
        <span className="mx-2 text-ligne">/</span>
        <span className="text-or">{CATEGORY_LABELS[product.category]}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProductVisual product={product} className="aspect-[4/5] w-full" eager />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs tracking-[0.28em] uppercase text-taupe">{product.house}</p>
          <h1 className="font-display mt-2 text-4xl leading-tight text-encre sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-2xl text-or">{formatEuros(product.price)}</p>

          <div className="filet my-8" />

          <p className="text-base leading-relaxed text-encre/80">{product.description}</p>
          <p className="mt-4 text-xs tracking-[0.14em] uppercase text-taupe">
            {product.detail}
          </p>

          <div className="mt-10">
            <button
              type="button"
              onClick={handleAdd}
              className={`relative w-full overflow-hidden border px-10 py-4 text-xs tracking-[0.28em] uppercase transition-all duration-300 sm:w-auto ${
                justAdded
                  ? 'border-or bg-or text-ivoire'
                  : 'border-encre bg-encre text-ivoire hover:border-or hover:bg-or'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={justAdded ? 'added' : 'idle'}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="block"
                >
                  {justAdded ? 'Ajouté au panier ✦' : 'Ajouter au panier'}
                </motion.span>
              </AnimatePresence>
            </button>
            <p className="mt-3 text-[11px] tracking-[0.14em] uppercase text-taupe">
              Paiement : jamais · Livraison : nulle part · Plaisir : immédiat
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
