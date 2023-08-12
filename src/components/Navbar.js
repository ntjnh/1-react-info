import logo from '../react-logo-sm.png';

export default function Navbar(props) {
    return (
        <nav className={props.darkMode ? 'dark' : ''}>
            <img className='logo' src={logo} alt='React Logo' />
            <h3 className='site-title'>ReactFacts</h3>

            <div className='toggler'>
                <p className='toggler--light'>Light</p>

                <div className='toggler__slider' onClick={props.toggleDarkMode}>
                    <div className='toggler__slider--circle'></div>
                </div>

                <p className='toggler--dark'>Dark</p>
            </div>
        </nav>
    )
}
