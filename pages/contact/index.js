'use client'
import React from 'react';
import Form from '@/components/Form/Form';

const ContactMe = () => {
  return (
    <div className="container mx-auto p-4 pt-40 bg-background grid gap-2 lg:grid-cols-2">
      <div>
        <h2 className="text-center bg-secondary text-stroke text-3xl">
          Let's Connect
        </h2>
        <p className="text-center text-lg px-4">
          Whether you're interested in working together, or just want to drop a
          line—I'd love to hear from you! I'm always open to discussing product
          design, collaboration, or even just friendly chatter about the
          industry. Don't hesitate to reach out and share your thoughts or
          projects. Looking forward to connecting!
        </p>
      </div>
      <Form />
    </div>
  );
};

export default ContactMe;
