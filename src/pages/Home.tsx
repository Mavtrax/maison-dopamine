import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PRODUCTS } from '../data/products'
import { ProductCard } from '../components/ProductCard'

const FEATURED_IDS = ['tourbillon-minuit', 'sac-grand-soir', 'riviere-constellation']

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Home() {
  const featured = PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id))

  return (
    <div>
      {/* Héro */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden px-4 pt-24 pb-20 text-center sm:pt-32 sm:pb-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(156,122,51,0.16) 0%, transparent 70%)',
          }}
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs tracking-[0.32em] uppercase text-or"
        >
          Paris · Séoul · Nulle part
        </motion.p>
        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mx-auto max-w-3xl text-5xl leading-[1.05] text-encre sm:text-7xl"
        >
          Le luxe, <span className="italic text-or">sans l'addition.</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-taupe sm:text-lg"
        >
          Remplissez votre panier. Passez commande. Suivez votre livreur.
          <br className="hidden sm:block" />
          Vous ne paierez jamais rien — et c'est exactement le but.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link
            to="/boutique"
            className="inline-block border border-or px-10 py-3.5 text-xs tracking-[0.28em] uppercase text-or transition-all duration-300 hover:bg-or hover:text-ivoire"
          >
            Entrer dans la boutique
          </Link>
        </motion.div>
      </section>

      {/* Sélection */}
      <section aria-labelledby="featured-heading" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="filet mb-12" />
        <h2
          id="featured-heading"
          className="font-display mb-10 text-center text-3xl text-encre sm:text-4xl"
        >
          La sélection <span className="italic text-or">du soir</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manifeste */}
      <section aria-labelledby="manifesto-heading" className="bg-fond-2 px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="manifesto-heading" className="sr-only">
            Le concept
          </h2>
          <p className="font-display text-2xl leading-relaxed text-encre italic sm:text-3xl">
            « L'envie d'acheter dure neuf minutes. Une commande chez nous en prend
            trois, et ne coûte rien. Faites le calcul. »
          </p>
          <p className="mt-6 text-xs tracking-[0.24em] uppercase text-taupe">
            — Le fondateur, probablement
          </p>
        </div>
      </section>
    </div>
  )
}
