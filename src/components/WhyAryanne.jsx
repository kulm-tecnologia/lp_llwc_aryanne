import SectionTitle from './SectionTitle'
import './WhyAryanne.css'

export default function WhyAryanne() {
  return (
    <section className="why-aryanne">
      <div className="why-aryanne__inner">
        <SectionTitle eyebrow="Por que ir com a" title="Aryanne?" />
        <p className="why-aryanne__text">Porque você não estará viajando sozinha.</p>
        <p className="why-aryanne__text">
          Você fará parte de uma caravana preparada especialmente para mulheres cristãs que
          desejam viver essa experiência com segurança, acolhimento e propósito.
        </p>
        <p className="why-aryanne__text">
          Além da conferência, você viverá momentos exclusivos de conexão e comunhão ao lado da
          Aryanne.
        </p>
      </div>
    </section>
  )
}
