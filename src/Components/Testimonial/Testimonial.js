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
              <p>"Having partnered with NourishRoots, I've been amazed by the positive change it brings to our community. NourishRoots facilitates seamless connections between food donors and those in need, ensuring that nutritious meals reach every corner efficiently. The platform's user-friendly interface and exceptional support team simplify the donation process, allowing us to focus on our mission of combating hunger effectively.
</p>
            </blockquote>
            <h3>Sanskriti Sharma</h3>
            <h5>Seva Foundation</h5>
          </figcaption>
        </div>
        <div className="snip1533">
          <figcaption>
            <blockquote>
              <p>"Working alongside NourishRoots has been a game-changer for our organization. The platform's efficiency in linking food surplus with those in need is commendable. With its user-friendly features and dedicated support, NourishRoots empowers us to make a meaningful impact on the lives of our community members.</p>
            </blockquote>
            <h3>Rahul Patel</h3>
            <h5>Restaurant Owner</h5>
          </figcaption>
        </div>
        <div className="snip1533">
          <figcaption>
            <blockquote>
              <p>"Thanks to NourishRoots, I've been able to put nutritious meals on my family's table during challenging times. As a single parent struggling to make ends meet, having access to food donations through NourishRoots has been a blessing. The support I've received has not only relieved the burden of food insecurity but has also restored my hope for a better future. NourishRoots is more than just a platform.</p>
            </blockquote>
            <h3>Rajesh Kumar</h3>
            <h5>Beneficiary</h5>
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
