import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { getLastOrder } from '../lib/orders'
import { getProduct } from '../data/products'

/** Trajet simulé accéléré : livrée « nulle part » en ~2 minutes. */
const JOURNEY_SECONDS = 120
const COURIER_START = 30
const TICK_MS = 1000
const MESSAGE_EVERY_SECONDS = 9

interface Step {
  at: number
  label: string
  note: string
}

const STEPS: Step[] = [
  { at: 0, label: 'Commande confirmée', note: 'Votre argent est toujours à sa place.' },
  { at: 8, label: 'Préparation en atelier', note: 'Emballage soigneux du vide, papier de soie compris.' },
  { at: 20, label: 'Expédiée', note: 'Le colis a quitté un entrepôt purement conceptuel.' },
  { at: COURIER_START, label: 'En route', note: 'Votre livreur imaginaire fait de son mieux.' },
  { at: JOURNEY_SECONDS, label: 'Livrée nulle part', note: 'Signée : Personne. Tout s\'est parfaitement passé.' },
]

const COURIER_MESSAGES = [
  'Votre livreur imaginaire vient de partir, plein d\'entrain.',
  'Il roule prudemment : le colis ne contient rien de fragile.',
  'Détour par une rue qui n\'existe pas. Classique.',
  'Il demande son chemin à un pigeon. Le pigeon hésite.',
  'Pause café. Même les livreurs fictifs ont des droits.',
  'Il vient de saluer un autre livreur imaginaire. Solidarité.',
  'Le GPS indique « nulle part » dans 12 minutes. Il accélère à peine.',
  'Il approche d\'une adresse résolument introuvable.',
  'Il cherche une place pour se garer dans le néant. Facile, pour une fois.',
]

function useElapsedSeconds(createdAt: string | undefined): number {
  const [elapsed, setElapsed] = useState(() =>
    createdAt ? Math.max(0, (Date.now() - new Date(createdAt).getTime()) / 1000) : 0,
  )

  useEffect(() => {
    if (!createdAt) return
    const start = new Date(createdAt).getTime()
    const timer = window.setInterval(() => {
      setElapsed(Math.max(0, (Date.now() - start) / 1000))
    }, TICK_MS)
    return () => window.clearInterval(timer)
  }, [createdAt])

  return elapsed
}

export function Suivi() {
  const order = useMemo(getLastOrder, [])
  const elapsed = useElapsedSeconds(order?.createdAt)

  if (!order) {
    return (
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl text-encre">Rien à suivre</h1>
        <p className="mt-4 text-sm text-taupe">
          Aucune commande en cours. Votre livreur imaginaire est au chômage technique.
        </p>
        <Link
          to="/boutique"
          className="mt-8 inline-block border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
        >
          Lui redonner du travail
        </Link>
      </section>
    )
  }

  const isDelivered = elapsed >= JOURNEY_SECONDS
  const courierProgress = Math.min(
    1,
    Math.max(0, (elapsed - COURIER_START) / (JOURNEY_SECONDS - COURIER_START)),
  )
  const messageIndex = Math.min(
    COURIER_MESSAGES.length - 1,
    Math.floor(Math.max(0, elapsed - COURIER_START) / MESSAGE_EVERY_SECONDS),
  )
  const itemCount = order.items.reduce((sum, item) => sum + item.quantity, 0)
  const firstProduct = getProduct(order.items[0]?.productId ?? '')

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="text-center">
        <p className="text-xs tracking-[0.32em] uppercase text-or">
          Suivi · Commande {order.id}
        </p>
        <h1 className="font-display mt-3 text-4xl text-encre sm:text-5xl">
          {isDelivered ? (
            <>
              Livrée <span className="italic text-or">nulle part.</span>
            </>
          ) : (
            <>
              Votre colis <span className="italic text-or">n'arrive pas.</span>
            </>
          )}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-taupe">
          {itemCount} article{itemCount > 1 ? 's' : ''}
          {firstProduct ? ` — dont ${firstProduct.name}` : ''} · destination : «{' '}
          {order.destination} »
        </p>
      </header>

      {/* Timeline */}
      <ol className="mt-14 space-y-0">
        {STEPS.map((step, index) => {
          const isDone = elapsed >= step.at
          const isCurrent =
            isDone && (index === STEPS.length - 1 ? isDelivered : elapsed < (STEPS[index + 1]?.at ?? Infinity))
          const isLast = index === STEPS.length - 1

          return (
            <li key={step.label} className="relative flex gap-5 pb-10 last:pb-0">
              {/* Ligne verticale */}
              {!isLast && (
                <span
                  aria-hidden
                  className={`absolute top-6 left-[11px] h-full w-px transition-colors duration-700 ${
                    elapsed >= (STEPS[index + 1]?.at ?? Infinity) ? 'bg-or' : 'bg-ligne'
                  }`}
                />
              )}
              {/* Pastille */}
              <motion.span
                aria-hidden
                initial={false}
                animate={{
                  scale: isCurrent ? 1.15 : 1,
                  backgroundColor: isDone ? 'var(--color-or)' : 'var(--color-fond-2)',
                  borderColor: isDone ? 'var(--color-or)' : 'var(--color-ligne)',
                }}
                transition={{ duration: 0.5 }}
                className="relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
              >
                {isDone && <span className="text-[10px] text-ivoire">✦</span>}
              </motion.span>
              <div className={`transition-opacity duration-500 ${isDone ? 'opacity-100' : 'opacity-45'}`}>
                <p
                  className={`text-sm tracking-[0.18em] uppercase ${
                    isCurrent ? 'text-or' : 'text-encre'
                  }`}
                >
                  {step.label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-taupe">{step.note}</p>

                {/* Progression du livreur */}
                {step.at === COURIER_START && isDone && !isDelivered && (
                  <div className="mt-5 w-full max-w-md">
                    <div className="relative h-px w-full bg-ligne">
                      <motion.div
                        className="absolute inset-y-0 left-0 origin-left bg-or"
                        style={{ width: '100%' }}
                        animate={{ scaleX: courierProgress }}
                        transition={{ duration: 0.9, ease: 'linear' }}
                      />
                      <motion.span
                        aria-hidden
                        className="absolute -top-[13px] text-base"
                        animate={{ left: `${courierProgress * 96}%` }}
                        transition={{ duration: 0.9, ease: 'linear' }}
                      >
                        🛵
                      </motion.span>
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-4">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={messageIndex}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.4 }}
                          className="text-xs leading-relaxed text-taupe italic"
                        >
                          {COURIER_MESSAGES[messageIndex]}
                        </motion.p>
                      </AnimatePresence>
                      <span className="shrink-0 text-xs text-or">
                        {Math.round(courierProgress * 100)} %
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      {/* Livré */}
      <AnimatePresence>
        {isDelivered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 border border-ligne bg-surface p-8 text-center"
          >
            <p className="font-display text-2xl text-encre italic">
              « Colis remis en main propre à personne, nulle part, avec le sourire. »
            </p>
            <p className="mt-3 text-xs tracking-[0.24em] uppercase text-taupe">
              — Votre livreur imaginaire, mission accomplie
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/boutique"
                className="border border-encre bg-encre px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-ivoire transition-all duration-300 hover:border-or hover:bg-or"
              >
                Commander autre chose
              </Link>
              <Link
                to="/"
                className="border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
              >
                Retour au calme
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
