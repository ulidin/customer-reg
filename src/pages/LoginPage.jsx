import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function LoginPage() {

    // const [credentialFormData, setCredentialFormData] = useState({
    //     email: "Georgios.Goussis@yh.nackademin.se",
    //     password: "javascriptoramverk"
    // })
    const [credentialFormData, setCredentialFormData] = useState({
        email: "",
        password: ""
    })
    

    const history = useHistory()
    

    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const credentials = {
            email:credentialFormData.email,
            password: credentialFormData.password
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("CUSTOMERS", data.token)
            history.push("/home")
        })
    }

    function handleOnchange(e){
        console.log(e.target.name, e.target.value)
        setCredentialFormData({...credentialFormData, [e.target.name]: e.target.value})

    
    }

  return (
    <div>
    <h3>Please login for Customer Administration</h3>

    <form onSubmit={handleOnSubmit}>
    <label>Email
    <input name="email" value={credentialFormData.email} onChange={handleOnchange}/>
    </label>
    <label>Password</label>
    <input name="password" value={credentialFormData.password} onChange={handleOnchange}/>
    <button type="submit">Login</button>
    </form>
      
    </div>
  );
}
