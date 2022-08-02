import React from 'react'

function Footer() {
    return (
        <div className="">
            <section className="bg-900 pb-0 pt-5">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><a className="text-decoration-none d-flex" href="/"><img src="../mylogo.png" height={51} alt="" /><h3 className="text-danger">Mobify</h3></a>
                        <p className="text-500 my-4">Get your phone best price</p>
                    </div>
                    
                    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                        <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Services</h5>
                        <ul className="list-unstyled mb-md-4 mb-lg-0">
                        <li className="lh-lg"><a className="text-500" href="#!">Corporate goods</a></li>
                        <li className="lh-lg"><a className="text-500" href="#!">Artworks</a></li>
                        <li className="lh-lg"><a className="text-500" href="#!">Documents</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                        <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Customer Care</h5>
                        <ul className="list-unstyled mb-md-4 mb-lg-0">
                        <li className="lh-lg"><a className="text-500" href="#!">About Us</a></li>
                        <li className="lh-lg"><a className="text-500" href="#!">Contact US</a></li>
                        <li className="lh-lg"><a className="text-500" href="#!">Get Update</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                {/* end of .container*/}
                </section>
        </div>
    )
}

export default Footer
