import React, {useState, useEffect} from 'react';
import {Table} from "react-bootstrap";
import CustomerListItem from '../components/CustomerListItem';
import CustomerAPIItem from '../components/CustomerAPIItem';


export default function HomePage() {
    const [customerList, setCustomerList] = useState([])

    // useEffect( () => {
    //     getCustomerList()
    // }, [])

    useEffect( () => {
      // getCustomerItem()
      CustomerAPIItem(null , "GET", null)
      .then(res => res.json())
      .then(data => setCustomerList(data.results))
    }, [])

    // function getCustomerList() {
    //     const url = "https://frebi.willandskill.eu/api/v1/customers/"
    //     const token = localStorage.getItem("CUSTOMERS")
    //     fetch (url, {
    //         headers: {
    //             "Content-Type" : "application/json",
    //             "Authorization": `Bearer ${token}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => setCustomerList(data.results))
            
    // }

  return (
    <div className="table-responsive">
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Organisation number</th>
            <th>Vat nr</th>
          </tr>
        </thead>
        <tbody>
      {customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />
      })}

        </tbody>
        </Table>
    </div> 
  );
}
