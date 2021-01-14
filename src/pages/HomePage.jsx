import React, {useState, useEffect} from 'react';
import CustomerListItem from '../components/CustomerListItem';
import {Table} from "react-bootstrap"


export default function HomePage() {
    const [customerList, setCustomerList] = useState([])

    useEffect( () => {
        getCustomerList()
    }, [])

    function getCustomerList() {
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        const token = localStorage.getItem("CUSTOMERS")
        fetch (url, {
            headers: {
                "Content-Type" : "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCustomerList(data.results))
            
    }

  return (
    <div>
      <h2>Home Page</h2>

      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Oraganisation number</th>
            <th>Vat nr</th>
          </tr>
        </thead>
        </Table>
        
        {/* <tbody>
          <tr>
            <td> */}
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}
    </div> 
  );
}
