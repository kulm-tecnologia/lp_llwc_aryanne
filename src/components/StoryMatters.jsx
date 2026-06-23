import SectionTitle from './SectionTitle'
import './StoryMatters.css'

export default function StoryMatters() {
  return (
    <section className="story-matters">
      <div className="story-matters__inner">
        <SectionTitle light title="Sua história importa" />
        <p className="story-matters__text">
          Cada capítulo da sua vida tem propósito. Cada desafio enfrentado. Cada vitória
          conquistada. Cada recomeço.
        </p>
        <p className="story-matters__text">
          Deus está escrevendo algo muito maior do que você consegue enxergar hoje.
        </p>
        <p className="story-matters__text">
          Na Love Life Women's Conference, mulheres do mundo inteiro se reúnem para descobrir
          como continuar avançando apesar dos desafios e viver plenamente o propósito para o qual
          foram criadas.
        </p>
      </div>
    </section>
  )
}
