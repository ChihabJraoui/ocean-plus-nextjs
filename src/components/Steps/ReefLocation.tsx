import { Button } from "primereact/button";
import React from "react";

// @ts-ignore
export default function ReefLocation({ nextStep, prevStep, area }) {
	return (
		<div>
			<h3>Area chosen</h3>
			<p>{area[0].name} area</p>
			<p>{area[0].details}</p>
			<p>{area[0].SC}</p>

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
