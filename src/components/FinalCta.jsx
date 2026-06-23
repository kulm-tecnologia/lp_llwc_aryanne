import CtaButton from './CtaButton'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2 className="final-cta__title">É o seu momento</h2>
        <p className="final-cta__text">
          Talvez Deus esteja preparando algo especial para você nesta viagem.
        </p>
        <p className="final-cta__text">
          Talvez este seja o momento de investir em sua fé, em seu crescimento e em uma
          experiência que ficará marcada para sempre em sua vida.
        </p>
        <p className="final-cta__highlight">
          Venha viver a Love Life Women's Conference ao lado da Aryanne Marques.
        </p>
        <CtaButton label="Reservar minha vaga agora" />
      </div>
    </section>
  )
}
