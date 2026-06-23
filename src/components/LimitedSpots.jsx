import SectionTitle from './SectionTitle'
import './LimitedSpots.css'

export default function LimitedSpots() {
  return (
    <section className="limited-spots">
      <div className="limited-spots__inner">
        <SectionTitle eyebrow="Vagas limitadas" title="A organização foi planejada para um grupo exclusivo" />
        <p className="limited-spots__text">Por isso, as vagas são limitadas.</p>
        <p className="limited-spots__text">
          Quando o grupo estiver completo, as inscrições serão encerradas.
        </p>
      </div>
    </section>
  )
}
