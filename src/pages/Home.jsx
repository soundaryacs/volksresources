import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';


import OurProjects1 from './Home/OurProjects1';
import Testimonial from './Home/Testimonial';
import Technology from './Technology';
import GetTouch from './Home/GetTouch';
import OurTeam from './OurTeam';
import OurBlog from './Home/OurBlog';
import Newsletter from './Home/Newsletter';
import Footer from './Footer';
import OurClients from './Home/OurClients';
import Header from './Header';
import HomeSlider from './Home/HomeSlider';
import WhyChooseus from './WhyChooseus';
import HomeOurservice from './Home/HomeOurservice';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  

  return (
    <div>
  
    <Header />
   
       <HomeSlider />   
         

     
      

     <OurClients />
<WhyChooseus />
        
<HomeOurservice />
        

      

      <OurProjects1 />
  

        <Technology />
       
       <Testimonial />
       <GetTouch />
       <OurTeam />
       <OurBlog />
       <Newsletter />
       <Footer />


    </div>
  );
};

export default Home;
