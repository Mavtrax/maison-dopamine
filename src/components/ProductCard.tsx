import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { ProductVisual } from './ProductVisual'
import { formatEuros } from '../lib/format'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/produit/${product.id}`} className="group block">
      <div className="overflow-hidden">
        <ProductVisual
          product={product}
          className="aspect-[4/5] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-[11px] tracking-[0.24em] uppercase text-taupe">
          {product.house}
        </p>
        <p className="font-display mt-1 text-xl text-encre transition-colors duration-300 group-hover:text-or">
          {product.name}
        </p>
        <p className="mt-1 text-sm text-or">{formatEuros(product.price)}</p>
      </div>
    </Link>
  )
}
