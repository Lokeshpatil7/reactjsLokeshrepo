import { useEffect, useState } from "react";
import { getCustomersById, getCustomersList } from "./Customer.service";

export default () => {
  const [customersList, setCustomersList] = useState([]);
  useEffect(() => {
    getCustomersList().then((response) => {
      if (response && response.data) {
        setCustomersList(response.data);
      }
    });
  }, []);

  const onGetDetailsClickHandler = (customerId) => {
    getCustomersById(customerId).then((response) => {
      if (response && response.data) {
        alert("Name: " + response.data.customerName);
      }
    });
  };

  return (
    <>
      <h1 className="text-center">Customers List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {customersList.map((customer) => {
            return (
              <tr key={customer.customerId}>
                <td>{customer.customerName}</td>
                <td>{customer.customerContact}</td>
                <td>
                  <button
                    onClick={() => {
                      onGetDetailsClickHandler(customer.customerId);
                    }}
                  >
                    Get Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
