import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [balance, setBalance] = useState(0);

  return (
    <div className="App">
      <form id="personal-form" onSubmit={(e)=> {
        e.preventDefault();

        console.log(name);
        console.log(age);
        console.log(balance);
      }}>

        <label htmlFor="name">Name </label>
        <input type="text" name="name" onChange={(e) => {
          setName(e.target.value )
        }}></input>
      
        <label htmlFor="age">Age </label>
        <input type="number" name="age" onChange={(e) => {
          setAge(e.target.value)
        }}></input>

        <label htmlFor="balance">Balance </label>
        <input type="number" name="balance" onChange={(e) => {
          setBalance(e.target.value)
        }}></input>
        <button type="submit">send</button>
      </form>

      <form id="request">
        <label htmlFor="customer-id">Customer ID</label>
        <input type="number" name="customer-id"></input>
        <button type="submit">request</button>
      </form>
    </div>
  );
}

export default App;
