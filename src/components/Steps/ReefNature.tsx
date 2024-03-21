import { useState } from "react";
import React from 'react';
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";

const REEF_NATURE_OPTIONS = [
	{ key: "all", label: "Select a location"},
	{ key: "desert", label: "Desert"},
	{ key: "normal", label: "Normal"},
	{ key: "rich", label: "Rich (Platinium)"},
	{ key: "special", label: "Special (Gold label)"},
];

export default function ReefNature({ nextStep, setCoordinates, data}: any) {

  const [selectedItem, setSelectedItem] = useState(REEF_NATURE_OPTIONS[0]);
  const [disable, setDisable] = useState(true);

  const handleChange = (e: any) => {

		setSelectedItem(e);

    if(e.key === 'all') {
      setCoordinates(data)
      setDisable(true)
    } else {
      setCoordinates(data.filter((item) => item.name == e.key))
      setDisable(false)
    }
  };

  return (
    <div>
      <h3>Choose reef nature</h3>

			<Dropdown id="projects"
								value={selectedItem}
								options={REEF_NATURE_OPTIONS}
								onChange={(e) => handleChange(e.value)} />

			<div className="flex justify-end mt-3">
				<Button id="button-next"
								label="Next"
								icon="pi pi-chevron-right"
								iconPos="right"
								onClick={nextStep}
								disabled={disable}
								className="text-white" />
			</div>
    </div>
  );
}