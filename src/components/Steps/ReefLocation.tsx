import React from 'react';

// @ts-ignore
export default function ReefLocation({ nextStep, prevStep, area }) {

  return (
    <div>
      <h2>Area chosen</h2>
      <p>{area[0].name} area </p>
      <p>{area[0].details}</p>
      <p>{area[0].SC}</p>
      <button onClick={prevStep} id="button-previous"     className="form-button">Previous</button>
      <button onClick={nextStep} id="button-next" className="form-button">Next</button>
    </div>
  );
}
