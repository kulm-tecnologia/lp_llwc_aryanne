import SectionTitle from './SectionTitle'
import './IntroQuestion.css'

export default function IntroQuestion() {
  return (
    <section className="intro-question">
      <div className="intro-question__inner">
        <SectionTitle title="Você sente que precisa de um tempo para Deus?" />
        <p className="intro-question__text">
          Um tempo para fortalecer sua fé, ouvir a voz do Senhor com mais clareza, renovar suas
          forças e estar cercada de mulheres que compartilham os mesmos valores e propósito?
        </p>
        <p className="intro-question__highlight">
          Talvez esta não seja apenas mais uma viagem.
          <br />
          Talvez seja um chamado.
        </p>
      </div>
    </section>
  )
}
