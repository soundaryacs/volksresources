import React from 'react';
import Slider from 'react-slick';
import { Autoplay } from 'swiper/modules';

const logoImages = [
  'assets/img/logo/slider-logo1.png',
  'assets/img/logo/slider-logo2.png',
  'assets/img/logo/slider-logo3.png',
  'assets/img/logo/slider-logo4.png',
  'assets/img/logo/slider-logo5.png',
  'assets/img/logo/slider-logo6.png',
  'assets/img/logo/slider-logo7.png',
];

function OurClients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000, // Adjust speed here (milliseconds)
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000 // Adjust autoplay speed (milliseconds)
  };
  const images = [
    "assets/img/logo/clients/CONG.jpg",
    "assets/img/logo/clients/DISh-1.png",
    "assets/img/logo/clients/Front.png",
    "assets/img/logo/clients/kgp.jpg",
    "assets/img/logo/clients/logo-2.jpg",
    "assets/img/logo/clients/logo-4.jpg",
    "assets/img/logo/clients/logo-5.jpg",
    "assets/img/logo/clients/logo-6.jpg",
    "assets/img/logo/clients/logo-7.jpg",
    "assets/img/logo/clients/logo-8.jpg",
    "assets/img/logo/clients/logo-9.jpg",
    "assets/img/logo/clients/logo-10.jpg",
    "assets/img/logo/clients/logo-11.jpg",
    "assets/img/logo/clients/logo-12.jpg",
  ];
  return (
    <div>
     <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>

    </div>
  );
}

export default OurClients;