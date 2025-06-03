import React from 'react';
import './Resume.css';
 

const Resume: React.FC = () => {
  return (
    <div className="resume-container">

      <img src="/panepucciSR.jpg" alt="Panepucci Service and Repair Logo" className='Pooch'/>
      <h2>Panepucci Service and Repairs</h2>
      <p>"Greatest fucking thing in the world"</p>

      <img src="/TigerPack.png" alt="Tiger Pack, Inc. Logo" className='Tiger'/>
      <h2>Tiger Pack, Inc.</h2>
      <p>"Our last website was dog shit"</p>

      <h2></h2>


    </div>
  );
};

export default Resume;
