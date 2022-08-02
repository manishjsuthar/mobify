import React from 'react'
import Service from './Service'

function Hero() {
    return (
        <div>
            <section className="py-xxl-10 pb-0" id="home">
                <div className="bg-holder bg-size" style={{"background-image":"url(assets/img/gallery/hero-header-bg.png)","background-position":"top center","background-size":"cover"}}>
                </div>
                {/*/.bg-holder*/}
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-md-5 col-xl-6 col-xxl-7 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100" src="../img/illustrations/hero.png" alt="hero-header" /></div>
                    <div className="col-md-75 col-xl-6 col-xxl-5 text-md-start text-center py-8">
                        <h1 className="fw-normal fs-6 fs-xxl-7">Purana phone becho </h1>
                        <h1 className="fw-bolder fs-6 fs-xxl-7 mb-2">Aur Cash Pao.</h1>
                        <p className="fs-1 mb-5">We Will provide you the best service <br />and Best Price. </p><a className="btn btn-primary me-2" href="#!" role="button">Sell now<i className="fas fa-arrow-right ms-2" /></a>
                    </div>
                    </div>
                </div>
            </section>
            <Service/>
        </div>
    )
}

export default Hero
