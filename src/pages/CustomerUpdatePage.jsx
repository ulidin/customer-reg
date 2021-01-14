import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
export default function CustomerUpdatePage(props) {
    const customerId = props.match.params.id;
    const [formData, setFormData] = useState({})
    const history = useHistory()

    function getCustomerItem(){
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem('CUSTOMERS')
        fetch(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setFormData(data))
    }

    useEffect( () => {
        getCustomerItem()
      }, [])


      function handleOnChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      function renderInput(name, label, type) {
        return (
          <div>
            <label>{label}</label>
            <input 
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
        const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
        const token = localStorage.getItem("CUSTOMERS")
        fetch(url, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(() => history.push(`/customers/${customerId}`))
      }
    
      return (
        <div>
          <h1>Update Customer</h1>
          <form onSubmit={handleOnSubmit}>
            {renderInput("name", "Customer Name")}
            {renderInput("organisationNr", "Organisation Number")}
            {renderInput("vatNr", "Vat Number")}
            {renderInput("reference", "Reference")}
            {renderInput("paymentTerm", "Payment Term", "number")}
            {renderInput("website", "Website", "url")}
            {renderInput("email", "Customer Email", "email")}
            {renderInput("phoneNumber", "Phone Number", "tel")}

            <button type="submit">Update Customer</button>
          </form>
    
        </div>
      )
    }
