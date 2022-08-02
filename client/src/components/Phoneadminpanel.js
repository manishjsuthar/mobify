import React,{useState, useEffect} from 'react'
import axios from 'axios';
const api_url = "http://localhost:3100";

function Phoneadminpanel() {

    const [phonesell, setphonesell] = useState([])
    const [phonedata, setphonedata] = useState({
        phonename:"",
        phoneprice:"",
        condition:"" 
    })

    useEffect(() => {
        getPhonedatas();
    }, [])

    //showing data by calling get method
    const getPhonedatas = () => {
        fetch(api_url + "/api/phonedata/")
        .then(res => res.json())
        .then(data => {
            setphonesell(data)
            setphonedata(data[0])
        })
    }

    //add data by calling post method
    
    const submit = (e)  => {
        e.preventDefault();
        axios.post(api_url + "/api/phonedata/new", {
            phonename:phonedata.phonename,
            phoneprice:phonedata.phoneprice,
            condition:phonedata.condition
        })
        .then((res) => {
            console.log(res.data)
            alert("Phone data successfully added")
            getPhonedatas();
        })
    }
    const handleOnChange = (e) => {
        const newPhoneData = {...phonedata}
        newPhoneData[e.target.id] = e.target.value
        setphonedata(newPhoneData)
        console.log(newPhoneData)
    }

    //delete data through delete method
    const deletePhonedatas = id => {
		fetch(api_url + `/api/deletephonedata/${id}`, { method: "DELETE" })
        .then(result => result.json())
        .then((res)=>{
            console.warn(res)
            getPhonedatas();
        })
	}

    //update data
    const selectData = (id) => {
        console.warn(phonedata.id)
        // setphonedata(phonesell[id-1])
    }


    return (
        <div>
             <section className="py-7" id="services" container-xl="container-xl">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5 text-center mb-3">
                        <h5 className="text-danger">Add phone details</h5>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-8" >
                    <div className="row h-100 justify-content-center">
                    {phonesell.map((phone) => (
                    <div className="col-md-4 pt-4 px-md-2 px-lg-3">
                        <div className="card h-100 px-lg-5 card-span">                        
                                <div className="card-body d-flex flex-column justify-content-around">
                                <div className="text-center pt-5">
                                {/* <img className="img-fluid" src="../img/icons/services-1.svg" alt="..." /> */}
                                <h5 className="my-4" key={phone.id}>{phone.phonename}</h5>
                                </div>
                                <ul className="list-unstyled">
                                <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Price: {phone.phoneprice}
                                </li>
                                <li className="mb-2"><span className="me-2"><i className="fas fa-circle text-primary" style={{"font-size":".5rem"}} /></span>Condition: {phone.condition}
                                </li>
                                </ul>
                                <div className="text-center my-5">
                                    <div className="d-grid">
                                    <button className="btn btn-outline-danger mb-2" type="button" onClick={() => selectData(phone._id)}>Update</button>
                                    <button className="btn btn-outline-danger" type="button" onClick={() => deletePhonedatas(phone._id)}>delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>
                    </div>
                    <div className="col-md-4" >
                        <form className="row" onSubmit={(e)=>submit(e)}>
                        <div className="mb-3">
                            <label className="form-label visually-hidden" htmlFor="inputName">Phone name</label>
                            <input className="form-control form-quriar-control" type="text" onChange={(e)=>handleOnChange(e)} id="phonename" value={phonedata.phonename} placeholder="Phone name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label visually-hidden" htmlFor="inputprice">Phone Price</label>
                            <input className="form-control form-quriar-control"type="text" onChange={(e)=>handleOnChange(e)} id="phoneprice" value={phonedata.phoneprice} placeholder="Phone Price" />
                        </div>
                        <div className="mb-5">
                            <label className="form-label visually-hidden" htmlFor="validationTextarea">Condition</label>
                            <textarea className="form-control form-quriar-control border-400" id="condition" onChange={(e)=>handleOnChange(e)} value={phonedata.condition} placeholder="Condition" style={{"height":"100px"}} required="required" defaultValue={""} />
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-primary" type="submit">Add Phone Details<i className="fas fa-paper-plane ms-2" /></button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Phoneadminpanel
