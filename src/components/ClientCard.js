// src/components/ClientCard.js
import React from 'react';
// import './ClientCard.css'; // Assuming you create this file for styling

function ClientCard({ client }) {
  return (
    <div className="client-card">
      <div className="client-image">
        <img src={client.image} alt={client.name} />
      </div>
      <p className="client-description">{client.description}</p>
      <h3 className="client-name">{client.name}</h3>
      <p className="client-designation">{client.designation}</p>
    </div>
  );
}

export default ClientCard;
