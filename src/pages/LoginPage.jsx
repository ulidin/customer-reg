import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function LoginPage() {

    const [inputData, setInputData] = useState({
        email: "Georgios.Goussis@yh.nackademin.se",
        password: "javascriptoramverk"
        // email: "webb19@willandskill.se",
        // password: "javascriptoramverk"

    })

    const history = useHistory()
    console.log("history: "+ history)

    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/api-token-auth/"
        const credentials = {
            email:inputData.email,
            password: inputData.password
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
            console.log("Login: " +data)
            console.log(data.token)
            localStorage.setItem("CUSTOMERS", data.token)
            history.push("/HomePage")
        })
    }

    function handleOnchange(e){
        console.log(e.target.name, e.target.value)
        setInputData({...inputData, [e.target.name]: e.target.value})
    
    }

  return (
    <div>
    <h3>Please login for Customer Administration</h3>

    <form onSubmit={handleOnSubmit}>
    <label>Email
    <input name="email" value={inputData.email} onChange={handleOnchange}/>
    </label>
    <label>Password</label>
    <input name="password" value={inputData.password} onChange={handleOnchange}/>
    <button type="submit">Login</button>
    </form>
      
    </div>
  );
}
