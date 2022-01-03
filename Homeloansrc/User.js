import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default () => {
  const [customerList, setCustomerList] = useState([]);

  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerMiddleName, setCustomerMiddleName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [email, setCustomerEmail] = useState("");
  const [password, setCustomerPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [adhaarNumber, setAdhaarNumber] = useState("");
  const [phoneNumber, setCustomerPhoneNumber] = useState(0);
  const [panCard, setPanCard] = useState("");
  const [nationality, setNationality] = useState("");

  const [isEditMode, setEditMode] = useState(false);
  const [customerId, setCustomerId] = useState(0);
  const [selectedCustomerId, setSelectedCustomerId] = useState(-1);
  const [editObject, setEditObject] = useState({});
  const [customerObject, setCustomerObject] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    nationality: "",
    panCard: "",
    adhaarNumber: "",
  });

  const FetchData = () => {
    axios.get("http://localhost:8080/cust/getAll").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setCustomerList(response.data);
      }
    });
  };

  useEffect(() => {}, []);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!isEditMode) {
      axios
        .post("http://localhost:8080/cust/Add", {
          ...customerObject,
        })
        .then((response) => {
          console.log(response);
          alert("Added");

          setCustomerObject({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            phoneNumber: "",
            nationality: "",
            panCard: "",
            adhaarNumber: "",
          });
          FetchData();
        });
    }
  };

  const onDeleteHandler = (customerId) => {
    axios
      .delete("http://localhost:8080/cust/delete/" + customerId)
      .then((response) => {
        console.log(response);
        alert("Deleted");
        FetchData();
      });
  };

  const onEdit = (customerObject) => {
    console.log(customerObject);
    setCustomerFirstName(customerObject.customerFirstName);
    setCustomerMiddleName(customerObject.customerMiddleName);
    setCustomerLastName(customerObject.customerLastName);
    setCustomerPhoneNumber(customerObject.phoneNumber);
    setAdhaarNumber(customerObject.adhaarNumber);
    setCustomerEmail(customerObject.email);
    setCustomerPassword(customerObject.password);
    setNationality(customerObject.nationality);
    setPanCard(customerObject.panCard);
    setDateOfBirth(customerObject.dateOfBirth);

    setCustomerId(customerObject.customerId);
    setSelectedCustomerId(customerObject.customerId);
    setEditObject({
      ...customerObject,
    });
  };

  const onEditObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };
  const onCustomerObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setCustomerObject({
        ...customerObject,
        [name]: value,
      });
    }
  };

  const onResetRowHandler = () => {
    setSelectedCustomerId(-1);
    setEditObject({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      password: "",
      dateOfBirth: "",
      phoneNumber: "",
      nationality: "",
      panCard: "",
      adhaarNumber: "",
    });
  };
  const onUpdateRow = () => {
    if (customerId > 0) {
      axios
        .put("http://localhost:8080/cust/update/" + customerId, {
          customerId: customerId,

          ...editObject,
        })
        .then((response) => {
          if (response) {
            FetchData();
            alert("updated");
            onResetRowHandler();
          }
        });
    }
  };

  return (
    <>
      <h1 className="text-center">Customer Details </h1>
      <form className="container" onSubmit={onFormSubmit}>
        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            {" "}
            First Name
          </label>
          <input
            id="name"
            className="form-control"
            name="firstName"
            value={customerObject.firstName}
            onChange={onCustomerObjectChangeHandler}
            placeholder="Please Enter Your first Name"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            {" "}
            Middle Name
          </label>
          <input
            id="name"
            className="form-control"
            name="middleName"
            value={customerObject.middleName}
            onChange={onCustomerObjectChangeHandler}
            placeholder="Please Enter Your Middle Name"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            {" "}
            Last Name
          </label>
          <input
            id="name"
            className="form-control"
            name="lastName"
            value={customerObject.lastName}
            onChange={onCustomerObjectChangeHandler}
            placeholder="Please Enter Your Last Name"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="destinationlocation" className="form-label">
            Email{" "}
          </label>
          <input
            id="destinationLocation"
            className="form-control"
            name="email"
            value={customerObject.email}
            onChange={onCustomerObjectChangeHandler}
            placeholder="Please EnterYour Email"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="arrivaldatetime" className="form-label">
            password
          </label>
          <input
            type="password"
            id="arrivaldatetime"
            className="form-control"
            placeholder="Please EnterYour Password"
            name="password"
            value={customerObject.password}
            onChange={onCustomerObjectChangeHandler}
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="sourcelocation" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="sourcelocation"
            className="form-control"
            name="phoneNumber"
            value={customerObject.phoneNumber}
            onChange={onCustomerObjectChangeHandler}
            placeholder="Please Enter Your Phone Number"
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="departuredatetime" className="form-label">
            Date Of Birth
          </label>
          <input
            id="departuredatetime"
            className="form-control"
            type="date"
            name="dateOfBirth"
            placeholder="Please EnterYour Date Of Birth"
            value={customerObject.dateOfBirth}
            onChange={onCustomerObjectChangeHandler}
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="name" className="form-label">
            {" "}
            Nationality
          </label>
          <input
            type="text"
            className="form-control"
            name="nationality"
            value={customerObject.nationality}
            onChange={onCustomerObjectChangeHandler}
            placeholder="Please Enter Your Nationality"
          />
        </div>
        <div className="col-md-5">
          <label htmlFor="businessseatprice" className="form-label">
            PanCard
          </label>
          <input
            className="form-control"
            name="panCard"
            placeholder="Please EnterYour Pancard"
            value={customerObject.panCard}
            onChange={onCustomerObjectChangeHandler}
          />
        </div>

        <div className="col-md-5">
          <label htmlFor="businessseatprice" className="form-label">
            AdhaarNumber
          </label>
          <input
            id="businessseatprice"
            className="form-control"
            name="adhaarNumber"
            placeholder="Please EnterYour AdhaarNumber"
            value={customerObject.adhaarNumber}
            onChange={onCustomerObjectChangeHandler}
          />
        </div>
        <br />
        <div className="col-md-5">
          <button type="submit" className="btn btn-success">
            {isEditMode ? "update" : "submit"}
          </button>
          {isEditMode && <button>Rest:</button>}
        </div>
      </form>
      <h1>Customer List</h1>
      <table className="table table-bordered border border-info">
        <thead>
          <tr className="table">
            <th>CustomerId</th>
            <th>FirstName</th>
            <th>MiddleName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Password</th>
            <th>phoneNumber</th>
            <th>dateOfBirth</th>
            <th> Nationality </th>
            <th>panCard</th>
            <th>AdhaarNumber</th>

            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map((customer) => {
            return (
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="firstName"
                      value={editObject.firstName}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.firstName
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="middleName"
                      value={editObject.middleName}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.middleName
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="lastName"
                      value={editObject.lastName}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.lastName
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="email"
                      value={editObject.email}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.email
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="password"
                      value={editObject.password}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.password
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="phonenumber"
                      value={editObject.phoneNumber}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.phoneNumber
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="dateOfBirth"
                      value={editObject.dateOfBirth}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.dateOfBirth
                  )}
                </td>

                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="nationality"
                      value={editObject.nationality}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.nationality
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="pancard"
                      value={editObject.panCard}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.panCard
                  )}
                </td>
                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <input
                      name="adhaarnumber"
                      value={editObject.adhaarNumber}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    customer.adhaarNumber
                  )}
                </td>

                <td>
                  {selectedCustomerId === customer.customerId ? (
                    <>
                      <button className="btn btn-info" onClick={onUpdateRow}>
                        Update
                      </button>
                      <button onClick={onResetRowHandler}> Reset</button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          onDeleteHandler(customer.customerId);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn-btn-secondary"
                        onClick={() => {
                          onEdit(customer);
                        }}
                      >
                        Edit:
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
