import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Contact.css'; // Assuming you have a CSS file for styling

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const staffContacts = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Faculty Advisor",
      phone: "+91 9876543210",
      email: "rajesh@college.edu"
    },
    {
      name: "Prof. Sunita Sharma",
      position: "Event Coordinator",
      phone: "+91 9765432109",
      email: "sunita@college.edu"
    },
    {
      name: "Dr. Amit Patel",
      position: "Technical Head",
      phone: "+91 9654321098",
      email: "amit@college.edu"
    },
    {
      name: "Ms. Priya Singh",
      position: "Cultural Coordinator",
      phone: "+91 9543210987",
      email: "priya@college.edu"
    }
  ];

  const studentContacts = [
    {
      name: "Rahul Verma",
      position: "President",
      phone: "+91 9432109876",
    },
    {
      name: "Neha Gupta",
      position: "Vice President",
      phone: "+91 9321098765",
    },
    {
      name: "Arjun Mehta",
      position: "Technical Lead",
      phone: "+91 9210987654",
    },
    {
      name: "Sneha Reddy",
      position: "Marketing Head",
      phone: "+91 9109876543",
    },
    {
      name: "Vikram Singh",
      position: "Logistics Head",
      phone: "+91 9012345678",
    }
  ];

  return (
    <div className="contact-container">
      <header className="contact-header" data-aos="fade-down">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">Get in touch with our dedicated team of staff and student coordinators for any queries about Enthusia</p>
      </header>

      <section className="contact-section staff-section" data-aos="fade-up">
        <h2 className="section-title">Staff Coordinators</h2>
        <div className="contact-grid staff-grid">
          {staffContacts.map((contact, index) => (
            <div key={index} className="contact-card staff-card" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
              <h3 className="card-name">{contact.name}</h3>
              <p className="card-position">{contact.position}</p>
              <div className="card-contact">
                <div className="contact-info" onClick={() => handlePhoneClick(contact.phone)}>
                  <div className="icon-wrapper phone-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <span>{contact.phone}</span>
                </div>
                <div className="contact-info" onClick={() => handleEmailClick(contact.email)}>
                  <div className="icon-wrapper email-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <span>{contact.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section student-section" data-aos="fade-up">
        <h2 className="section-title">Student Coordinators</h2>
        <div className="contact-grid student-grid">
          {studentContacts.map((contact, index) => (
            <div key={index} className="contact-card student-card" data-aos="zoom-in" data-aos-delay={(index + 1) * 100}>
              <h3 className="card-name">{contact.name}</h3>
              <p className="card-position">{contact.position}</p>
              <div className="card-contact">
                <div className="contact-info" onClick={() => handlePhoneClick(contact.phone)}>
                  <div className="icon-wrapper phone-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <span>{contact.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;