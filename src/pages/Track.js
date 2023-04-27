import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Track = () => {
    return (
        <>
            <Breadcrumb title='Track & Trace' bgImage='https://images.unsplash.com/photo-1507860731853-84f12e4c036b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80' />

            <section className='container'>
                <div class="row gx-md-8 gy-8 text-center mt-15 mb-14 mb-md-17" style={{ display: 'flex', alignItems: 'center' }}>
                    <div class="col-md-4 col-lg-4">
                        <section class="wrapper image-wrapper bg-image bg-overlay " data-image-src="img/photos/bg1.jpg" style={{ backgroundImage: 'url("/img/photos/bg1.jpg")' }}>
                            <div class="container py-18" style={{ display: 'flex', justifyContent: 'center', height: '30vh' }}>
                                <div class="row">
                                    <div class="col-lg-12" style={{ marginTop: '-20px' }}>
                                        <h2 class="fs-16 text-uppercase text-white mb-3">Track Your Request</h2>
                                        <a href="#" class="btn btn-white rounded mb-0 text-nowrap">Schedule An Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="col-md-8 col-lg-8">
                        <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
                            <div class="messages"></div>
                            <div class="row gx-4">
                                <div class="col-md-12">
                                    <h5 className='text-left' style={{textAlign: 'left'}}>Personal Data</h5>
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
                                    <h5 style={{textAlign: 'left'}}>Tracking Number</h5>
                                    <div class="form-floating mb-4">
                                        <textarea id="textareaExample" class="form-control" placeholder="You Can Enter Up To A Maximum Of 10 Airway Bill Numbers For Tracking." style={{ height: '100px' }} required></textarea>
                                        <label for="textareaExample">You Can Enter Up To A Maximum Of 10 Airway Bill Numbers For Tracking.</label>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Track