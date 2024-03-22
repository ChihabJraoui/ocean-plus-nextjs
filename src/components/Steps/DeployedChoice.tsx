// @ts-ignore
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

const DEPLOYEMENT_OPTIONS = [
	{ key: "OSD", label: "OSD" },
	{ key: "HAB", label: "HAB" },
	{ key: "AR", label: "Artifical reef" },
];

export default function DeployedChoice({
	nextStep,
	prevStep,
	setDeployedChoice,
}) {
	const [choice, setChoice] = useState(DEPLOYEMENT_OPTIONS[0]);
	function handleChange(e: any) {
		setDeployedChoice(e.target.value.key);
    setChoice(e.target.value)
	}

	return (
		<div>
			<h2>Choose reef nature</h2>
			{/* <select className='select-input' id="deployement" onChange={handleChange}>
        <option value="OSD">OSD</option>
        <option value="HAB">HAB</option>
        <option value="AR">Artifical reef</option>
      </select> */}
			<Dropdown
				id="deployement"
				value={choice}
				options={DEPLOYEMENT_OPTIONS}
				onChange={handleChange}
			/>
			<div className="flex justify-end mt-3">
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
