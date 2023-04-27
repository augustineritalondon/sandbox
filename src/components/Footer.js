import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-dark text-inverse">
            <div class="container py-13 py-md-15">
                <div class="row gy-6 gy-lg-0" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div class="col-lg-4">
                        <div class="widget">
                            <img class="mb-4" src="./assets/img/logo-light.png" srcset="./assets/img/logo-light@2x.png 2x" alt="" />
                            <h4 class="widget-title mb-3 text-white">About Us</h4>
                            <p class="mb-4">PE Solutions is a registered Maritime Security & Logistics Limited Liability Company with its headquarters based in East Legon, Accra-Ghana.</p>
                            <nav class="nav social social-white">
                                <a href="#"><i class="uil uil-facebook-f"></i></a>
                                <a href="#"><i class="uil uil-instagram"></i></a>
                                <a href="#"><i class="uil uil-twitter"></i></a>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-2 offset-lg-2">
                        <div class="widget">
                            <h4 class="widget-title mb-3 text-white">Services</h4>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#">Bunkering Hub</a></li>
                                <li><a href="#">Secure Anchorage Area</a></li>
                                <li><a href="#">Environmental Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3">
                        <div class="widget">
                            <h4 class="widget-title mb-3 text-white">Get in Touch</h4>
                            <p>If you have any questions or need help, feel free to contact with our team</p>
                            <address>Enclave Garden, East Legon, Accra</address>
                            <a href="mailto:first.last@email.com">info@email.com</a><br /> +233593816881
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer