import logo from '../react-logo-sm.png';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img className='logo' src={logo} alt="React Logo" />
            <h3 className='site-title'>ReactFacts</h3>

            <h4 className='site-subtitle'>React Course - Project 1</h4>
        </nav>
    )
}
