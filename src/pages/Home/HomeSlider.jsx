import React from 'react'

function HomeSlider() {
  return (
    <div>
      <div className="hero-area1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="main-heading">
                <span className="span" data-aos="fade-right" data-aos-duration="800">Staffing Power Your Success</span>
                <h1 className="text-anime-style-3">Growth Exceptional Talent Let's Build Success Together</h1>
                <div className="space16"></div>
                <p data-aos="fade-right" data-aos-duration="1000">Our tailored staffing solutions streamline the hiring process, <br /> saving you time and resources while ensuring the perfect fit.</p>
                <div className="space30"></div>
                <div className="hero1-buttons" data-aos="fade-right" data-aos-duration="1200">
                  <a className="theme-btn1" href="">Start Your Search <span><i className="fa-solid fa-arrow-right"></i></span></a>
                  <a className="theme-btn2" href="">Discover More <span><i className="fa-solid fa-arrow-right"></i></span></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero1-images">
                <div className="image1">
                  <img src="assets/img/bg/hero1-main-bg.png" alt="Background" />
                </div>
                <div className="image2 overlay-anim" data-aos="zoom-in-up" data-aos-duration="700">
                  <img src="assets/img/hero/hero1-main-img.png" alt="Main Image" />
                </div>
                <div className="image3 shape-animaiton2" data-aos="zoom-in-up" data-aos-duration="700">
                  <img src="assets/img/shapes/review-img.png" alt="Shape 1" />
                </div>
                <div className="image4 shape-animaiton3">
                  <img src="assets/img/shapes/hero1-shape.png" alt="Shape 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
