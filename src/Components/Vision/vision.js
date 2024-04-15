import React from "react";
import './Vision.css';

const Vision = () => {
  return (
    <div className="one_Vision_vision-container">
      <div className="one_Vision_vision-heading">Our Vision</div>
      <div className="one_Vision_row">
        <div className="one_Vision_col">
          <p className="one_Vision_vision-text">
            At NourishRoots, our overarching vision is deeply anchored in a profound dedication to fostering a world where every individual, regardless of their socio-economic status or geographic location, has equitable access to nutritious food. This guiding principle is epitomized by our pioneering Nutritional Analysis System.
            Integral to our mission is the recognition of the indispensable role of collaboration and partnership. Through strategic alliances with restaurants, businesses, and NGOs, we embark on a collective journey to mitigate food wastage and combat the pervasive issue of hunger that afflicts communities worldwide.

            Guided by the principles encapsulated within Sustainable Development Goal Target 2.2, we are unwavering in our commitment to addressing the multifaceted challenges of malnutrition and advancing initiatives that foster holistic community health and vitality.

            Our vision extends far beyond mere philanthropy; it is a resounding call to action, an impassioned plea to catalyze transformative change on a global scale. Together, we envisage a future where the specter of hunger is eradicated, and the seeds of nourishment and prosperity are sown in every corner of the world.

            We extend a heartfelt invitation to all individuals and organizations who share in our aspirations to join us on this noble quest. Together, let us work tirelessly towards realizing a brighter, more equitable future for generations to come.
          </p>
        </div>
        <div className="one_Vision_col">
          <div className="one_Vision_vision-image-container">
            <img src="https://helpfoundation.in/wp-content/uploads/2022/06/GIVING-FOOD-TO-HUNGRY-facebook.jpg" alt="People with Food Donations" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
