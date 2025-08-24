import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMusic, FaCalendarAlt, FaMapMarkerAlt, FaEnvelope as FaMail, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/NotFoundPage.css'; // We'll create this CSS file

const NotFoundPage = () => {
  const navigate = useNavigate();
  // Event details
  const eventDetails = {
    title: "Onam 2025 Celebration",
    venue: "Swami Vivekananda Seminar Hall(MECH)",
    description: "Get ready for our biggest event of the year with amazing performances, food, and fun!"
  };

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Email state
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Countdown timer
  useEffect(() => {
    // Use an ISO date string for reliable parsing across browsers
    const eventDate = new Date('2025-08-22T09:00:00').getTime();

    const updateTimer = () => {
      const now = Date.now();
      const distance = eventDate - now;

      if (distance <= 0) {
  // Event passed — ensure UI shows zeros
  setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  navigate('/events');
  return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Run immediately so UI doesn't wait 1s for the first update
    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  // Handle email submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you! We'll notify you at ${email} when more details are available.`);
      setEmail('');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="coming-soon-container">
      {/* Decorative elements */}
      <div className="floating-notes">
        <span className="note note-1">♪</span>
        <span className="note note-2">♫</span>
        <span className="note note-3">♬</span>
        <span className="note note-4">♩</span>
        
      </div>
      
      <div className="content-wrapper">
        {/* 404 Section */}
        <div className="not-found-section" data-aos="fade-down">
          <h1 className="error-code">404</h1>
          <p className="not-found-text">Oops! Page not found</p>
          <p>But we have something exciting coming soon!</p>
        </div>
        
        {/* Coming soon text */}
        <div className="coming-soon-section" data-aos="fade-up">
          <h2 className="coming-soon-title">Our Next Event is</h2>
          <div className="animated-text">
            {['C', 'O', 'M', 'I', 'N', 'G', ' ', 'S', 'O', 'O', 'N', '!'].map((letter, index) => (
              <span 
                key={index} 
                className="letter" 
                data-aos="zoom-in" 
                data-aos-delay={(index + 1) * 100}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
        </div>
        
        {/* Countdown timer */}
        <div className="countdown-container" data-aos="fade-up" data-aos-delay="1300">
          <h3 className="countdown-title">Event starts in:</h3>
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>
        </div>
        
        {/* Event details */}
        <div className="event-details" data-aos="fade-up" data-aos-delay="1500">
          <div className="event-card">
            <div className="event-icon">
              <FaMusic />
            </div>
            <h3 className="event-title">{eventDetails.title}</h3>
            <p className="event-description">{eventDetails.description}</p>
            
            <div className="event-info">
              
              
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <div className="info-label">Venue</div>
                  <div className="info-value">{eventDetails.venue}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Notification section */}
        
        
        {/* Social links */}
        <div className="social-links" data-aos="fade-up" data-aos-delay="1900">
          <a href="https://www.facebook.com/kec.cultural.and.music.club" className="social-link"><FaFacebook /></a>
          <a href="https://www.instagram.com/kec_cultural_and_music_clubs?igsh=MXhtd3JqZTQzZ2c1MQ==" className="social-link"><FaInstagram /></a>
          <a href="mailto:kecculturalclub@kongu.edu" className="social-link"><FaMail /></a>
        </div>
      </div>
      
      {/* Footer */}
      
    </div>
  );
};

export default NotFoundPage;