import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [balance, setBalance] = useState(0);
  const [customerID, setCustomerID] = useState(0);


  const postRequest = async (url, body) => {
    const response = await fetch(url,{
      method: "POST",
      headers:{
        'content-type': 'application/json',
      },
      body:JSON.stringify(body)

    })

    if(!response.ok) {
      console.log("error response is not okay")
    }
    
   }

  const onSubmitForm = (e) => {
    //once button take state variables and send through api service 
    e.preventDefault();
    const userInfo = {
      name,
      age,
      balance
    }
    postRequest("http://localhost:8080", userInfo)
    // console.log(name);
    // console.log(age);
    // console.log(balance);
  };

  const onRequestForm = (e) => {
    //once button take state variables and send through api service 
    e.preventDefault();
    console.log(customerID);
  };

  return (
    <div className="App">
      <form id="personal-form" onSubmit={(e)=> onSubmitForm(e)}>

        <label htmlFor="name">Name </label>
        <input type="text" name="name" onChange={(e) => {
          setName(e.target.value);
        }}></input>
      
        <label htmlFor="age">Age </label>
        <input type="number" name="age" onChange={(e) => {
          setAge(e.target.value);
        }}></input>

        <label htmlFor="balance">Balance </label>
        <input type="number" name="balance" onChange={(e) => {
          setBalance(e.target.value);
        }}></input>
        <button type="submit">send</button>
      </form>

      <form id="request" onSubmit={(e) => onRequestForm(e)}>
        <label htmlFor="customerID">Customer ID</label>
        <input type="number" name="customerID" onChange={(e) => {
          setCustomerID(e.target.value)
        }}></input>
        <button type="submit">request</button>
      </form>
    </div>
  );
}

export default App;
