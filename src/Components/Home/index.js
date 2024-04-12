import ImgDisplay from "../Imgdisplay/img";
import Navbar from "../Navbar/Navbar"
import Vision from "../Vision/vision";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonial/Testimonial";

const Home = () => {
    return (
      <div>
        <Navbar/>
        <ImgDisplay/>
        <Vision/>
        <Testimonials/>
        <Footer/> 
      </div>
    );
  };
  
  export default Home;