import React from 'react'
import OwlCarousel from 'react-owl-carousel'; // Owl Carousel React Wrapper
import 'owl.carousel/dist/assets/owl.carousel.css'; // Owl Carousel core styles
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Owl Carousel default theme styles

function OurProjects1() {
  return (
    <div>
        <section class="project-two d-none d-lg-block">
          <div class="project-two__bottom">
              <div class="container">

                <div class="row">
                  <div class="col-lg-8 m-auto text-center">
                    <div class="heading1">
                      <span class="span" data-aos="zoom-in-left" data-aos-duration="700">Our Project</span>
                      <h2 class="text-anime-style-3">Successes A Look at Our Projects</h2>
                      <div class="space16"></div>
                      <p data-aos="fade-up" data-aos-duration="800">Explore our portfolio of successful projects that showcase the impact we've made <br/> in connecting top talent with leading organizations. From small-scale placements</p>
                    </div>
                  </div>
                </div>

                <div class="space60"></div>

                <div className="project-two__carousel-container">
      <OwlCarousel
        className="project-two__carousel owl-theme"
        loop
        margin={20}
        nav
        items={3} // Number of items displayed at once
        autoplay={true}
        dots = {true}
        arrow = {false}
        autoplayTimeout={9000}
        autoplayHoverPause={true}
      >
        <div className="project-two__single-box">
          <div
            className="single-project-two__bg"
            style={{
              backgroundImage: `url('/assets/img/project/project1-img1.png')`
            }}
          />
          <div className='content-box'>
          <div className="content">
            <h4>Staffing Service</h4>
            <p>Demonstrating Our Expertise</p>
            </div>
            <div class="icon">
            <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                                              </div>
          </div>
          
          
        </div>
        <div className="project-two__single-box">
          <div
            className="single-project-two__bg"
            style={{
              backgroundImage: `url('/assets/img/project/project1-img2.png')`,
            }}
          />
          <div className='content-box'>
          <div className="content">
            <h4>Staffing Service</h4>
            <p>Demonstrating Our Expertise</p>
            </div>
            <div class="icon">
            <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                                              </div>
          </div>
        </div>
        <div className="project-two__single-box">
          <div
            className="single-project-two__bg"
            style={{
              backgroundImage: `url('/assets/img/project/project1-img3.png')`,
            }}
          />
          <div className='content-box'>
          <div className="content">
            <h4>Staffing Service</h4>
            <p>Demonstrating Our Expertise</p>
            </div>
            <div class="icon">
            <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                                              </div>
          </div>
        </div>
        <div className="project-two__single-box">
          <div
            className="single-project-two__bg"
            style={{
              backgroundImage: `url('/assets/img/project/project1-img1.png')`
            }}
          />
          <div className='content-box'>
          <div className="content">
            <h4>Staffing Service</h4>
            <p>Demonstrating Our Expertise</p>
            </div>
            <div class="icon">
            <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                                              </div>
          </div>
          
          
        </div>
        <div className="project-two__single-box">
          <div
            className="single-project-two__bg"
            style={{
              backgroundImage: `url('/assets/img/project/project1-img2.png')`,
            }}
          />
          <div className='content-box'>
          <div className="content">
            <h4>Staffing Service</h4>
            <p>Demonstrating Our Expertise</p>
            </div>
            <div class="icon">
            <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                                              </div>
          </div>
        </div>
        <div className="project-two__single-box">
          <div
            className="single-project-two__bg"
            style={{
              backgroundImage: `url('/assets/img/project/project1-img3.png')`,
            }}
          />
          <div className='content-box'>
          <div className="content">
            <h4>Staffing Service</h4>
            <p>Demonstrating Our Expertise</p>
            </div>
            <div class="icon">
            <a href=""><i class="fa-solid fa-arrow-right"></i></a>
                                              </div>
          </div>
        </div>
      </OwlCarousel>
    </div>

              </div>
          </div>
      </section>
    </div>
  )
}

export default OurProjects1
