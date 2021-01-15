import React, {useState, useEffect} from 'react';
import {Table} from "react-bootstrap";
import CustomerListItem from '../components/CustomerListItem';
import CustomerAPIItem from '../components/CustomerAPIItem';
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 2rem;
  color: #a70a3e;
  `

export default function HomePage() {
    const [customerList, setCustomerList] = useState([])


    useEffect( () => {
      CustomerAPIItem(null , "GET", null)
      .then(res => res.json())
      .then(data => setCustomerList(data.results))
    }, [])


  return (
    <div className="table-responsive">
    {customerList
    ?(
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Organisation number</th>
            <th>Vat nr</th>
          </tr>
        </thead>
        <tbody>

      {/* {customerList ? customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />}) :<h1>You are not logged in. Please login</h1>} */}
      
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />})}

        </tbody>
        </Table>
    )
    :
    (
      <span><Heading>You are not logged in. Please login!</Heading></span>
    )
    }
    </div> 
  );
}
