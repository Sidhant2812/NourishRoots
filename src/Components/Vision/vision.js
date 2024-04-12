import React from "react";
import './Vision.css';

const Vision = () => {
  return (
    <div className="one_Vision_vision-container">
      <div className="one_Vision_vision-heading">Our Vision</div>
      <div className="one_Vision_row">
        <div className="one_Vision_col">
          <p className="one_Vision_vision-text">
            At Foodbridge, we envision a world where no one goes hungry, where every individual has access to nutritious food, and where communities thrive through collective efforts to combat hunger and food insecurity.
            FoodBridge is a platform that connects restaurants, businesses, individuals, and guest houses with NGOs and charitable organizations to facilitate food donations and support those in need. We believe that by leveraging technology and fostering partnerships, we can make a meaningful impact in the fight against hunger.
            We are committed to empowering restaurants and businesses to donate surplus food, reducing food waste, and redistributing resources to where they are most needed. By providing a seamless and efficient platform for food donations, we aim to streamline the process and maximize the impact of each contribution.
            z
            Furthermore, we seek to raise awareness about the issue of hunger and inspire others to join us in our mission. Through education, advocacy, and community engagement, we aim to build a network of compassionate individuals and organizations dedicated to eradicating hunger and building a more equitable society. Together, we can make a difference and create a future where hunger is no longer a barrier to a healthy and thriving life.
          </p>
        </div>
        <div className="one_Vision_col">
          <div className="one_Vision_vision-image-container">
            <img src="https://img.freepik.com/free-photo/medium-shot-smiley-people-with-food-donations_23-2149142843.jpg?t=st=1712854290~exp=1712857890~hmac=3d23293b04a14fb0ca1634885cf8937e76cc33c537d338019c77d4fe9936175e&w=826" alt="People with Food Donations" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
