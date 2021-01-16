import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import CustomerAPIItem from '../components/CustomerAPIItem'
import { Headermiddle, Form, Label, Input, Button } from '../components/FormStyled'

export default function CustomerUpdatePage(props) {
    const customerId = props.match.params.id;
    const [formData, setFormData] = useState({})
    const history = useHistory()

  
    useEffect( () => {
        // getCustomerItem()
        CustomerAPIItem(customerId, "GET", null)
        .then(res => res.json())
        .then(data => setFormData(data))
      }, [])


      function handleOnChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      function renderInput(name, label, type) {
        return (
          <div>
            <Label>{label}</Label>
            <Input 
              type={type || "text"} 
              name={name}
              value={formData[name] || ""}
              onChange={handleOnChange}
            />
          </div>
        )
      }

      function handleOnSubmit(e) {
        e.preventDefault()

        CustomerAPIItem(customerId, "PUT", JSON.stringify(formData))
        .then(res => res.json())
        .then(() => history.push(`/home/${customerId}`))
      }
    
      return (
        <div>
          <Headermiddle>Update Customer</Headermiddle>
          <Form onSubmit={handleOnSubmit}>
            {renderInput("name", "Customer Name")}
            {renderInput("organisationNr", "Organisation Number")}
            {renderInput("vatNr", "Vat Number")}
            {renderInput("reference", "Reference")}
            {renderInput("paymentTerm", "Payment Term", "number")}
            {renderInput("website", "Website", "url")}
            {renderInput("email", "Customer Email", "email")}
            {renderInput("phoneNumber", "Phone Number", "tel")}

            <Button type="submit">Update Customer</Button>
          </Form>
    
        </div>
      )
    }
