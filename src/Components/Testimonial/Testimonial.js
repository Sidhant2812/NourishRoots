import React from "react";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
        <div className="one_testimonials_main_headaing">
            Testimonials
        </div>
       
      <div className="testimonials-wrapper"> {/* Add a container to wrap all testimonials */}
        <div className="snip1533">
          <figcaption>
            <blockquote>
              <p>As an NGO representative working with FoodBridge, I've witnessed firsthand the incredible impact this platform has on our community. FoodBridge seamlessly connects us with generous food donors, ensuring that surplus meals reach those in need efficiently. Platform's intuitive interface and dedicated support team make the donation process effortless. With FoodBridge, we can focus on our mission to alleviate hunger.</p>
            </blockquote>
            <h3>Asha Patel</h3>
            <h5>Annakshetra Foundation</h5>
          </figcaption>
        </div>
        <div className="snip1533">
          <figcaption>
            <blockquote>
              <p>"Collaborating with FoodBridge has revolutionized operations for our restaurant. It not only curbs food wastage by facilitating surplus food donations but also amplifies our community involvement. FoodBridge offers a user-friendly platform to schedule pickups, monitor donations, and avail tax benefits seamlessly. We find solace in knowing that our extra food finds its way to those in need.</p>
            </blockquote>
            <h3>Neha Sharma</h3>
            <h5>Restaurant Owner</h5>
          </figcaption>
        </div>
        <div className="snip1533">
          <figcaption>
            <blockquote>
              <p>"Being a delivery agent for FoodBridge has been a rewarding experience. I take pride in delivering meals from donors to NGOs, knowing that I'm part of a system that fights food insecurity. FoodBridge's advanced routing technology ensures that deliveries are optimized for efficiency, allowing me to cover more ground and deliver more meals in less time. It's fulfilling to be a part of FoodBridge</p>
            </blockquote>
            <h3>Rajesh Sharma</h3>
            <h5>delivery Agent</h5>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
