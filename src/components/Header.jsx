import CtaButton from './CtaButton'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__brand">Aryanne Marques</span>
        <CtaButton label="Reservar vaga" variant="secondary" className="header__cta" />
      </div>
    </header>
  )
}
