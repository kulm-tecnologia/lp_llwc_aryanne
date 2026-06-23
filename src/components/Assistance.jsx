import SectionTitle from './SectionTitle'
import './Assistance.css'

const items = ['Orientação para compra das passagens aéreas', 'Emissão de passagens mediante solicitação', 'Suporte na escolha dos melhores voos','Assessoria especializada para passaporte e visto americano', 'Atendimento personalizado antes e durante a viagem']

export default function Assistance() {
  return (
    <section className="assistance">
      <div className="assistance__inner">
        <SectionTitle title="Assistência Completa" />
        <p className="assistance__note">
          Nosso compromisso é acompanhar você em cada etapa da sua jornada.
        </p>
        <ul className="assistance__list">
          {items.map((item) => (
            <li key={item} className="assistance__item">
              <svg
                className="assistance__check"
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
