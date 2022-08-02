import React,{useState, useEffect} from 'react'
const api_url = "http://localhost:3100";

function Sellus() {

    const [phonesell, setphonesell] = useState([])

    useEffect(() => {
        fetch(api_url + "/api/phonedata/")
        .then(res => res.json())
        .then(data => setphonesell(data))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
             <section className="py-7" id="services" container-xl="container-xl">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5 text-center mb-3">
                        <h5 className="text-danger">GET you Phone Price</h5>
                        <h2>We provides you a best price</h2>
                    </div>
                    </div>
                    <div className="row h-100 justify-content-center">
                    {phonesell.map((phone) => (
                    <div className="col-md-4 pt-4 px-md-2 px-lg-3">
                        <div className="card h-100 px-lg-5 card-span">
                            
                                <div className="card-body d-flex flex-column justify-content-around">
                                <div className="text-center pt-5"><img className="img-fluid" src="../img/icons/services-1.svg" alt="..." />
                                <h5 className="my-4" key={phone.id}>{phone.phonename}</h5>
                                </div>
                                <ul className="list-unstyled">
                                <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Price: {phone.phoneprice}
                                </li>
                                <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Condition: {phone.condition}
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sellus
