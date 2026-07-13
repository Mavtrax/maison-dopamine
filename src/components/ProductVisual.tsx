import type { Product } from '../types'

interface ProductVisualProps {
  product: Product
  className?: string
  /** Charger l'image immédiatement (fiche produit au-dessus de la ligne de flottaison). */
  eager?: boolean
}

/**
 * Visuel de produit : photo libre de droits quand elle existe,
 * sinon composition gradient + monogramme serif (zéro souci de droits d'image).
 */
export function ProductVisual({ product, className = '', eager = false }: ProductVisualProps) {
  if (product.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={product.image}
          alt={`${product.name} — ${product.house}`}
          loading={eager ? 'eager' : 'lazy'}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-16"
          style={{
            background: 'linear-gradient(to top, rgba(13,11,9,0.55) 0%, transparent 100%)',
          }}
        />
        <span
          aria-hidden
          className="absolute bottom-3 left-0 right-0 text-center text-[10px] tracking-[0.3em] uppercase text-ivoire/80"
        >
          {product.house}
        </span>
      </div>
    )
  }

  const [from, to] = product.gradient

  return (
    <div
      role="img"
      aria-label={`${product.name} — ${product.house}`}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)` }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(244,239,230,0.14) 0%, transparent 55%)',
        }}
      />
      <span
        aria-hidden
        className="font-display text-6xl tracking-widest text-ivoire/80 select-none sm:text-7xl"
      >
        {product.monogram}
      </span>
      <span
        aria-hidden
        className="absolute bottom-3 left-0 right-0 text-center text-[10px] tracking-[0.3em] uppercase text-ivoire/50"
      >
        {product.house}
      </span>
    </div>
  )
}
