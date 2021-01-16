import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import CustomerAPIItem from '../components/CustomerAPIItem'
import styled from 'styled-components'


const Div = styled.div`
margin-left: 20px;
`

const Span = styled.span`
  font-size: 20px;
  color: green;
  background-color: #CEF6F5;
`

const Button = styled.button`
  margin: 10px 23px 0 0;
  padding: 5px;
  background-color:#E1E1E1;
`
export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id
  const [customerItem, setCustomerItem] = useState(null)
  const history = useHistory()


  function deleteCustomer() {
    CustomerAPIItem(customerId, "DELETE", null)
    .then(() => history.push('/home'))
  }

  useEffect( () => {
    CustomerAPIItem(customerId, "GET", null)

    .then(res => res.json())
    .then(data => setCustomerItem(data))

  }, [])

  return (
    <div>
      {customerItem 
      ? (
        <Div>
          <h1>{customerItem.name}</h1>
          <table>
            <tbody>
              <tr>
                <td>Organisation Number</td>
                <td>{customerItem.organisationNr}</td>
              </tr>

              <tr>
                <td>VAT Number</td>
                <td>{customerItem.paymentTerm}</td>
              </tr>

              <tr>
                <td>Reference</td>
                <td>{customerItem.reference}</td>
              </tr>

              <tr>
                <td>Payment Term</td>
                <td>{customerItem.vatNr}</td>
              </tr>

              <tr>
                <td>Website</td>
                <td>
                  <a href={customerItem.website} target="_blank" rel="noreferrer">
                    {customerItem.website}
                  </a>
                </td>
              </tr>

              <tr>
                <td>Email</td>
                <td>
                  <a href={`mailto:${customerItem.email}`}>
                    {customerItem.email}
                  </a>
                </td>
              </tr>

              <tr>
                <td>Phone Number</td>
                <td>{customerItem.phoneNumber}</td>
              </tr>

            </tbody>
          </table>
          <Button onClick={deleteCustomer}>Delete Customer</Button>
          <Link to={`/home/${customerId}/edit`}><Span>Update Customer</Span></Link>
        </Div>
      )
      :
      (
        <span>Laddar data...</span>
      )
      }
    </div>
  )
}
