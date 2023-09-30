// pages/ContactMe.js

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer'; // Import your existing Footer component
import React from 'react';

const ContactMe = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="card bg-gray-700 shadow-lg w-1/3">
          <div className="card-body">
            <h2 className="card-title text-white">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label text-white">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-white">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label text-white">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer /> {/* Use your existing Footer component */}
    </>
  );
};

export default ContactMe;
