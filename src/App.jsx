// App.jsx
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import UpcomingEvents from './components/UpcomingEvents'
import Pillars from './components/Pillars'
import GroupPhoto from './components/GroupPhoto'
import Past from './components/Past'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import OfficeBearers from './pages/OfficeBearers'
import Loading from './components/Loading'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage';
import Help from './pages/Help';



import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
    
    // Simulate loading time (you can replace this with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <About />
              <UpcomingEvents />
              <Pillars />
              <GroupPhoto />
              <Past />
              <Footer />
              
            </>
          } 
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/office-bearers" element={<OfficeBearers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enthusia" element={<NotFoundPage />} />
        <Route path="/events" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />

      </Routes>
    </Router>
  )
}

export default App