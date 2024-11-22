import React from 'react'

function Header() {
  return (
    <div>
      <header>
     <div class="header-area header-area1 header-area-all d-none d-lg-block" id="header">
       <div class="container">
         <div class="row">
           <div class="col-12">
             <div class="header-elements">
               <div class="site-logo">
                 <a href="">
                  <img src="assets/img/logo/Volks-Resources-logo.png" alt=""/>
                 </a>
               </div>


               <div class="main-menu-ex main-menu-ex1">
                 <ul>
                  <li><a href="#">Home</a>
                   
                  </li>

                   <li><a href="">About Us</a></li>

                   

                   <li class="dropdown-menu-parrent"><a href="#" class="main1">Our Services <i class="fa-solid fa-angle-down"></i></a>
                     <div class="mega-menu-all">
                      <div class="row">
                        <div class="col-md-3">
                          <div class="mega-menu-single dis1">
                            
                            <ul>
                            <li><a href="#">Wireless</a></li>
                              <li><a href="#">Wireline</a></li>
                              <li><a href="#">ISP</a></li>
                              <li><a href="#">Construction</a></li>
                            </ul>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mega-menu-single">
                            
                            <ul>
                              <li><a href="">Network Deployment</a></li>
                              <li><a href="">Regulatory Compliance - RF Exposure Analysis (EMP/MPE)</a></li>
                              
                            </ul>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mega-menu-single">
                            
                            <ul>
                            <li><a href="">Data Center Installation</a></li>
                            <li><a href="">Staffing</a></li>

                            </ul>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mega-menu-single">
                            
                            <ul>
                              <li><a href=""><u>Our Projects</u></a></li>
                              <li><a href="">OSP Projects</a></li>
                              <li><a href="">EF & I Projects</a></li>
                            </ul>
                          </div>
                        </div>

                      </div>
                     </div>
                   </li>

                   <li class="dropdown-menu-parrent"><a href="#" class="main1">Why Volks?</a>
                    
                  </li>

                  <li class="dropdown-menu-parrent"><a class="main1" href="#">Contact us</a>
                    
                  </li>
 
                     
                 </ul>
               </div>



               <div class="header2-buttons">
                    <div class="button">
                      <a class="theme-btn1" href="">Search Jobs <span><i class="fa-solid fa-arrow-right"></i></span></a>
                    </div>
               </div>

             </div>
           </div>
         </div>
       </div>
     </div>
   </header>

   <div class="mobile-header mobile-header-main d-block d-lg-none ">
            <div class="container-fluid">
              <div class="col-12">
                <div class="mobile-header-elements">
                  <div class="mobile-logo">
                    <a href=""><img src="assets/img/logo/Volks-Resources-logo.png" alt=""  style={{width:'150px',}}/></a>
                  </div>
                  <div class="mobile-nav-icon">
                    <i class="fa-duotone fa-bars-staggered"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mobile-sidebar d-block d-lg-none">
            <div class="logo-m">
              <a href=""><img src="assets/img/logo/Volks-Resources-logo.png" alt=""/></a>
            </div>
            <div class="menu-close">
              <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="mobile-nav">
        
              <ul>
                <li ><a href="#">Home </a> </li>
                <li ><a href="#">About Us </a> </li>
              <li><a href="">About Us</a></li>
              <li class="has-dropdown"><a href="#">Service</a> 
                <ul class="sub-menu">
                    <li><a href="">Service List</a></li>
                    
                </ul>
            </li>
    
            <li ><a href="#">Why Volks?</a> </li>
      
                <li ><a href="#">Contact Us</a> </li>
    
              
      
              </ul>
              
              <div class="mobile-button">
                <a class="theme-btn1" href="">Search Jobs <span><i class="fa-solid fa-arrow-right"></i></span></a>
              </div>
    
              <div class="single-footer-items">
                <h3>Contact Us</h3>

                <div class="contact-box">
                  <div class="icon">
                    <img src="assets/img/icons/footer-icon1.png" alt=""/>
                  </div>
                  <div class="pera">
                    <a href="tel:+1 972 636 1880">+1 972 636 1880</a>
                  </div>
                </div>

                <div class="contact-box">
                  <div class="icon">
                    <img src="assets/img/icons/footer-icon2.png" alt=""/>
                  </div>
                  <div class="pera">
                    <a href="mailto:info@volksresources.com">info@volksresources.com</a>
                  </div>
                </div>

                <div class="contact-box">
                  <div class="icon">
                    <img src="assets/img/icons/footer-icon3.png" alt=""/>
                  </div>
                  <div class="pera">
                    <a href="">7460 Warren Parkway Suite 100 Frisco TX 75034 </a>
                  </div>
                </div>

           </div>
    
              <div class="contact-infos">
                <h3>Our Location</h3>
                <ul class="social-icon">
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
             </ul>
              </div>
    
            </div>
          </div>
    </div>
  )
}

export default Header
