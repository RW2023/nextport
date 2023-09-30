import React from 'react'

function NextLogo() {
return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <linearGradient
      id="gradient1"
      x1="32"
      x2="32"
      y1="54"
      y2="10"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#e6abff"></stop>
      <stop offset="1" stopColor="#6dc7ff"></stop>
    </linearGradient>
    <path
      fill="url(#gradient1)"
      d="M54,32c0,5.75-2.2,10.98-5.8,14.9l-0.171,0.187L43,40.646V21h-7v10.686L27.663,21H21v22h7 V32.59l14.66,18.66C39.51,53,35.87,54,32,54c-12.15,0-22-9.85-22-22s9.85-22,22-22S54,19.85,54,32z"
    ></path>
    <linearGradient
      id="gradient2"
      x1="32"
      x2="32"
      y1="58"
      y2="6"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#c822ff"></stop>
      <stop offset="1" stopColor="#1a6dff"></stop>
    </linearGradient>
    <path
      fill="url(#gradient2)"
      d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z M41,41.336V23h-3v14.496L26.683,23H23v18h3V26.81 L44.37,50.2c0.771-0.523,1.509-1.097,2.212-1.714L41,41.336z"
    ></path>
  </svg>
);
};


export default NextLogo