import SectionTitle from './SectionTitle'
import './Transport.css'

const items = [
  'Veículos executivos de alto padrão',
  'Mais conforto',
  'Mais segurança',
  'Mais tranquilidade',
  'Atendimento preparado para receber nosso grupo',
]

export default function Transport() {
  return (
    <section className="transport">
      <div className="transport__inner">
        <SectionTitle eyebrow="Nada de improvisos" title="Transporte 100% privativo" />
        <p className="transport__intro">
          Todos os deslocamentos serão realizados com serviço privativo.
        </p>
        <ul className="transport__list">
          {items.map((item) => (
            <li key={item} className="transport__item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
