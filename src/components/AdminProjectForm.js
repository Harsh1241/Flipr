import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminProjectForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects(); 
  }, []);

  const fetchProjects = async () => {
    const response = await axios.get('http://localhost:5000/api/projects');
    setProjects(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = { name, description, image };
    await axios.post('http://localhost:5000/api/projects', projectData);
    fetchProjects();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <button type="submit">Add Project</button>
      </form>
      <h2>Projects List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProjectForm;
