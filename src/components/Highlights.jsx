import SectionTitle from './SectionTitle'
import './Highlights.css'

const items = [
  'Uma das maiores conferências cristãs femininas dos Estados Unidos.',
  'Dias de crescimento espiritual.',
  'Momentos de adoração e aprendizado.',
  'Novas amizades.',
  'Compras, lazer e experiências especiais.',
  'Tudo organizado para que você viaje com tranquilidade.',
]

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__inner">
        <SectionTitle eyebrow="O que está por vir" title="Imagine viver tudo isso" />
        <ul className="highlights__list">
          {items.map((item) => (
            <li key={item} className="highlights__item">
              <span className="highlights__bullet" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
