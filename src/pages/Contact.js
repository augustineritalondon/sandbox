import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const Contact = () => {
    return (
        <>
            <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white" data-image-src="./assets/img/photos/bg3.jpg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507860731853-84f12e4c036b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80")' }}>
                <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h1 class="display-1 mb-3 text-white">Get in Touch</h1>
                            <nav class="d-inline-block" aria-label="breadcrumb">
                                <ol class="breadcrumb text-white">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section class="wrapper bg-light angled upper-end">
                <div class="container pb-11">
                    <div class="row mb-14 mb-md-16">
                        <div class="col-xl-10 mx-auto mt-n19">
                            <div class="card">
                                <div class="row gx-0">
                                    <div class="col-lg-6 align-self-stretch">
                                        <div class="map map-full rounded-top rounded-lg-start">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str" style={{width:'100%', height: '100%', border:0}} allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="p-10 p-md-11 p-lg-14">
                                            <div class="d-flex flex-row">
                                                <div>
                                                    <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
                                                </div>
                                                <div class="align-self-start justify-content-start">
                                                    <h5 class="mb-1">Address</h5>
                                                    <address>Enclave Garden, East Legon, <br class="d-none d-md-block" />Accra, Ghana</address>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row">
                                                <div>
                                                    <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
                                                </div>
                                                <div>
                                                    <h5 class="mb-1">Phone</h5>
                                                    <p>+233593816881 </p>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row">
                                                <div>
                                                    <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-envelope"></i> </div>
                                                </div>
                                                <div>
                                                    <h5 class="mb-1">E-mail</h5>
                                                    <p class="mb-0"><a href="mailto:sandbox@email.com" class="link-body">info@pesolutionsgroup.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                            <h2 class="display-4 mb-3 text-center">Drop Us a Line</h2>
                            <p class="lead text-center mb-10">Reach out to us from our contact form and we will get back to you shortly.</p>
                            <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
                                <div class="messages"></div>
                                <div class="row gx-4">
                                    <div class="col-md-4">
                                        <div class="form-floating mb-4">
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Jane" required />
                                                <label for="form_name">Name *</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please enter your first name. </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating mb-4">
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required />
                                                <label for="form_email">Email *</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please provide a valid email address. </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating mb-4">
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="jane.doe@example.com" required />
                                                <label for="form_email">Website *</label>
                                                <div class="valid-feedback"> Looks good! </div>
                                                <div class="invalid-feedback"> Please provide a valid email address. </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating mb-4">
                                            <textarea id="form_message" name="message" class="form-control" placeholder="Your message" style={{height: '150px'}} required></textarea>
                                            <label for="form_message">Message *</label>
                                            <div class="valid-feedback"> Looks good! </div>
                                            <div class="invalid-feedback"> Please enter your messsage. </div>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center">
                                        <input type="submit" class="btn btn-primary rounded-pill btn-send mb-3" value="Submit" style={{width: '100%'}} />
                                            {/* <p class="text-muted"><strong>*</strong> These fields are required.</p> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact