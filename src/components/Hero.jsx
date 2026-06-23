import CtaButton from './CtaButton'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <span className="hero__eyebrow">Caravana exclusiva de mulheres</span>
        <h1 className="hero__title">
          Love Life Women's Conference
          <span className="hero__title-accent"> com Joyce Meyer</span>
        </h1>
        <p className="hero__subtitle">
          Conferência em Tampa para mulheres que entendem seu real valor.
        </p>
        <p className="hero__host">
          Ao lado de <strong>Aryanne Marques</strong>
        </p>
        <p className="hero__brunch">
          Brunch exclusivo para quem estiver nessa jornada conosco.
        </p>
        <CtaButton />
      </div>
      <div className="hero__glow" aria-hidden="true" />
    </section>
  )
}
