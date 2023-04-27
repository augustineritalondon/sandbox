import React from 'react'
import Breadcrumb from '../components/Breadcrumb'

const FAQs = () => {
    return (
        <>
            <>
                <Breadcrumb title='FAQs' bgImage='https://images.unsplash.com/photo-1507860731853-84f12e4c036b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80' />

                <section className='container'>
                    <div class="row gx-md-8 gy-8 text-center mt-15 mb-14 mb-md-17" style={{ display: 'flex' }}>
                        <div class="col-md-4 col-lg-4">
                            <section class="wrapper image-wrapper bg-image bg-overlay " data-image-src="img/photos/bg1.jpg" style={{ backgroundImage: 'url("/img/photos/bg1.jpg")' }}>
                                <div class="container py-10" style={{ display: 'flex', justifyContent: 'left' }}>
                                    <div class="row" style={{ display: 'flex', textAlign: 'left' }}>
                                        <div class="col-lg-12">
                                            <h2 class="fs-20 text-uppercase text-white mb-3" style={{ fontWeight: 'bold' }}>Track Your Request</h2>
                                            <p className='text-white'>Our AI-Powered platform ensures the timeliness, cost efficiency compliance adherence required to ensure your production timelines are met.</p>
                                            <a href="#" class="btn btn-white rounded mb-0 text-nowrap" style={{ width: '100%' }}>Schedule An Appointment</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="col-md-8 col-lg-8">
                            <section class="container pb-md-17 position-relative" style={{ zIndex: '2' }}>
                                <div class="row">
                                    <div class="col-xl-11 col-xxl-10 mx-auto">
                                        <div class="position-relative">
                                            <h3 class="display-3 mb-11 fs-24 text-left" style={{textAlign: 'left'}}>Key <span class="text-gradient gradient-7">Bene</span>fits</h3>
                                        </div>
                                        <div class="row">

                                            <div class="col-lg-12 mb-0">
                                                <div id="accordion-1" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-1">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-1" aria-expanded="false" aria-controls="accordion-collapse-1-1">Safety</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-1" class="collapse" aria-labelledby="accordion-heading-1-1" data-bs-target="#accordion-1">
                                                            <div class="card-body">
                                                                <p>Safe, Regulated, Secure and Cost-effective solution for ships in the GOG</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-2" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-2">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-2" aria-expanded="false" aria-controls="accordion-collapse-1-2">STS</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-2" class="collapse" aria-labelledby="accordion-heading-1-2" data-bs-target="#accordion-2">
                                                            <div class="card-body">
                                                                <p>STS operations in a safe, secure location</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-3" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-3">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-3" aria-expanded="false" aria-controls="accordion-collapse-1-3">Running Cost</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-3" class="collapse" aria-labelledby="accordion-heading-1-3" data-bs-target="#accordion-3">
                                                            <div class="card-body">
                                                                <p>Reduced vessel running costs whilst in anchor</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-4" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-4">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-4" aria-expanded="false" aria-controls="accordion-collapse-1-4">Crew Fatigue</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-4" class="collapse" aria-labelledby="accordion-heading-1-4" data-bs-target="#accordion-4">
                                                            <div class="card-body">
                                                                <p>Reduce crew fatigue</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-5" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-5">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-5" aria-expanded="false" aria-controls="accordion-collapse-1-5">Maintenance</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-5" class="collapse" aria-labelledby="accordion-heading-1-5" data-bs-target="#accordion-5">
                                                            <div class="card-body">
                                                                <p>Conduct ships maintenance</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-6" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-6">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-6" aria-expanded="false" aria-controls="accordion-collapse-1-6">Vessel Safety</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-6" class="collapse" aria-labelledby="accordion-heading-1-6" data-bs-target="#accordion-6">
                                                            <div class="card-body">
                                                                <p>Safer for a ship to anchor rather than drift or slow steam</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="col-lg-12">
                                                <div id="accordion-7" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-7">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-7" aria-expanded="false" aria-controls="accordion-collapse-1-7">Port Operations</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-7" class="collapse" aria-labelledby="accordion-heading-1-7" data-bs-target="#accordion-7">
                                                            <div class="card-body">
                                                                <p>Conduct port operations like Bunker, Supply of provisions and Crew changes offshore rather than need to enter the port.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-8" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-8">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-8" aria-expanded="false" aria-controls="accordion-collapse-1-8">Risk</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-8" class="collapse" aria-labelledby="accordion-heading-1-8" data-bs-target="#accordion-8">
                                                            <div class="card-body">
                                                                <p>Reduce the risk of Stowaways</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-9" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-9">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-9" aria-expanded="false" aria-controls="accordion-collapse-1-9">Guards On Board</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-9" class="collapse" aria-labelledby="accordion-heading-1-9" data-bs-target="#accordion-9">
                                                            <div class="card-body">
                                                                <p>Secure ship without the requirement for armed guards to board</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-10" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-10">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-10" aria-expanded="false" aria-controls="accordion-collapse-1-10">Naval Patrol</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-10" class="collapse" aria-labelledby="accordion-heading-1-10" data-bs-target="#accordion-10">
                                                            <div class="card-body">
                                                                <p>24/7 armed Naval Patrol Boats securing the SAA</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div id="accordion-11" class="accordion-wrapper">
                                                    <div class="card accordion-item shadow-lg">
                                                        <div class="card-header" id="accordion-heading-1-11">
                                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#accordion-collapse-1-11" aria-expanded="false" aria-controls="accordion-collapse-1-11">Insurance</button>
                                                        </div>
                                                        <div id="accordion-collapse-1-11" class="collapse" aria-labelledby="accordion-heading-1-11" data-bs-target="#accordion-11">
                                                            <div class="card-body">
                                                                <p>Reduction in Insurance premiums</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default FAQs