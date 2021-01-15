import React, {useState, useEffect} from 'react';
import {Table} from "react-bootstrap";
import CustomerListItem from '../components/CustomerListItem';
import CustomerAPIItem from '../components/CustomerAPIItem';


export default function HomePage() {
    const [customerList, setCustomerList] = useState([])


    useEffect( () => {
      // getCustomerItem()
      CustomerAPIItem(null , "GET", null)
      .then(res => res.json())
      .then(data => setCustomerList(data.results))
    }, [])


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

      {customerList ? customerList.map(item => {
        return <CustomerListItem key={item.id} customerData={item} />}) :<h1>You are not logged in. Please login</h1>}

        </tbody>
        </Table>
    </div> 
  );
}
