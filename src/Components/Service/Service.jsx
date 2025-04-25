import React from 'react';
import serviceCSS from './../Service/Service.module.css';

import Tilt from 'react-parallax-tilt';


const defaultoptions = {
  max: 10,
  speed: 0.05,
  scale: 1.0,
  glare: true,
};

function Service() {
  return (
    <div className={`${serviceCSS.ServiceWrapper} section` } id="service">
      <h2>What I Do</h2>
      <p className={serviceCSS.pera}>Hai ,This is Mukesh </p>
      <div className={serviceCSS.ServiceCards}>
        <div>
          <Tilt options={defaultoptions}>
            <div className={serviceCSS.ServiceCard}>
              <i className="ri-database-line"></i>
              <h3>Web development</h3>
              <p>I have strong proficiency in HTML, CSS, JavaScript, PHP, and SQL, focusing on building responsive and user-friendly web interfaces.</p>
              <h4>Learn More <i className="ri-arrow-right-line"></i></h4>
            </div>
          </Tilt>
        </div>

        <div>
          <Tilt options={defaultoptions}>
            <div className={serviceCSS.ServiceCard}>
              <i className="ri-tools-line"></i>
              <h3>Product Testing</h3>
              <p>I perform manual testing of BucksBox features, helping identify bugs and ensure smooth functionality before each product release.</p>
              <h4>Learn More <i className="ri-arrow-right-line"></i></h4>
            </div>
          </Tilt>
        </div>

        <div>
          <Tilt options={defaultoptions}>
            <div className={serviceCSS.ServiceCard}>
              <i className="ri-customer-service-2-line"></i>
              <h3>Customer Service</h3>
              <p>I respond to customer queries at BucksBox, analyze feedback, and provide effective solutions to enhance user satisfaction.</p>
              <h4>Learn More <i className="ri-arrow-right-line"></i></h4>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Service;
