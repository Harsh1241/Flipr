// src/components/ClientsList.js
import React from 'react';
import ClientCard from './ClientCard';

function ClientsList({ clients }) {
  return (
    <div className="clients-list">
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
}

export default ClientsList;
