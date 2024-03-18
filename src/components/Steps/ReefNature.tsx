import { useState } from "react";
import React from 'react';

export default function ReefNature({ nextStep, setCoordinates, data}: any) {

  const [disable, setDisable] = useState(true)

  const handleChange = (e: any) => {
    if(e.target.value === 'all')
    {
      setCoordinates(data)
      setDisable(true)
    }
    else
    {
      setCoordinates(data.filter((item) => item.name == e.target.value))
      setDisable(false)
    }
  };
  return (
    <div>
      <h2>Choose reef nature</h2>
      <select id="projects" onChange={handleChange}>
        <option value="all">Select a location</option>
        <option value="desert">Desert</option>
        <option value="normal">Normal</option>
        <option value="rich">Rich (Platinium)</option>
        <option value="special">Special (Gold label)</option>
      </select>
      <button onClick={nextStep} disabled={disable} className="form-button">Next</button>
    </div>
  );
}
