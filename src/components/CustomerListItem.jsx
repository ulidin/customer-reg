import React from "react";
import { Link } from "react-router-dom";
import {Table} from "react-bootstrap"

export default function CustomerListItem({ customerData }) {
  return (
    <div className="table-responsive">
      <Table striped bordered hover className="table">
        {/* <thead>
          <tr>
            <th>Customer Name</th>
            <th>Oraganisation number</th>
            <th>Vat nr</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td>
              <Link to={`/home/${customerData.id}`}>
                {customerData.name}
              </Link>
            </td>
             <td>
              {/* <Link to={`/home/${customerData.organisationNr}`}> */}
                {customerData.organisationNr}
              {/* </Link> */}
            </td>
            <td>
              {/* <Link to={`/home/${customerData.vatNr}`}> */}
                {customerData.vatNr}
              {/* </Link> */}
            </td>
          </tr>
        </tbody>
      </Table>

      {/* <Link to={`/home/${customerData.id}`}>
                {customerData.name}
              </Link>

        <Link to={`/home/${customerData.organisationNr}`}>
          {customerData.organisationNr}
        </Link>
      <Link to={`/home/${customerData.vatNr}`}>
                {customerData.vatNr}
        </Link> */}

    </div>
  );
}
