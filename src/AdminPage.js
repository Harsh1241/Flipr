import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    if (image) formData.append('image', image);
    
    try {
      const response = await axios.post('/api/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Failed to add project.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Project Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Project Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
