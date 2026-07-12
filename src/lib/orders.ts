import type { CartItem } from '../context/CartContext'

const LAST_ORDER_KEY = 'maison-dopamine-last-order'
const TOTAL_SAVED_KEY = 'maison-dopamine-economise'

export interface Order {
  id: string
  firstName: string
  destination: string
  items: CartItem[]
  total: number
  createdAt: string
}

export function createOrderId(): string {
  const year = new Date().getFullYear()
  const serial = Math.floor(1000 + Math.random() * 9000)
  return `MD-${year}-${serial}`
}

export function saveOrder(order: Order): void {
  localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order))
  localStorage.setItem(TOTAL_SAVED_KEY, String(getTotalSaved() + order.total))
}

export function getLastOrder(): Order | null {
  try {
    const raw = localStorage.getItem(LAST_ORDER_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== 'object' || parsed === null) return null
    const order = parsed as Order
    if (typeof order.id !== 'string' || !Array.isArray(order.items)) return null
    return order
  } catch {
    return null
  }
}

export function getTotalSaved(): number {
  const raw = localStorage.getItem(TOTAL_SAVED_KEY)
  const value = raw ? Number(raw) : 0
  return Number.isFinite(value) ? value : 0
}
