import React, { useEffect } from 'react';
import '../assets/styles/UpcomingEvents.css'; // Assuming you have a CSS file for styling
import video from '../assets/videos/final.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingEvents = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  const events = [
    {
      id: 1,
      title: "Cultural ",
      date: "June 20-21, 2023",
      description: "Join us for a spectacular cultural extravaganza with music, dance, and art from around the world.",
      price: "FREE",
      
    },
    {
      id: 2,
      title: "Father's Day Special",
      date: "June 18, 2023",
      description: "Celebrate Father's Day with fun activities, games, and special performances dedicated to all fathers.",
      price: "FREE",
      
    },
    {
      id: 3,
      title: "Summer Festival",
      date: "July 15-17, 2023",
      description: "Experience the best of summer with food, music, and outdoor activities for the whole family.",
      price: "FREE",
    }
  ];

  return (
    <section className="events-section" id="events">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
        
      <div className="events-container">
        <h2 className="section-title" data-aos="fade-down">Upcoming Events..</h2>
        <p className="section-subtitle" data-aos="fade-down" data-aos-delay="100">Don't miss out on these exciting events coming soon!</p>
        
        <div className="events-grid">
          {events.map((event, index) => (
            <div 
              key={event.id} 
              className="event-card"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="event-category">{event.category}</div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
                <div className="event-footer">
                  <span className="event-price">{event.price}</span>
                  <button className="register-btn">Register Soon</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;