import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true); // Default to Dark to match the new Home aesthetic

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="app-wrapper">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Home />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  )
}

export default App
