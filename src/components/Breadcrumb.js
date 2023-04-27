import React from 'react'

const Breadcrumb = ({title, bgImage}) => {
    return (
        <section class="wrapper image-wrapper bg-image bg-overlay text-white" data-image-src="/img/photos/bg1.jpg" style={{ backgroundImage: `url("${bgImage}")` }}>
            <div class="container pt-19 pt-md-21 pb-18 pb-md-20 text-center">
                <div class="row">
                    <div class="col-md-10 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
                        <h1 class="display-1 text-white mb-3" style={{ fontSize: '58px' }}>{title}</h1>
                        {/* <ul style={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                            <li style={{ margin: '0 20px', listStyleType: 'square' }}>Home</li>
                            <li style={{ margin: '0 20px', listStyleType: 'square' }}>Services</li>
                            <li style={{ margin: '0 20px', listStyleType: 'square' }}>{title}</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb