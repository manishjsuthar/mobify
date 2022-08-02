import React,{useState,useEffect} from 'react'
const base_url ="http://localhost:3100"

function AdminPanel() {
    const [contactdetail, setcontactdetail] = useState([])

    useEffect(() => {
        fetch(base_url + "/api/contactform/")
        .then(res => res.json())
		.then(data => setcontactdetail(data))
        .catch(err => console.error(err))
    }, [])
    return (
        <div style={{"margin":"200px"}}>
            <ul>
                {contactdetail.map(post => (
              <li key={post.id}>Name: {post.cname},
              Email: {post.cemail},
              Message: {post.cmessage}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default AdminPanel
