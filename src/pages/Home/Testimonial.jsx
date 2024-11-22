import React, { useState } from 'react';

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Amir Jamil',
      role: 'Vp, Daily Naws',
      text: '“But don\'t just take our word for it—hear what our satisfied clients have to say. From Fortune 500 companies to small.”',
      imgSrc: 'assets/img/testimonial/tes1-img1.png',
    },
    {
      name: 'Usman Khan',
      role: 'Co Founder',
      text: '“Our dedication to excellence, and commitment to building long-lasting partnerships have.”',
      imgSrc: 'assets/img/testimonial/tes1-img2.png',
    },
    // Add more testimonial data as needed
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="tes1 sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="heading1">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="800">
                  Testimonial
                </span>
                <h2 className="text-anime-style-3">Real Stories, Real Results</h2>
                <div className="space16"></div>
                <p data-aos="fade-left" data-aos-duration="800">
                  Discover why businesses trust us to find the right talent and candidates trust us to find the perfect fit.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tes7-buttons" data-aos="fade-right" data-aos-duration="900">
                <button className="testimonial-prev-arrow1" onClick={handlePrev}>
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button className="testimonial-next-arrow1" onClick={handleNext}>
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
              <div className="tes1-slider">
              <div className="single-slider">
                <div className="row">
                  <div className="col-md-8">
                    <ul className="stars">
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                      <li><i className="fa-solid fa-star"></i></li>
                    </ul>
                    <div className="pera">
                      <p>{testimonials[currentSlide].text}</p>
                    </div>
                    <div className="bottom-heading">
                      <h4><a href="#">{testimonials[currentSlide].name}</a></h4>
                      <p>{testimonials[currentSlide].role}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="tes1-image">
                      <img src={testimonials[currentSlide].imgSrc} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
