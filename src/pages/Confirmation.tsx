import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { getLastOrder, getTotalSaved } from '../lib/orders'
import { getProduct } from '../data/products'
import { formatEuros } from '../lib/format'
import { CountUp } from '../components/CountUp'

const CONFETTI_COLORS = ['#c9a961', '#9c7a33', '#f4efe6', '#221b12']

function fireConfetti() {
  confetti({
    particleCount: 90,
    spread: 75,
    origin: { y: 0.35 },
    colors: CONFETTI_COLORS,
    disableForReducedMotion: true,
  })
  window.setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.5 },
      colors: CONFETTI_COLORS,
      disableForReducedMotion: true,
    })
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.5 },
      colors: CONFETTI_COLORS,
      disableForReducedMotion: true,
    })
  }, 350)
}

export function Confirmation() {
  const reduceMotion = useReducedMotion()
  const order = useMemo(getLastOrder, [])
  const totalSaved = useMemo(getTotalSaved, [])

  useEffect(() => {
    if (order && !reduceMotion) {
      const timer = window.setTimeout(fireConfetti, 250)
      return () => window.clearTimeout(timer)
    }
  }, [order, reduceMotion])

  if (!order) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl text-encre">Aucune commande</h1>
        <p className="mt-4 text-sm text-taupe">
          Vous n'avez encore rien fait semblant d'acheter.
        </p>
        <Link
          to="/boutique"
          className="mt-8 inline-block border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
        >
          Corriger cela immédiatement
        </Link>
      </section>
    )
  }

  const greeting = order.firstName ? `Merci, ${order.firstName}.` : 'Merci.'

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.32em] uppercase text-or"
      >
        Commande {order.id} · confirmée pour de faux
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display mt-4 text-5xl leading-tight text-encre sm:text-6xl"
      >
        {greeting} <span className="italic text-or">C'est fait.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-taupe"
      >
        Votre commande part pour « {order.destination} ». Elle n'arrivera jamais, et
        c'est très bien comme ça.
      </motion.p>

      {/* Récap — le visuel à partager */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-12 max-w-xl border border-ligne bg-surface p-6 text-left sm:p-8"
      >
        <p className="text-center text-[11px] tracking-[0.24em] uppercase text-taupe">
          Maison Dopamine · Reçu n° {order.id}
        </p>
        <div className="filet my-5" />
        <ul className="space-y-2">
          {order.items.map((item) => {
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
          <span className="text-xs tracking-[0.24em] uppercase text-taupe">Payé</span>
          <span className="font-display text-3xl text-encre">0 €</span>
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-xs tracking-[0.24em] uppercase text-taupe">
            Économisé sur cette commande
          </span>
          <span className="text-lg text-or">{formatEuros(order.total)}</span>
        </div>
      </motion.div>

      {/* Compteur cumulé */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-12"
      >
        <p className="text-xs tracking-[0.28em] uppercase text-taupe">
          Économisé chez nous depuis le début
        </p>
        <CountUp
          to={totalSaved}
          className="font-display mt-2 block text-5xl text-or sm:text-6xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <Link
          to="/suivi"
          className="border border-encre bg-encre px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-ivoire transition-all duration-300 hover:border-or hover:bg-or"
        >
          Suivre ma livraison
        </Link>
        <Link
          to="/boutique"
          className="border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
        >
          Recommencer à ne rien acheter
        </Link>
      </motion.div>
    </section>
  )
}
