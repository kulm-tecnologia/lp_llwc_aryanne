import './SectionTitle.css'

export default function SectionTitle({ eyebrow, title, light = false, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}>
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__title">{title}</h2>
    </div>
  )
}
