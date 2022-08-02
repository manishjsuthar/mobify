import React from 'react'

function Service() {
    return (
        <div>
            <section className="py-7" id="services" container-xl="container-xl">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5 text-center mb-3">
                        <h5 className="text-danger">SERVICES</h5>
                        <h2>Our services for you</h2>
                    </div>
                    </div>
                    <div className="row h-100 justify-content-center">
                    <div className="col-md-4 pt-4 px-md-2 px-lg-3">
                        <div className="card h-100 px-lg-5 card-span">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className="text-center pt-5"><img className="img-fluid" src="../img/icons/services-1.svg" alt="..." />
                            <h5 className="my-4">Business Services</h5>
                            </div>
                            <p>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                            <ul className="list-unstyled">
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Corporate goods
                            </li>
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Shipment
                            </li>
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Accesories
                            </li>
                            </ul>
                            <div className="text-center my-5">
                            <div className="d-grid">
                                <button className="btn btn-outline-danger" type="submit">Learn more </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 pt-4 px-md-2 px-lg-3">
                        <div className="card h-100 px-lg-5 card-span">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className="text-center pt-5"><img className="img-fluid" src="../img/icons/services-2.svg" alt="..." />
                            <h5 className="my-4">Statewide Services</h5>
                            </div>
                            <p>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                            <ul className="list-unstyled">
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Unlimited Bandwidth
                            </li>
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Encrypted Connection
                            </li>
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Yes Traffic Logs
                            </li>
                            </ul>
                            <div className="text-center my-5">
                            <div className="d-grid">
                                <button className="btn btn-danger hover-top btn-glow border-0" type="submit">Learn more</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 pt-4 px-md-2 px-lg-3">
                        <div className="card h-100 px-lg-5 card-span">
                        <div className="card-body d-flex flex-column justify-content-around">
                            <div className="text-center pt-5"><img className="img-fluid" src="../img/icons/services-3.svg" alt="..." />
                            <h5 className="my-4">Personal Services</h5>
                            </div>
                            <p>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                            <ul className="list-unstyled">
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Unlimited Bandwidth
                            </li>
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Encrypted Connection
                            </li>
                            <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Yes Traffic Logs
                            </li>
                            </ul>
                            <div className="text-center my-5">
                            <div className="d-grid">
                                <button className="btn btn-outline-danger" type="submit">Learn more </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section className="pt-7 pb-0">
                <div className="container">
                    <div className="row">
                    <div className="col-6 col-lg mb-5">
                        <div className="text-center"><img src="../img/icons/awards.png" alt="..." />
                        <h1 className="text-primary mt-4">26+</h1>
                        <h5 className="text-800">Awards won</h5>
                        </div>
                    </div>
                    <div className="col-6 col-lg mb-5">
                        <div className="text-center"><img src="../img/icons/states.png" alt="..." />
                        <h1 className="text-primary mt-4">65+</h1>
                        <h5 className="text-800">States covered</h5>
                        </div>
                    </div>
                    <div className="col-6 col-lg mb-5">
                        <div className="text-center"><img src="../img/icons/clients.png" alt="..." />
                        <h1 className="text-primary mt-4">689K+</h1>
                        <h5 className="text-800">Happy clients</h5>
                        </div>
                    </div>
                    <div className="col-6 col-lg mb-5">
                        <div className="text-center"><img src="../img/icons/goods.png" alt="..." />
                        <h1 className="text-primary mt-4">130M+</h1>
                        <h5 className="text-800">Goods delivered</h5>
                        </div>
                    </div>
                    <div className="col-6 col-lg mb-5">
                        <div className="text-center"><img src="../img/icons/business.png" alt="..." />
                        <h1 className="text-primary mt-4">130M+</h1>
                        <h5 className="text-800">Business hours</h5>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end of .container*/}
            </section>
        </div>
    )
}

export default Service
