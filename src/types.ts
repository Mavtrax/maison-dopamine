export type Category =
  | 'montres'
  | 'maroquinerie'
  | 'joaillerie'
  | 'sneakers'
  | 'parfums'
  | 'lunettes'
  | 'accessoires'
  | 'maison'

export interface Product {
  id: string
  name: string
  house: string
  category: Category
  price: number
  description: string
  detail: string
  monogram: string
  gradient: [string, string]
  /** Photo libre de droits (Unsplash), servie depuis /images. Absente = visuel monogramme. */
  image?: string
}

export const CATEGORY_LABELS: Record<Category, string> = {
  montres: 'Montres',
  maroquinerie: 'Maroquinerie',
  joaillerie: 'Joaillerie',
  sneakers: 'Sneakers',
  parfums: 'Parfums',
  lunettes: 'Lunettes',
  accessoires: 'Accessoires',
  maison: 'Art de vivre',
}
