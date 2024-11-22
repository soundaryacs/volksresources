import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import Home from './pages/Home';
import About from './pages/About';
import OurProjects from './pages/Home/OurProjects';
import OurProjects1 from './pages/Home/OurProjects1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Testimonial from './pages/Home/Testimonial';
import Technology from './pages/Technology';
import GetTouch from './pages/Home/GetTouch';
import OurTeam from './pages/OurTeam';
import OurBlog from './pages/Home/OurBlog';
import Newsletter from './pages/Home/Newsletter';
import Footer from './pages/Footer';
import OurClients from './pages/Home/OurClients';
import Header from './pages/Header'
import HomeSlider from './pages/Home/HomeSlider';
import WhyChooseus from './pages/WhyChooseus';
import HomeOurservice from './pages/Home/HomeOurservice';



function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/ourprojects' element={<OurProjects />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/getintouch' element={<GetTouch />} />
          <Route path='/ourteam' element={<OurTeam />} />
          <Route path='/ourblog' element={<OurBlog/>} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/footer" element={<Footer />} />
          <Route path='/ourclients' element={<OurClients />} />
          <Route path='/header' element={<Header />} />
          <Route path='/homeslider' element={<HomeSlider />}/>
          <Route path='/whychooseus' element={<WhyChooseus />}/>
          <Route path='/homeourservices' element={<HomeOurservice/>}/>
          <Route path='/ourprojects1' element={<OurProjects1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
