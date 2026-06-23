import SectionTitle from './SectionTitle'
import './CompleteExperience.css'

export default function CompleteExperience() {
  return (
    <section className="complete-experience">
      <div className="complete-experience__inner">
        <SectionTitle eyebrow="Do início ao fim" title="Uma experiência completa" light />
        <p className="complete-experience__text">Nós cuidamos de cada detalhe.</p>
        <p className="complete-experience__text">
          Desde sua chegada aos Estados Unidos até o momento do retorno ao Brasil.
        </p>
        <p className="complete-experience__highlight">
          Você só precisa se preocupar com uma coisa: viver plenamente esta experiência.
        </p>
      </div>
    </section>
  )
}
