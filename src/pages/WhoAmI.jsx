import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CustomerAPIItem from '../components/CustomerAPIItem'



export default function WhoAmI(){
    const [customerItem, setCustomerItem] = useState(null)
    const token = localStorage.getItem("CUSTOMERS")
    const history = useHistory()
  
    useEffect( () => {
      if (token == null){
        return (<div/>)
      }     
      
      CustomerAPIItem("me", "GET", null)     
      .then(res => res.json())
      .then(data => setCustomerItem(data))
      history.push('/')
      
      }, [])
  return (
      <nav className="justify-content-end pr-lg-5">
      {customerItem 
      ? (
        <form>
        <div>       
        <label>Email: </label>
        <output>{customerItem.email}</output>
        </div>
        <div>
        <label>Name: </label>
        <output>{customerItem.firstName} {customerItem.lastName}</output>
        </div>
        </form>
      )
      :
      (
        <div/>
      )
      }
      </nav>
  )
}
