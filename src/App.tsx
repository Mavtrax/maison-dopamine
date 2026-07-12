import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Disclaimer } from './components/layout/Disclaimer'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Boutique } from './pages/Boutique'
import { Produit } from './pages/Produit'
import { Panier } from './pages/Panier'
import { Commande } from './pages/Commande'
import { Confirmation } from './pages/Confirmation'
import { Suivi } from './pages/Suivi'

function App() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Disclaimer />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/produit/:id" element={<Produit />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/commande" element={<Commande />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/suivi" element={<Suivi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}

export default App
