import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [balance, setBalance] = useState(0);
  const [customerID, setCustomerID] = useState(0);

  const updateNameOnChange = (e) => {
    setName(e.target.value);
  };

  const updateAgeOnChange = (e) => {
    setAge(e.target.value);
  };

  const updateBalanceOnChange = (e) => {
    setBalance(e.target.value);
  };

  const updateCustomerIdOnChange = (e) => {
    setCustomerID(e.target.value);
  };

  const postRequest = async (url, body) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.log("error response is not okay");
    }
  };

  const onSubmitForm = (e) => {
    //once button take state variables and send through api service
    e.preventDefault();
    const userInfo = {
      name,
      age,
      balance,
    };
    postRequest("http://localhost:8080", userInfo);
    // console.log(name);
    // console.log(age);
    // console.log(balance);
  };

  const loadUser = async () => {
    const resp = await fetch("http://localhost:8080/customer?customer-id=1");
    const json = await resp.json();
    console.log(json);
  };

  const onRequestForm = (e) => {
    //once button take state variables and send through api service
    e.preventDefault();
    console.log(customerID);
    loadUser();
  };

  return (
    <div className="App">
      <form id="personal-form" onSubmit={(e) => onSubmitForm(e)}>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" onChange={updateNameOnChange}></input>

        <label htmlFor="age">Age </label>
        <input type="number" name="age" onChange={updateAgeOnChange}></input>

        <label htmlFor="balance">Balance </label>
        <input
          type="number"
          name="balance"
          onChange={updateBalanceOnChange}
        ></input>
        <button type="submit">send</button>
      </form>

      <form id="request" onSubmit={(e) => onRequestForm(e)}>
        <label htmlFor="customerID">Customer ID</label>
        <input
          type="number"
          name="customerID"
          onChange={updateCustomerIdOnChange}
        ></input>
        <button type="submit">request</button>
      </form>
    </div>
  );
}

export default App;
