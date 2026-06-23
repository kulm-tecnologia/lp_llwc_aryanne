import SectionTitle from './SectionTitle'
import './MoreThanTrip.css'

const items = [
  'Desfrutar de momentos de comunhão.',
  'Viver dias especiais.',
  'Construir memórias que permanecerão para sempre.',
  'Fortalecer sua fé.',
  'Criar novas amizades.',
]

export default function MoreThanTrip() {
  return (
    <section className="more-than-trip">
      <div className="more-than-trip__inner">
        <SectionTitle eyebrow="Mais do que uma viagem" title="Esta experiência foi criada para mulheres que desejam" />
        <ul className="more-than-trip__list">
          {items.map((item) => (
            <li key={item} className="more-than-trip__item">
              <span className="more-than-trip__bullet" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
