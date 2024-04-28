import React, { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const changeFirstNameHandler = (e) => {
  //   // console.log("Printing First Name");

  //   setFirstName(e.target.value);
  //   console.log(firstName);
  // };

  // const changeLastNameHandler = (e) => {
  //   // console.log("Printing Last Name");

  //   setLastName(e.target.value);
  //   console.log(lastName);
  // };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
  });

  const changeHandler = (event) => {
    console.log(formData);
    setFormData((prevFormData) => {
      return {
        ...prevFormData, //previous states copy krenge or jisme mai chnage hai use chnage krdenge
        [event.target.name]: event.target.value, // yaha sirf particular property ka data chnage krdega
      };
    });
  };

  return (
    <>
      <form action="#">
        <input
          className="border-2"
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <input
          className="border-2"
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <input
          className="border-2"
          type="email"
          placeholder="Enter your Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <textarea
          className="border-2"
          name="comment"
          id=""
          cols="30"
          onChange={changeHandler}
          value={formData.comment}
          placeholder="Enter Your Comment"
        ></textarea>

        <br />

        <input type="checkbox" name="checkbox" id="" />
      </form>
    </>
  );
}

export default App;
