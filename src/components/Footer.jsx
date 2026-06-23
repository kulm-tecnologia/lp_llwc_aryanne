import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Caravana com Aryanne Marques · Love Life Women's Conference</p>
      <p className="footer__year">&copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
