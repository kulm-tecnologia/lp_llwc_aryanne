import CtaButton from './CtaButton'
import SectionTitle from './SectionTitle'
import { INVESTMENT_VALUE } from '../constants'
import './Investment.css'

export default function Investment() {
  return (
    <section className="investment">
      <div className="investment__inner">
        <SectionTitle eyebrow="Investimento" title="Caravana Joyce Meyer com Aryanne Marques" light />
        <p className="investment__value">{INVESTMENT_VALUE}</p>
        <p className="investment__detail">Pagamento à vista no valor integral.</p>
        <p className="investment__detail">
          Ou parcelamento em até 4 vezes através da maquininha, com incidência das taxas da
          operadora.
        </p>
        <CtaButton label="Quero garantir minha vaga" />
      </div>
    </section>
  )
}
