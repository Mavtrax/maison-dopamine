import type { Product } from '../types'

interface ProductVisualProps {
  product: Product
  className?: string
}

/**
 * Visuel de produit sans photo : composition gradient + monogramme serif.
 * Évite tout souci de droits d'image tout en gardant une DA luxe cohérente.
 */
export function ProductVisual({ product, className = '' }: ProductVisualProps) {
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
