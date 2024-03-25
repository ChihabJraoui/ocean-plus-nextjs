import { Button } from "primereact/button";
import  { useState } from "react";
import React from 'react';

// @ts-ignore
export default function AreaChoice({ nextStep, prevStep, setArea, data}) {
  const [value, setValue] = useState(100);
  function handleChange(event:any) {
    setValue(event.target.value);
    setArea(value)
    data.first.setter(data.first.start + (value / (5000000 - 100)) * (data.first.max - data.first.min))
    data.second.setter(data.second.start + (value / (5000000 - 100)) * (data.second.max - data.second.min))
    // Min value + (200 / Range span) * (Max value - Min value)
  }

  function updateValue(value:any) {
    let output = document.getElementById('output');
    if (value < 1000000 && output) {
      output.textContent = 'Preserved Area: ' + value + 'm²';
    } else if (value >= 1000000 && output) {
      output.textContent = 'Preserved Area: ' + (value / 1000000).toFixed(2) + 'km²';
    }
  }

  return (
    <div>
      <h3>Choose Area (m²)</h3>

      <input
        type="range"
        id="rangeInput"
        name="rangeInput"
        min="100"
        max="5000000"
        onChange={handleChange}
        // @ts-ignore
        onInput={updateValue(value)}
        className="range-input mb-3"
      />
      
      <p id="output">Preserved Area:  {value}m²</p>

			<div className="flex justify-between">
				<Button
					id="button-previous"
					label="Previous"
					icon="pi pi-chevron-left"
					iconPos="left"
					onClick={prevStep}
					className="text-white"
					size="small"
				/>
				<Button
					id="button-next"
					label="Next"
					icon="pi pi-chevron-right"
					iconPos="right"
					onClick={nextStep}
					className="text-white"
					size="small"
				/>
			</div>
    </div>
  );
}
