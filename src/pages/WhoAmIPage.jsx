import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import CustomerAPIItem from '../components/CustomerAPIItem'
import styled from 'styled-components'


const Div = styled.div`
  background-color: #5be2e2;
  padding: 0 20px 0 10px;
  color: gray;
  font-size: 10px;
  text-align: right;
  width: 100%;
`


export default function WhoAmIPage(){
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
      history.push('/home')
      
      }, [])
  return (
      <nav className="justify-content-end">
      {customerItem 
      ? (
        <form>
        <Div>   
        <label>User logged in:&nbsp;</label>
        <output>{customerItem.firstName} {customerItem.lastName}, {customerItem.email}</output>
        </Div>
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
