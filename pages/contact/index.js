import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import React from 'react';
import Form from '@/components/Form/Form';

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 pt-40">
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
