import SectionTitle from './SectionTitle'
import './Accommodation.css'

const criteria = [
  'Conforto',
  'Segurança',
  'Excelente localização',
  'Facilidade para compras e lazer',
  'Praticidade durante toda a viagem',
]

const cities = [
  {
    name: 'Orlando',
    description:
      'Estaremos hospedadas em uma das regiões mais desejadas da cidade, com acesso facilitado a outlets, lojas famosas, restaurantes, entretenimento e compras de conveniência.',
    note: 'Uma localização que permite aproveitar muito mais o seu tempo.',
  },
  {
    name: 'Tampa',
    description:
      'Estaremos em uma das regiões mais valorizadas da cidade, com fácil acesso aos principais centros comerciais e transporte organizado para os dias da conferência.',
    note: 'Tudo para que você aproveite cada momento sem preocupações.',
  },
]

export default function Accommodation() {
  return (
    <section className="accommodation">
      <div className="accommodation__inner">
        <SectionTitle eyebrow="Hospedagem selecionada com critério" title="Onde você vai ficar" />
        <ul className="accommodation__criteria">
          {criteria.map((item) => (
            <li key={item} className="accommodation__criteria-item">
              {item}
            </li>
          ))}
        </ul>
        <div className="accommodation__cities">
          {cities.map((city) => (
            <article key={city.name} className="accommodation__city">
              <h3 className="accommodation__city-name">{city.name}</h3>
              <p className="accommodation__city-text">{city.description}</p>
              <p className="accommodation__city-note">{city.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
