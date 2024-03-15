import React from 'react';

// @ts-ignore
export default function ReefLocation({ nextStep, prevStep, area }) {

  return (
    <div>
      <h2>Area chosen</h2>
      <p>{area[0].name} area </p>
      <p>{area[0].details}</p>
      <p>{area[0].SC}</p>
      <button onClick={prevStep} className="form-button">Previous</button>
      <button onClick={nextStep} className="form-button">Next</button>
    </div>
  );
}
