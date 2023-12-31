import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      console.log('Form submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div
      className="flex flex-wrap justify-center items-center min-h-screen dark:bg-gray-900 border-stroke"
      data-theme="dark"
    >
      <div
        className="card w-full max-w-md shadow-2xl rounded-lg overflow-hidden mx-2 border-stroke"
        data-theme="black"
      >
        <div className="card-body bg- text-headline text-center border-stroke">
          <h2 className="card-title text-3xl font-semibold mb-4">Contact Me</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-4">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-headline">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-headline">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-headline">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea textarea-bordered w-full h-24"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-accent w-full bg-button text-stroke hover:bg-primary hover:border-stroke hover:text-headline"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
