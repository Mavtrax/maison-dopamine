import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../../context/CartContext'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-xs tracking-[0.22em] uppercase whitespace-nowrap transition-colors duration-300 ${
    isActive ? 'text-or' : 'text-encre/70 hover:text-or'
  }`

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-40 border-b border-ligne bg-fond/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group">
          <span className="font-display text-xl tracking-[0.08em] text-encre sm:text-2xl">
            Maison{' '}
            <span className="italic text-or transition-colors duration-300 group-hover:text-or-vif">
              Dopamine
            </span>
          </span>
        </Link>
        <nav aria-label="Navigation principale" className="flex items-center gap-6 sm:gap-8">
          <NavLink to="/boutique" className={navLinkClass}>
            La Collection
          </NavLink>
          <NavLink to="/panier" className={navLinkClass}>
            <span className="relative inline-flex items-center gap-1.5">
              Panier
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-or px-1 text-[10px] font-medium tracking-normal text-ivoire"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
