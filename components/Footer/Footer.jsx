import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer data-theme="dark" className="footer footer-center p-10 bg-slate-800 text-primary-content">
  <aside>
    
    
    <p className="font-bold text-2xl">
     Ryan Wilson <br/>Full Stack Developer<i className="fa-solid fa-layer-group ml-4 text-3xl"></i>
    </p> 
     <p className='font-bold '>Technologies</p>
    <div className='flex-row justify-between space-x-4'>
 <div className='flex justify-between space-x-4'>
 
  <div className="flex flex-col items-center">
    <i className="fab fa-js-square text-3xl text-yellow-400"></i>
    <p>JavaScript</p>
  </div>
  <div className="flex flex-col items-center">
    <i className="fab fa-html5 text-3xl text-orange-500"></i>
    <p>HTML5</p>
  </div>
  <div className="flex flex-col items-center">
    <i className="fab fa-css3 text-3xl text-blue-500"></i>
    <p>CSS3</p>
  </div>
  {/* <div className="flex flex-col items-center">
    <i className="fab fa-mongodb text-3xl text-green-500"></i>
    <p>MongoDB</p>
  </div> */}
  <div className="flex flex-col items-center">
    <i className="fab fa-react text-3xl text-blue-300"></i>
    <p>React</p>
  </div>
  <div className="flex flex-col items-center">
    <i className="fab fa-node-js text-3xl text-green-600"></i>
    <p>Node.js</p>
  </div>
</div>



</div>
<div className='flex-row justify-between space-x-4'>
  <i className="fab fa-github text-3xl text-gray-900"></i>
  <i className="fab fa-linkedin text-3xl text-blue-600"></i>
  <i className="fab fa-discord text-3xl text-purple-600"></i>
</div>





    <p>Copyright © 2023 - All rights reserved</p>
    <a href="https://www.freepik.com/free-photo/turned-gray-laptop-computer_12661377.htm#query=coding&position=5&from_view=search&track=sph">Image by lucabravo</a> on Freepik
  
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
     
    </div>
  </nav>
</footer>
    </div>
  )
}

export default Footer
