import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import CustomerAPIItem from '../components/CustomerAPIItem'

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id
  const [customerItem, setCustomerItem] = useState(null)
  const history = useHistory()



  // function callCustomerAPI(customerId, method, body) {
  //    const urlBase = "https://frebi.willandskill.eu/api/v1/customers/"
  //    let url
  //    if (customerId == null){
  //      url = urlBase
  //    }else{
  //      url = urlBase+customerId+"/"
  //    }
  //    const token = localStorage.getItem("CUSTOMERS")
  //    return(
  //    fetch(url, {
  //      method: method,
  //      body: body,
  //      headers: {
  //        "Content-Type": "application/json",
  //        "Authorization": `Bearer ${token}`
  //      }
  //    })

  //    )
  // }



  // function getCustomerItem() {
  //   const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
  //   const token = localStorage.getItem("CUSTOMERS")
  //   fetch(url, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => setCustomerItem(data))
  // }

  function deleteCustomer() {
    // const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`
    // const token = localStorage.getItem("CUSTOMERS")
    // fetch(url, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`
    //   }
    // })
    CustomerAPIItem(customerId, "DELETE", null)
    .then(() => history.push('/home'))
  }

  useEffect( () => {
    // getCustomerItem()
    CustomerAPIItem(customerId, "GET", null)

    .then(res => res.json())
    .then(data => setCustomerItem(data))

  }, [])

  return (
    <div>
      {customerItem 
      ? (
        <div>
          <h1>{customerItem.name}</h1>
          <table>
            <tbody>
              <tr>
                <td>Organisation Number</td>
                <td>{customerItem.organisationNr}</td>
              </tr>

              <tr>
                <td>Payment Term</td>
                <td>{customerItem.vatNr}</td>
              </tr>

              <tr>
                <td>Reference</td>
                <td>{customerItem.reference}</td>
              </tr>

              <tr>
                <td>VAT Number</td>
                <td>{customerItem.paymentTerm}</td>
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
          <button onClick={deleteCustomer}>Delete Customer</button>
          <Link to={`/home/${customerId}/edit`}>Update Customer</Link> 
        </div>
      )
      :
      (
        <span>Laddar data...</span>
      )
      }
    </div>
  )
}
