import React from 'react'
import image from '../assets/images'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section class="wrapper bg-dark">
        <div class="swiper-container swiper-hero dots-over" data-margin="0" data-autoplay="true" data-autoplaytime="7000" data-nav="true" data-dots="true" data-items="1">
          <div class="swiper">
            <div class="swiper-wrapper">


              <div class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image" data-image-src="/img/photos/bg7.jpg" style={{ backgroundImage: 'url("/img/photos/bg7.jpg")' }}>
                <div class="container h-100">
                  <div class="row h-100">
                    <div class="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5 text-center text-lg-start justify-content-center align-self-center align-items-start">
                      <h2 class="display-1 fs-56 mb-4 text-white ">We bring solutions to make life easier.</h2>
                      <p class="lead fs-23 lh-sm mb-7 text-white ">We are a creative company that focuses on long term relationships with customers.</p>
                      <div class=""><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Read More</a></div>
                    </div>
                  </div>
                </div>

                {/* <!--/.container --> */}
              </div>
              {/* <!--/.swiper-slide --> */}
              {/* <div class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image" data-image-src="/img/photos/bg8.jpg">
                <div class="container h-100">
                  <div class="row h-100">
                    <div class="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center justify-content-center align-self-center">
                      <h2 class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">We are trusted by over a million customers.</h2>
                      <p class="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">Here a few reasons why our customers choose us.</p>
                      <div class="animate__animated animate__slideInUp animate__delay-3s"><a href="./assets/media/movie.mp4" class="btn btn-circle btn-white btn-play ripple mx-auto mb-5" data-glightbox><i class="icn-caret-right"></i></a></div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <!--/.swiper-slide --> */}
              {/* <div class="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image" data-image-src="/img/photos/bg9.jpg">
                <div class="container h-100">
                  <div class="row h-100">
                    <div class="col-md-10 offset-md-1 col-lg-7 offset-lg-5 col-xl-6 offset-xl-6 col-xxl-5 offset-xxl-6 text-center text-lg-start justify-content-center align-self-center align-items-start">
                      <h2 class="display-1 fs-56 mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">Just sit and relax.</h2>
                      <p class="lead fs-23 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">We make sure your spending is stress free so that you can have the perfect control.</p>
                      <div class="animate__animated animate__slideInUp animate__delay-3s"><a href="#" class="btn btn-lg btn-outline-white rounded-pill">Contact Us</a></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <!--/.swiper-wrapper --> */}
          </div>
          {/* <!-- /.swiper --> */}
        </div>
        {/* <!-- /.swiper-container --> */}
      </section>

      <section class="wrapper bg-light">
        <div class="container pt-14 pb-8 pt-md-16 pb-md-5">
          <div class="row gx-lg-8 gx-xl-12 gy-10 mb-lg-10 mb-xl-14 align-items-center">
            <div class="col-lg-7 order-lg-2">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-5 offset-md-1 align-self-end">
                  <div class="card bg-pale-yellow">
                    <div class="card-body">
                      {/* <img src="/img/icons/lineal/telephone-3.svg" class="svg-inject icon-svg icon-svg-md text-yellow mb-3" alt="" /> */}
                      <img src="https://img.icons8.com/pastel-glyph/64/null/security-checked--v1.png" />
                      <p class="mb-0">Secure</p>
                      <h4>Bunkering Hub</h4>
                      <p class="mb-0">Both SAAs are protected by multiple armed Patrol Vessels.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 align-self-end">
                  <div class="card bg-pale-red">
                    <div class="card-body">
                      <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/null/external-delivery-man-food-delivery-kmg-design-detailed-outline-kmg-design.png" />
                      <p class="mb-0">Armed</p>
                      <h4>Secure Anchorage Area</h4>
                      <p class="mb-0">Our dedicated 24/7 SAA operations centre is managed by the Ghana Navy and experts with vast experience in the Maritime Security Sector</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-">
                  <div class="card bg-pale-leaf">
                    <div class="card-body">
                      <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/null/external-delivery-man-food-delivery-kmg-design-detailed-outline-kmg-design.png" />
                      <p class="mb-0">safe</p>
                      <h4>Environmental Service</h4>
                      <p class="mb-0">All our patrol vessels are manned by armed Ghanaian Navy personnel who are well-versed in maritime security operations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
              <h3 class="display-4 mb-5">The service we offer is specifically designed to meet your needs.</h3>
              <p>We pride ourselves on providing the best maritime security services available on the African continent and no one comes close to us.</p>
              <ul class="icon-list bullet-bg bullet-soft-green row">
                <li className='col-md-4'><span><i class="uil uil-check"></i></span><span>Quality Services</span></li>
                <li className='col-md-4'><span><i class="uil uil-check"></i></span><span>AI Platform</span></li>
                <li className='col-md-4'><span><i class="uil uil-check"></i></span><span>Professional</span></li>
                <li className='col-md-4'><span><i class="uil uil-check"></i></span><span>Efficiency</span></li>
                <li className='col-md-4'><span><i class="uil uil-check"></i></span><span>Safety</span></li>
                <li className='col-md-4'><span><i class="uil uil-check"></i></span><span>Unique</span></li>
                <li className='col-md-12'><span><i class="uil uil-check"></i></span><span>Excellent Customer Experience</span></li>
              </ul>
              <a href="#" class="btn btn-navy rounded-pill mt-3">More Details</a>
            </div>
          </div>
        </div>
      </section>

      <div class="overflow-hidden">
        <div class="divider text-soft-primary mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
          </svg>
        </div>
      </div>
      <section class="wrapper bg-soft-primary">
        <div class="container pt-5 pb-14 pb-md-0">
          <div class="row gx-lg-8 gx-xl-0 align-items-center">
            <div class="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end">
              <div class="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block" data-rellax-speed="1" style={{ top: '7rem', left: '1rem' }}></div>
              <figure><img src="/img/photos1/co1.png" srcset="/img/photos1/co1.png 2x" alt="" style={{ width: '500px' }} /></figure>
            </div>

            <div class="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
              <div class="swiper-container dots-start dots-closer mt-md-10 mb-md-15" data-margin="30" data-dots="true">
                <div class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <blockquote class="icon fs-lg">
                        <span style={{ fontSize: '14px' }}>Total Maritime Services</span>
                        <p style={{ fontSize: '43px', lineHeight: '50px' }}>“Reliable Maritime Solutions That Saves Lives, Time And Money!”</p>
                        <div class="blockquote-details mt-5">
                          <div class="info ps-0">
                            <h5 class="mb-0">Andrews Ofosuhene</h5>
                            <p class="mb-0">CEO</p>
                          </div>

                          <img style={{ width: '20%', marginLeft: '50px' }} src='/img/1.png' />
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div class="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg34.jpg" style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661875638674-18fe9b042828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80")' }}>
          <div class="container py-16 py-md-19 text-center">
            <span>Maritime Service Provider To World’s Famous Brands!</span>
            <h2 class="display-1 text-white mb-0">Quality End-To-End Professional Maritime And Logistics Security Services</h2>
          </div>
        </div>
      </div>

      <div class="container pb-md-16" style={{ marginTop: '-100px' }}>
        <div class="card bg-soft-violet mb-10">
          <div class="card-body p-12 ">
            <ul class="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
              <li class="nav-item"> <a class="nav-link d-flex flex-row pt-4 active" style={{ padding: '0' }} data-bs-toggle="tab" href="#tab2-2">
                <div><img src="./assets/img/icons/lineal/savings.svg" class="svg-inject icon-svg icon-svg-md text-green me-4" alt="" /></div>
                <div>
                  <h4 class="mb-1">Request a Quote</h4>
                </div>
              </a> </li>
              <li class="nav-item"> <a class="nav-link d-flex flex-row pt-4" style={{ padding: '0' }} data-bs-toggle="tab" href="#tab2-3">
                <div><img src="./assets/img/icons/lineal/shield.svg" class="svg-inject icon-svg icon-svg-md text-red me-4" alt="" /></div>
                <div>
                  <h4 class="mb-1">Trace & Trace</h4>
                </div>
              </a> </li>
            </ul>
            <div class="col-xl-12 mx-auto">
              <div class="card border-0 bg-white-900">
                <div class="card-body py-lg-8 px-lg-10">

                  <div class="tab-content mt-6 mt-lg-0 mb-md-9">
                    <div class="tab-pane fade show active" id="tab2-2">
                      <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
                        <div class="messages"></div>
                        <div class="row gx-4">
                          <label>Personal Data</label>
                          <div class="col-md-4">
                            <div class="form-floating mb-4">
                              <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                              <label for="textInputExample">Name</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-floating mb-4">
                              <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                              <label for="textInputExample">Email</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-floating mb-4">
                              <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                              <label for="textInputExample">Phone</label>
                            </div>
                          </div>

                          <label>Shipment Data</label>
                          <div class="col-md-4">
                            <div class="form-select-wrapper mb-4">
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Freight Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-floating mb-4">
                              <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                              <label for="textInputExample">City of Departure</label>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-floating mb-4">
                              <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                              <label for="textInputExample">Delivery City</label>
                            </div>
                          </div>


                          <div class="col-md-4">
                            <div class="form-select-wrapper mb-4">
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Incoterms</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div class="col-md-5">
                              <div class="form-floating mb-4">
                                <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                                <label for="textInputExample">Height</label>
                              </div>
                            </div>
                            <div class="col-md-5">
                              <div class="form-floating mb-4">
                                <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                                <label for="textInputExample">Width</label>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div class="col-md-5">
                              <div class="form-floating mb-4">
                                <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                                <label for="textInputExample">Height</label>
                              </div>
                            </div>
                            <div class="col-md-5">
                              <div class="form-floating mb-4">
                                <input id="textInputExample" type="text" class="form-control" placeholder="Text Input" />
                                <label for="textInputExample">Width</label>
                              </div>
                            </div>
                          </div>

                          <div class="col-12 mt-5" style={{ display: 'flex' }}>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Fragile </label>
                            </div>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Express Delivery </label>
                            </div>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Insurance </label>
                            </div>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Packaging </label>
                            </div>
                          </div>

                          <div class="col-12 text-center mt-5">
                            <input type="submit" style={{ width: '100%' }} class="btn btn-primary rounded-pill btn-send" value="Request a Quote" />
                          </div>
                        </div>
                      </form>

                      <div className='mt-5 card-card'>
                        <div>
                          <h3>Get The Information You Need At Your Fingertips!</h3>
                          <p>Background Image
                            Get The Information You Need At Your Fingertips!
                            Effortlessly manage your request online with our user-friendly Request for Quote, Track and Trace forms. Get started today and access the information you need!</p>
                        </div>
                      </div>
                    </div>


                    <div class="tab-pane fade" id="tab2-3">
                      <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
                        <div class="messages"></div>
                        <div class="row gx-4">
                          <div class="col-md-12">
                            <label>Personal Data</label>
                            <div class="form-select-wrapper mb-4">
                              <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </div>

                          <div class="col-md-12">
                            <label>Tracking Number</label>
                            <div class="form-floating mb-4">
                              <textarea id="textareaExample" class="form-control" placeholder="You Can Enter Up To A Maximum Of 10 Airway Bill Numbers For Tracking." style={{ height: '100px' }} required></textarea>
                              <label for="textareaExample">Textarea</label>
                            </div>
                          </div>

                          <div class="col-12 mt-5" style={{ display: 'flex' }}>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Fragile </label>
                            </div>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Express Delivery </label>
                            </div>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Insurance </label>
                            </div>
                            <div class="form-check" style={{ marginRight: '20px' }}>
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                              <label class="form-check-label" for="flexCheckDefault"> Packaging </label>
                            </div>
                          </div>

                          <div class="col-12 text-center mt-5">
                            <input type="submit" style={{ width: '100%' }} class="btn btn-primary rounded-pill btn-send" value="Trace & Track" />
                          </div>
                        </div>
                      </form>

                      <div className='mt-5 card-card'>
                        <div>
                          <h3>Get The Information You Need At Your Fingertips!</h3>
                          <p>Background Image
                            Get The Information You Need At Your Fingertips!
                            Effortlessly manage your request online with our user-friendly Request for Quote, Track and Trace forms. Get started today and access the information you need!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div class="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg34.jpg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533960056888-5166859c1b1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80")' }}>
          <div className='container pt-13 pb-7'>
            <div class="row gx-lg-0 gy-6">
              <div class="col-lg-6">
                <div class="widget">
                  <span>Safe & Reliable Maritime Solutions!</span>
                  <h1 style={{ color: '#fff', fontSize: '43px' }}>Managing Bunkering For Top Notch Vessels</h1>
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <p>Our AI-Powered platform provides you with an unparalleled user experience</p>
                <div class='row'>
                  <div className='col-md-4'>
                    <button className='pricing-button'>Pricing & Plans</button>
                  </div>
                  <div className='col-md-8'>
                    <div class="blockquote-details">
                      <img class="rounded-circle w-10 h-10" src="https://res.cloudinary.com/dzix9afec/image/upload/v1680522210/OFFICIAL_jfdsum.jpg" srcset="https://res.cloudinary.com/dzix9afec/image/upload/v1680522210/OFFICIAL_jfdsum.jpg" alt="" />
                      <div class="info">
                        <h5 class="mb-0" style={{ color: '#fff' }}>commercial@pesolutionsgh.com</h5>
                        <p class="mb-0">Executive Assistant</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* <section class="wrapper bg-light upper-end">
        <div class="container py-14 py-md-16">
          <div class="row">
            <div class="col-lg-9 col-xl-8 col-xxl-7">
              <h2 class="fs-16 text-uppercase text-line text-primary mb-3">News & Events</h2>
              <h3 class="display-4 mb-9">Check out some of our awesome projects with creative ideas and great design.</h3>
            </div>
          </div>
          <div class="swiper-container blog grid-view mb-10" data-margin="30" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <article>
                    <figure class="overlay overlay-1 hover-scale rounded mb-6"><a href="#"> <img src="/img/photos/b4.jpg" alt="" /></a>
                      <figcaption>
                        <h5 class="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div class="post-header">
                      <h2 class="post-title h3 mb-3"><a class="link-dark" href="./blog-post.html">Ligula tristique quis risus</a></h2>
                    </div>
                    <div class="post-footer">
                      <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                        <li class="post-comments"><a href="#"><i class="uil uil-file-alt fs-15"></i>Coding</a></li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <figure class="overlay overlay-1 hover-scale rounded mb-6"><a href="#"> <img src="/img/photos/b5.jpg" alt="" /></a>
                      <figcaption>
                        <h5 class="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div class="post-header">
                      <h2 class="post-title h3 mb-3"><a class="link-dark" href="./blog-post.html">Nullam id dolor elit id nibh</a></h2>
                    </div>
                    <div class="post-footer">
                      <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>29 Mar 2022</span></li>
                        <li class="post-comments"><a href="#"><i class="uil uil-file-alt fs-15"></i>Workspace</a></li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <figure class="overlay overlay-1 hover-scale rounded mb-6"><a href="#"> <img src="/img/photos/b6.jpg" alt="" /></a>
                      <figcaption>
                        <h5 class="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div class="post-header">
                      <h2 class="post-title h3 mb-3"><a class="link-dark" href="./blog-post.html">Ultricies fusce porta elit</a></h2>
                    </div>
                    <div class="post-footer">
                      <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>26 Feb 2022</span></li>
                        <li class="post-comments"><a href="#"><i class="uil uil-file-alt fs-15"></i>Meeting</a></li>
                      </ul>
                    </div>
                  </article>
                </div>
                <div class="swiper-slide">
                  <article>
                    <figure class="overlay overlay-1 hover-scale rounded mb-6"><a href="#"> <img src="/img/photos/b7.jpg" alt="" /></a>
                      <figcaption>
                        <h5 class="from-top mb-0">Read More</h5>
                      </figcaption>
                    </figure>
                    <div class="post-header">
                      <h2 class="post-title h3 mb-3"><a class="link-dark" href="./blog-post.html">Morbi leo risus porta eget</a></h2>
                    </div>
                    <div class="post-footer">
                      <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>7 Jan 2022</span></li>
                        <li class="post-comments"><a href="#"><i class="uil uil-file-alt fs-15"></i>Business Tips</a></li>
                      </ul>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="wrapper bg-purple1 ">
        <div class="container py-15 py-md-17">
          <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0" style={{ display: 'flex', alignItems: 'center' }}>
            <div class="col-lg-5 mt-lg-2">
              <h2 class="fs-16 text-uppercase text-muted mb-3">Our Clients</h2>
              <h3 class="display-3 mb-3 pe-xxl-5">Trusted by over 300+ clients</h3>
              <p class="lead fs-lg mb-0 pe-xxl-7">Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, PESoutions Group drives sustainable competitive advantages our clients</p>
            </div>

            <div class="col-lg-7">
              <div class="row row-cols-2 row-cols-md-4 gx-0 gx-md-8 gx-xl-12 gy-12" style={{ display: 'flex', alignItems: 'center' }}>
                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/NPA_jfbnkv.png" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/GCAA_u1wf5l.jpg" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/Ghana_Navy_ikpvdx.jpg" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/GMA_ixlue8.png" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/GIM_qoywli.jpg" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/NPA_jfbnkv.png" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/GCAA_u1wf5l.jpg" alt="" /></figure>
                </div>

                <div class="col">
                  <figure class="px-3 px-md-0 px-xxl-2"><img src="https://res.cloudinary.com/dzix9afec/image/upload/v1680274907/PARTNERS/NPA_jfbnkv.png" alt="" /></figure>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <div class="overflow-hidden">
        <div class="divider text-soft-primary mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="currentColor" d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z" />
          </svg>
        </div>
      </div>
      <section className='wrapper bg-soft-primary'>
        <div className='container'>
          <h3 class="display-4 mb-3 text-center">What Our Clients Say!</h3>
          <p class="lead fs-lg mb-10 text-center">Individually Assess Each Plan And Offer Optimal Solutions!</p>
          <div class="row gx-lg-8 gx-xl-12 gy-6 pb-8 align-items-center">
            <div class="col-lg-7">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-6">
                  <figure class="rounded mt-md-10 position-relative"><img src="/img/photos/g5.jpg" style={{ height: '500px' }} srcset="https://plus.unsplash.com/premium_photo-1661875638674-18fe9b042828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80" alt="" /></figure>
                </div>

                <div class="col-md-6">
                  <div class="row gx-md-5 gy-5">
                    <div class="col-md-12 order-md-2">
                      <figure class="rounded"><img src="/img/photos/g6.jpg" srcset="https://plus.unsplash.com/premium_photo-1661873184237-a06debd40731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80" alt="" /></figure>
                    </div>

                    <div class="col-md-10">
                      <div class="card bg-pale-primary text-center">
                        <div class="card-body py-11 counter-wrapper">
                          <h3 class="counter text-nowrap">5000+</h3>
                          <p class="mb-0">Satisfied Customers</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div class="col-lg-5 mt-5">
              <div class="swiper-container dots-closer mb-6" data-margin="30" data-dots="true">
                <div class="swiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <blockquote class="icon icon-top fs-lg text-center">
                        <p>“Serving an impressive list of long-term clients with experience and expertise in multiple industries.”</p>
                        <div class="blockquote-details justify-content-center text-center">
                          <div class="info ps-0">
                            <h5 class="mb-1">Coriss Ambady</h5>
                            <p class="mb-0">Financial Analyst</p>
                          </div>
                        </div>
                      </blockquote>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home


