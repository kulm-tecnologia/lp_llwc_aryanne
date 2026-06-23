import { WHATSAPP_LINK } from '../constants'
import './CtaButton.css'

export default function CtaButton({ label = 'Reservar minha vaga', variant = 'primary', className = '' }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button cta-button--${variant} ${className}`}
    >
      {label}
    </a>
  )
}
