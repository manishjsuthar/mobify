import React,{useState} from 'react'
import axios from 'axios'

function Contact() {

    const [data, setdata] = useState({
        cname:"",
        cemail:"",
        cmessage:""
    })

    const submit = (e)  => {
        e.preventDefault();
        axios.post("http://localhost:3100/api/contactform/new", {
            cname:data.cname,
            cemail:data.cemail, 
            cmessage:data.cmessage
        })
        .then((res) => {
            console.log(res.data)
            alert("message has been sent successfully")
        })
    }

    const handleOnChange = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setdata(newData)
        console.log(newData)
    }

    return (
        <div>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5 col-xl-4"><img src="../img/illustrations/callback.png" alt="..." />
                        <h5 className="text-danger">REQUEST A CALLBACK</h5>
                        <h2>We will contact in the shortest time.</h2>
                        <p className="text-muted">Monday to Friday, 9am-5pm.</p>
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4" >
                        <form className="row" onSubmit={(e)=>submit(e)}>
                        <div className="mb-3">
                            <label className="form-label visually-hidden" htmlFor="inputName">Name</label>
                            <input className="form-control form-quriar-control" onChange={(e)=>handleOnChange(e)} id="cname" value={data.cname} type="text" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label visually-hidden" htmlFor="inputEmail">Enter Email</label>
                            <input className="form-control form-quriar-control" onChange={(e)=>handleOnChange(e)}  id="cemail" value={data.cemail} type="email" placeholder="Email" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label visually-hidden" htmlFor="validationTextarea">Message</label>
                            <textarea className="form-control form-quriar-control is-invalid border-400" onChange={(e)=>handleOnChange(e)} value={data.cmessage}  id="cmessage" placeholder="Message" style={{"height":"150px"}} required="required" defaultValue={""} />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Send Message<i className="fas fa-paper-plane ms-2" /></button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
