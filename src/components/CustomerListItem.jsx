import React from "react";
import { Link } from "react-router-dom";


export default function CustomerListItem({ customerData, }) {
  
  return (
          <tr>
            <td>
              <Link to={`/home/${customerData.id}`}>
                {customerData.name}
              </Link>
            </td>
             <td>
                {customerData.organisationNr}
            </td>
            <td>
                {customerData.vatNr}
            </td>
          </tr>
  );
}
