// src/LandingPage.js
import React, { useState, useEffect } from 'react';
import ProjectsList from './ProjectList';
import ClientList from './ClientList';
import ContactForm from './ContactForm';
import Newsletter from './Newsletter';
// import './LandingPage.css';

function LandingPage() {
 
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
 
  useEffect(() => {
    // Mock data for projects (already existing)
    const mockProjects = [
      { id: 1, image: 'https://via.placeholder.com/250', name: 'Consultation', description: 'Project details...' },
      { id: 2, image: 'https://via.placeholder.com/250', name: 'Design', description: 'Project details...' },
      { id: 3, image: 'https://via.placeholder.com/250', name: 'Marketing', description: 'Project details...' },
    ];
    setProjects(mockProjects);

    // Mock data for clients
    const mockClients = [
      { id: 1, image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet...', name: 'Rowhan Smith', designation: 'CEO, Foreclosure' },
      { id: 2, image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet...', name: 'Shipra Kayak', designation: 'Brand Designer' },
      { id: 3, image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet...', name: 'John Lepore', designation: 'CEO, Foreclosure' },
      { id: 4, image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet...', name: 'Marry Freeman', designation: 'Marketing Manager at Mixit' },
      { id: 5, image: 'https://via.placeholder.com/100', description: 'Lorem ipsum dolor sit amet...', name: 'Lucy', designation: 'Sales Rep at Alibaba' },
    ];
    setClients(mockClients);
  }, []);

  return (
    <div className="landing-page">
      <h1>Welcome to Flipr</h1>
      <section id="our-projects">
        <h2>Our Projects</h2>
        {projects.length > 0 ? <ProjectsList projects={projects} /> : <p>Loading projects...</p>}
      </section>
      <section id="happy-clients">
        <h2>Happy Clients</h2>
        {clients.length > 0 ? <ClientList clients={clients} /> : <p>Loading clients...</p>}
      </section>
      <section id="contact-form-section">
        <ContactForm />
      </section>
      <section id="newsletter-section">
        <Newsletter />
      </section>
    </div>
  );
}

export default LandingPage;
