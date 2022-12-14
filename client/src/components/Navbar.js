import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container"><a className="navbar-brand d-flex" href="index.html"><img src="../mylogo.png" height={45} alt="logo" /><h3>Mobify</h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                    <li className="nav-item px-2"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item px-2"><a className="nav-link" href="#services">Our Services</a></li>
                    <li className="nav-item px-2"><Link className="nav-link" to="/sellus">Sell-Us</Link></li>
                </ul>
                <div className="dropdown d-none d-lg-block">
                    <button className="btn bg-soft-warning ms-2" id="dropdownMenuButton1" type="submit" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-search text-warning" /></button>
                    <div className="dropdown-menu dropdown-menu-lg-end p-0 rounded" aria-labelledby="dropdownMenuButton1" style={{"top":"55px"}}>
                    <form>
                        <input className="form-control border-200" type="search" placeholder="Search" aria-label="Search" style={{"background":"#FDF1DF"}} />
                    </form>
                    </div>
                </div><Link className="btn btn-primary order-1 order-lg-0 ms-lg-3" to="/contact">Contact Us</Link>
                <form className="d-flex my-3 d-block d-lg-none">
                    <input className="form-control me-2 border-200 bg-light" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
