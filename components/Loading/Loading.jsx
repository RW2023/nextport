import React from 'react';

const Loading = ({ text }) => (
  <>
    <p className="text-headline">Loading {text}...🚀</p>
    <span className="loading loading-bars loading-lg"></span>
  </>
);

export default Loading;
