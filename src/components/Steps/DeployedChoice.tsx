// @ts-ignore
import React from 'react';

export default function DeployedChoice({nextStep, prevStep, setDeployedChoice}) {

  function handleChange(e:any) {
    setDeployedChoice(e.target.value)
  }

  return (
    <div>
      <h2>Choose reef nature</h2>
      <select className='select-input' id="deployement" onChange={handleChange}>
        <option value="OSD">OSD</option>
        <option value="HAB">HAB</option>
        <option value="AR">Artifical reef</option>
      </select>
      <button onClick={prevStep} id="button-previous"     className="form-button">Previous</button>
      <button onClick={nextStep} id="button-next" className="form-button">next</button>
    </div>
  );
}
