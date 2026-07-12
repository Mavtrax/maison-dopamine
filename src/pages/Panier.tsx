import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { getProduct } from '../data/products'
import { ProductVisual } from '../components/ProductVisual'
import { formatEuros } from '../lib/format'

export function Panier() {
  const { items, totalPrice, updateQuantity, removeFromCart } = useCart()

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl text-encre">Votre panier est vide</h1>
        <p className="mt-4 text-sm leading-relaxed text-taupe">
          C'est le seul moment où ce site vous jugera légèrement.
        </p>
        <Link
          to="/boutique"
          className="mt-8 inline-block border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
        >
          Aller remplir tout ça
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-center text-4xl text-encre sm:text-5xl">
        Votre panier
      </h1>
      <p className="mt-3 text-center text-xs tracking-[0.24em] uppercase text-taupe">
        Coût réel : 0 €, comme toujours
      </p>

      <ul className="mt-12 space-y-6">
        <AnimatePresence initial={false}>
          {items.map((item) => {
            const product = getProduct(item.productId)
            if (!product) return null
            return (
              <motion.li
                key={item.productId}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 border border-ligne bg-surface p-4 sm:gap-6 sm:p-5"
              >
                <Link to={`/produit/${product.id}`} className="shrink-0">
                  <ProductVisual product={product} className="h-28 w-24 sm:h-32 sm:w-28" />
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-taupe">
                      {product.house}
                    </p>
                    <Link
                      to={`/produit/${product.id}`}
                      className="font-display block truncate text-lg text-encre transition-colors hover:text-or sm:text-xl"
                    >
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm text-or">{formatEuros(product.price)}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-ligne">
                      <button
                        type="button"
                        aria-label={`Retirer un ${product.name}`}
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="px-3 py-1 text-taupe transition-colors hover:text-or"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm text-encre">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Ajouter un ${product.name}`}
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="px-3 py-1 text-taupe transition-colors hover:text-or"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.productId)}
                      className="text-[11px] tracking-[0.18em] uppercase text-taupe transition-colors hover:text-or"
                    >
                      Retirer
                    </button>
                  </div>
                </div>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>

      <div className="mt-12 border border-ligne bg-surface p-6 sm:p-8">
        <div className="flex items-baseline justify-between">
          <span className="text-xs tracking-[0.24em] uppercase text-taupe">Total</span>
          <motion.span
            key={totalPrice}
            initial={{ scale: 1.08, color: 'var(--color-or-vif)' }}
            animate={{ scale: 1, color: 'var(--color-encre)' }}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl sm:text-4xl"
          >
            {formatEuros(totalPrice)}
          </motion.span>
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-xs tracking-[0.24em] uppercase text-taupe">
            Vous économisez
          </span>
          <span className="text-lg text-or">{formatEuros(totalPrice)}</span>
        </div>
        <div className="filet my-6" />
        <Link
          to="/commande"
          className="block w-full border border-encre bg-encre px-10 py-4 text-center text-xs tracking-[0.28em] uppercase text-ivoire transition-all duration-300 hover:border-or hover:bg-or"
        >
          Passer commande — 0 €
        </Link>
        <p className="mt-3 text-center text-[11px] tracking-[0.14em] uppercase text-taupe">
          Aucune carte ne sera demandée. Aucune. Promis.
        </p>
      </div>
    </section>
  )
}
