import SectionTitle from './SectionTitle'
import './Itinerary.css'

const days = [
  { date: '19 de Outubro', title: 'Chegada em Orlando' },
  { date: '20 de Outubro', title: 'Compras, passeio e jantar especial de boas-vindas' },
  { date: '21 de Outubro', title: 'Brunch exclusivo com a Aryanne + dia de compras e turismo' },
  { date: '22 de Outubro', title: 'Transfer para Tampa e abertura da conferência' },
  { date: '23 de Outubro', title: "Love Life Women's Conference" },
  { date: '24 de Outubro', title: "Love Life Women's Conference" },
  { date: '25 de Outubro', title: 'Retorno ao aeroporto' },
]

export default function Itinerary() {
  return (
    <section className="itinerary">
      <div className="itinerary__inner">
        <SectionTitle eyebrow="O que você vai viver" title="Roteiro da caravana" />
        <ol className="itinerary__timeline">
          {days.map((day) => (
            <li key={day.date} className="itinerary__day">
              <span className="itinerary__date">{day.date}</span>
              <span className="itinerary__title">{day.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
