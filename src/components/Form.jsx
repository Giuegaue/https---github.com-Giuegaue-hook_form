import React, { useState } from 'react';

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  return (        
  <form onSubmit={ createUser }>
    <div>
        <label>First Name: </label> 
        <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
    </div>
    <div>
        <label>Last Name: </label> 
        <input type="text" onChange={ (e) => setLastName(e.target.value) } />
    </div>
    <div>
        <label>Email Address: </label> 
        <input type="text" onChange={ (e) => setEmail(e.target.value) } />
    </div>
    <div>
        <label>Password: </label>
        <input type="text" onChange={ (e) => setPassword(e.target.value) } />
    </div>
    <div>
        <label>Confirm Password: </label>
        <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
    </div>
    <input type="submit" value="Create User" />
    <div>
      First Name: {firstName}
    </div>
    <div>
      Last Name: {lastName}
    </div>
    <div>
      email : {email}
    </div>
    <div>
      password : {password}
    </div>
    <div>
      Confirm Password : {confirmPassword}
    </div>
  </form>
  );
};

export default Form;
