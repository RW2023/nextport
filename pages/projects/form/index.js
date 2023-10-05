'use client'
import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    stack: '',
    github: '',
    liveVersion: '',
    image: '',
    deleteId: '',
  });

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
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = formData.deleteId;
    if (!id) {
      console.error('ID is required to delete a project');
      return;
    }
    try {
      const response = await axios.delete(`/api/deleteProject?id=${id}`);
      console.log('Project deleted:', response.data);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="form"
      className="p-4 space-y-4"
      data-theme="business"
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
          <label className="block">
            <span className="text-md">Project ID to Delete:</span>
            <input
              type="text"
              name="deleteId"
              onChange={handleChange}
              placeholder="Enter project ID"
              aria-label="Project ID to Delete"
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
      <button
        type="button"
        onClick={handleDelete}
        aria-label="Delete Project"
        className="btn btn-secondary"
      >
        Delete Project
      </button>
    </form>
  );
};

export default ProjectForm;
