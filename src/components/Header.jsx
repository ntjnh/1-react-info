import logo from '../react-logo.png'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img className="logo" src={logo} alt="React logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
