import React from 'react';

export default function CustomerAPIItem(customerId, method, body){

        const urlBase = "https://frebi.willandskill.eu/api/v1/customers/"
        let url
        if (customerId == null){
          url = urlBase
        }else if (customerId === "me"){
            url = "https://frebi.willandskill.eu/api/v1/me/"
        }else{
          url = urlBase+customerId+"/"
        }
        const token = localStorage.getItem("CUSTOMERS")
        return(
        fetch(url, {
          method: method,
          body: body,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
   
        )
     }
