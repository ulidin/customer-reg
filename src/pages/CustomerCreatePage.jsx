import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import CustomerAPIItem from '../components/CustomerAPIItem'
import styled from 'styled-components'


const Headermiddle = styled.h3`
  margin-right: auto;
  margin-left: 230px;
`

const Form = styled.form`
  background-color: #FFF;
  height: 600px;
  width: 600px;
  margin-right: auto;
  margin-left: 5px;
  margin-top: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px;
  text-align:center;
`

const Label = styled.label`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 18px;
  color: #333;
  height: 20px;
  width: 200px;
  margin-top: 10px;
  margin-left: 10px;
  text-align: right;
  clear: both;
  float:left;
  margin-right:15px;
`

const Input = styled.input`
  height: 20px;
  width: 300px;
  border: 1px solid #000;
  margin-top: 10px;
  float: left;
`


const Button = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  font-size:bold;
  background-color:#a70a3e;
  color:white;
  font-weight: bold;
`

export default function CustomerCreatePage() {
  const [formData, setFormData] = useState({})
  const history = useHistory()

  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    const newObj = {...formData, [name]: value}
    setFormData(newObj)
  }

  function renderInput(name, label, type) {
    return (
      <div>
        <Label>{label}</Label>
        <Input
          type={type || "text"}
          name={name}
          onChange={handleOnChange}
        />
      </div>
    )
  }

  function handleOnSubmit(e){
    e.preventDefault()
 
    CustomerAPIItem(null, "POST", JSON.stringify(formData) )
    .then( res => res.json())
    .then( data => {
      history.push('/home')
    })
  }

  return (
    <div>
      <Headermiddle>Create New Customer</Headermiddle>
      <Form onSubmit={handleOnSubmit}>
        {renderInput("name", "Customer Name")}
        {renderInput("organisationNr", "Organisation Number")}
        {renderInput("vatNr", "Vat Number")}
        {renderInput("reference", "Reference")}
        {renderInput("paymentTerm", "Payment Term", "number")}
        {renderInput("website", "Website", "url")}
        {renderInput("email", "Customer Email", "email")}
        {renderInput("phoneNumber", "Phone Number", "tel")}
        <br/>
        <Button type="submit">Create Customer</Button>
      </Form>
    </div>
  )
}
