import SectionTitle from './SectionTitle'
import './NotIncluded.css'

const items = ['Passagem aérea', 'Gastos pessoais', 'Refeições não mencionadas']

export default function NotIncluded() {
  return (
    <section className="not-included">
      <div className="not-included__inner">
        <SectionTitle title="O que não está incluso" />
        <ul className="not-included__list">
          {items.map((item) => (
            <li key={item} className="not-included__item">
              {item}
            </li>
          ))}
        </ul>
        <p className="not-included__note">
          A passagem aérea não está incluída, mas podemos te ajudar a encontrar as melhores opções.
        </p>
      </div>
    </section>
  )
}
