import { useState } from "react";
import React from 'react';

// @ts-ignore
export default function FormInfos({prevStep}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
  });

  function handleChange(event:any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // async function handleSubmit(event:any) {
  //   event.preventDefault();
  //   // @ts-ignore
  //   const res = await axios.post("http://localhost:3005/devices/BCC", {"area": coordinates, "size": area + " m²", "deployedChoice":deployedChoice, "userData":formData})
  //   window.location.href = './wizard'
  // }

  return (
    <div>
      <form className="form">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <br />
      <label>
        Work Email:
        <input
          type="email"
          name="workEmail"
          value={formData.workEmail}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <br />
      <label>
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="form-input"
        />
      </label>
      <br />
      <button type="submit" className="form-button">Submit</button>
    </form>
    <button onClick={prevStep} id="button-previous" className="form-button">Previous</button>
    </div>
  );
}