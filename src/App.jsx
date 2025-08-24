import { Routes, Route } from "react-router-dom";
// App.jsx
import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import UpcomingEvents from "./components/UpcomingEvents";
import Pillars from "./components/Pillars";
import GroupPhoto from "./components/GroupPhoto";
import Past from "./components/Past";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import OfficeBearers from "./pages/OfficeBearers";
import Loading from "./components/Loading";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Help from "./pages/Help";
import OnamEventForm from "./pages/OnamEventForm";

import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
    });

  // Simulated loading screen (replace with real data loading if needed)
  const timer = setTimeout(() => setIsLoading(false), 1000);
  return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
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
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/office-bearers" element={<OfficeBearers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />

        {/* If you don’t want /enthusia and /events, remove them */}
        <Route path="/enthusia" element={<OnamEventForm />} />
        <Route path="/events" element={<OnamEventForm />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
