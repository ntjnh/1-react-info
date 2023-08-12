import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export default function App() {
    const [isDark, setIsDark] = useState(false)

    const handleToggle = () => setIsDark(prev => !prev)

    return (
        <div className='container'>
            <Navbar toggleDarkMode={handleToggle} darkMode={isDark} />
            <Main toggleDarkMode={handleToggle} darkMode={isDark} />
        </div>
    )
}
