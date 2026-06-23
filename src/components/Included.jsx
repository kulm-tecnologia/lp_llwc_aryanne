import SectionTitle from './SectionTitle'
import './Included.css'

const items = ['Acompanhamento da Aryanne Marques', '6 noites de hospedagem', 'Café da manhã diário', 'Recepção no aeroporto', 'Todos os transportes do roteiro em veículos executivos', 'Seguro viagem', 'Jantar de boas-vindas', 'Suporte em português']

export default function Included() {
  return (
    <section className="included">
      <div className="included__inner">
        <SectionTitle title="O que está incluso" />
        <ul className="included__list">
          {items.map((item) => (
            <li key={item} className="included__item">
              <svg
                className="included__check"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="12" r="12" fill="currentColor" />
                <path
                  d="M7 12.5l3.2 3.2L17 9"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
