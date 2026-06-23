import './VideoSection.css'

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-section__inner">
        <video
          className="video-section__player"
          src="/media/caravana-aryanne.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  )
}
