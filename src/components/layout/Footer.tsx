export function Footer() {
  return (
    <footer className="border-t border-ligne bg-fond-2">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="filet mb-8" />
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-lg italic text-encre">
            « Tout acheter. Ne rien payer. Se sentir mieux. »
          </p>
          <p className="max-w-md text-xs leading-relaxed text-taupe">
            Maison Dopamine est une expérience anti-pulsion d'achat inspirée d'une
            tendance sud-coréenne : on remplit son panier, on commande, on suit son
            livreur — et on ne dépense jamais rien.
          </p>
          <p className="text-[11px] tracking-[0.18em] uppercase text-taupe/70">
            Une expérience conçue par Maverick Nova
          </p>
        </div>
      </div>
    </footer>
  )
}
