import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: 'Sample Title',
    description: 'Sample Description',
    stack: 'HTML, CSS, JavaScript',
    github: 'https://github.com/yourusername/project',
    liveVersion: 'https://yourwebsite.com/project',
    image: '/img/projects/myproject.png',
  });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/addProject', formData);
      console.log('Project added:', response.data);
      setAlert({ type: 'success', message: 'Project added successfully!' });
    } catch (error) {
      console.error('Error adding project:', error);
      setAlert({
        type: 'error',
        message: 'Failed to add project. Please try again.',
      });
    }
  };

  return (
    <div>
      {alert && (
        <div className={`alert alert-${alert.type}`}>{alert.message}</div>
      )}
      <form
        onSubmit={handleSubmit}
        role="form"
        className="p-4 space-y-4"
        data-theme="black"
      >
        <fieldset className="border p-4 rounded-md">
          <legend className="text-lg font-semibold">Project Information</legend>
          <div className="space-y-2">
            <label className="block">
              <span className="text-md">Title:</span>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="e.g., My Awesome Project"
                aria-label="Project Title"
                aria-required="true"
                className="input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="text-md">Description:</span>
              <textarea
                name="description"
                onChange={handleChange}
                placeholder="e.g., This project is about..."
                aria-label="Project Description"
                aria-required="true"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </label>
            <label className="block">
              <span className="text-md">Tech Stack:</span>
              <input
                type="text"
                name="stack"
                onChange={handleChange}
                placeholder="e.g., HTML, CSS, JavaScript"
                aria-label="Tech Stack"
                aria-required="true"
                className="input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="text-md">GitHub URL:</span>
              <input
                type="url"
                name="github"
                onChange={handleChange}
                placeholder="e.g., https://github.com/yourusername/project"
                aria-label="GitHub URL"
                aria-required="true"
                className="input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="text-md">Live Version URL:</span>
              <input
                type="url"
                name="liveVersion"
                onChange={handleChange}
                placeholder="e.g., https://yourwebsite.com/project"
                aria-label="Live Version URL"
                aria-required="true"
                className="input input-bordered w-full"
              />
            </label>
            <label className="block">
              <span className="text-md">Image URL:</span>
              <input
                type="text"
                name="image"
                onChange={handleChange}
                placeholder="e.g., /img/projects/myproject.png"
                aria-label="Image URL"
                aria-required="true"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </fieldset>
        <button
          type="submit"
          aria-label="Add Project"
          className="btn btn-primary"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
