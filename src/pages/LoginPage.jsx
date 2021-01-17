import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components'

const HeaderMinor = styled.h3`
    margin-left: 1rem;
    margin-top: 1rem;
    color: #e45b5b;
`

const Button = styled.button`
  margin-top: 1rem;
  margin-left: 0.2rem;
  background-color:#ace79d;
`
const Label = styled.label`
    margin-left: 1rem;
    margin-right: 0.2rem;
`
const Input = styled.input`
    color:aquamarine;
`
export default function LoginPage({ setToken }) {
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
            // localStorage.setItem("CUSTOMERS", data.token)
            setToken(data.token);
            // history.push("/home")
        })
    }


    function handleOnchange(e){
        console.log(e.target.name, e.target.value)
        setCredentialFormData({...credentialFormData, [e.target.name]: e.target.value})
    }

     
  return (
    <div>
        <HeaderMinor>Please login for Customer Administration</HeaderMinor>

        <form onSubmit={handleOnSubmit}>
            <Label>Email</Label>
                <Input name="email" value={credentialFormData.email} onChange={handleOnchange}/>
            <Label>Password</Label>
                <input name="password" value={credentialFormData.password} onChange={handleOnchange}/>
                <Button type="submit">Login</Button>
        </form>
    </div>
  );
}
