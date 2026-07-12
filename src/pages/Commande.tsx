import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { getProduct } from '../data/products'
import { formatEuros } from '../lib/format'
import { createOrderId, saveOrder } from '../lib/orders'

const PROCESSING_MS = 1600

const DESTINATIONS = [
  'Chez moi (dans mes rêves)',
  'Villa imaginaire, Côte d\'Azur',
  'Yacht conceptuel, en mer',
  'Pied-à-terre fictif, Paris 8e',
] as const

export function Commande() {
  const { items, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [destination, setDestination] = useState<string>(DESTINATIONS[0])
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0 && !isProcessing) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl text-encre">Rien à encaisser</h1>
        <p className="mt-4 text-sm text-taupe">
          Votre panier est vide. Même une fausse caisse a besoin de faux articles.
        </p>
        <Link
          to="/boutique"
          className="mt-8 inline-block border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
        >
          Retour à la collection
        </Link>
      </section>
    )
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (isProcessing) return
    setIsProcessing(true)

    window.setTimeout(() => {
      saveOrder({
        id: createOrderId(),
        firstName: firstName.trim(),
        destination,
        items,
        total: totalPrice,
        createdAt: new Date().toISOString(),
      })
      clearCart()
      navigate('/confirmation')
    }, PROCESSING_MS)
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-center text-4xl text-encre sm:text-5xl">
        Passer en caisse
      </h1>
      <p className="mt-3 text-center text-xs tracking-[0.24em] uppercase text-taupe">
        L'étape la plus indolore de votre vie d'acheteur
      </p>

      <form onSubmit={handleSubmit} className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Livraison */}
        <fieldset className="border border-ligne bg-surface p-6 sm:p-8 lg:col-span-3">
          <legend className="px-3 text-xs tracking-[0.24em] uppercase text-or">
            Livraison
          </legend>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-[11px] tracking-[0.2em] uppercase text-taupe"
              >
                Prénom (pour le plaisir de le lire sur le colis)
              </label>
              <input
                id="firstName"
                type="text"
                maxLength={30}
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="Optionnel, comme tout le reste"
                className="w-full border border-ligne bg-fond px-4 py-3 text-sm text-encre placeholder:text-taupe/60 focus:border-or focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="destination"
                className="mb-2 block text-[11px] tracking-[0.2em] uppercase text-taupe"
              >
                Adresse de livraison
              </label>
              <select
                id="destination"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
                className="w-full border border-ligne bg-fond px-4 py-3 text-sm text-encre focus:border-or focus:outline-none"
              >
                {DESTINATIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-[11px] leading-relaxed tracking-[0.08em] text-taupe">
              Livraison offerte, forcément. Délai estimé : quelque part entre ce soir
              et jamais.
            </p>
          </div>
        </fieldset>

        {/* Paiement + récap */}
        <div className="space-y-8 lg:col-span-2">
          <fieldset className="border border-ligne bg-surface p-6 sm:p-8">
            <legend className="px-3 text-xs tracking-[0.24em] uppercase text-or">
              Paiement
            </legend>
            {/* Carte factice : affichage pur, aucune saisie possible */}
            <div
              aria-label="Carte bancaire fictive, aucune saisie possible"
              className="relative aspect-[8/5] w-full overflow-hidden bg-encre p-5 text-ivoire"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 80% 0%, rgba(201,169,97,0.35) 0%, transparent 60%)',
                }}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm italic text-or-vif">
                    Banque de Nulle Part
                  </span>
                  <span className="h-6 w-9 rounded-sm bg-or/70" aria-hidden />
                </div>
                <p className="text-lg tracking-[0.18em] sm:text-xl">
                  4242&nbsp;4242&nbsp;4242&nbsp;4242
                </p>
                <div className="flex items-end justify-between text-[10px] tracking-[0.2em] uppercase text-ivoire/70">
                  <span>M. Personne</span>
                  <span>Exp. 12/99 · CVV ✦✦✦</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed tracking-[0.08em] text-taupe">
              Cette carte n'existe pas et rien n'est saisissable. C'est le principe.
            </p>
          </fieldset>

          <div className="border border-ligne bg-surface p-6 sm:p-8">
            <ul className="space-y-2">
              {items.map((item) => {
                const product = getProduct(item.productId)
                if (!product) return null
                return (
                  <li key={item.productId} className="flex justify-between gap-4 text-sm">
                    <span className="truncate text-encre/80">
                      {item.quantity} × {product.name}
                    </span>
                    <span className="shrink-0 text-taupe">
                      {formatEuros(product.price * item.quantity)}
                    </span>
                  </li>
                )
              })}
            </ul>
            <div className="filet my-5" />
            <div className="flex items-baseline justify-between">
              <span className="text-xs tracking-[0.24em] uppercase text-taupe">
                À payer
              </span>
              <span className="font-display text-3xl text-encre">0 €</span>
            </div>
            <p className="mt-1 text-right text-xs text-taupe line-through">
              {formatEuros(totalPrice)}
            </p>

            <motion.button
              type="submit"
              disabled={isProcessing}
              whileTap={{ scale: 0.98 }}
              className="mt-6 block w-full border border-encre bg-encre px-8 py-4 text-xs tracking-[0.28em] uppercase text-ivoire transition-all duration-300 hover:border-or hover:bg-or disabled:cursor-wait disabled:opacity-80"
            >
              {isProcessing ? 'Encaissement du néant…' : 'Payer 0 € maintenant'}
            </motion.button>
          </div>
        </div>
      </form>
    </section>
  )
}
