import { Button } from "primereact/button";
import { useState } from "react";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";

// @ts-ignore
export default function FormInfos({
	prevStep,
	coordinates,
	area,
	deployedChoice,
}) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		workEmail: "",
		companyName: "",
	});

	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [topicId, setTopicId] = useState();

	function handleChange(event: any) {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	}

	async function handleSubmit(event: any) {
		event.preventDefault();
		setLoading(true);
		// @ts-ignore
		const res = await axios.post("http://localhost:3005/devices/BCC", {
			area: coordinates,
			size: area + " m²",
			deployedChoice: deployedChoice,
			userData: formData,
		});
		if (res.status == 201) {
			setVisible(true);
			setLoading(false);
			setTopicId(res.data);
		}
	}

	return (
		<div style={{ marginTop: "20px" }}>
			<h3>Fill out this form</h3>
			<form className="form" onSubmit={handleSubmit}>
				<span className="p-float-label">
					<InputText
						id="firstName"
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						required
						// className="p-inputtext-sm"
						size="large"
					/>
					<label htmlFor="firstName">First Name</label>
				</span>
				<br />
				<span className="p-float-label">
					<InputText
						id="lastName"
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						required
						// className="p-inputtext-sm"
						size="large"
					/>
					<label htmlFor="lastName">Last Name</label>
				</span>
				<br />
				<span className="p-float-label">
					<InputText
						id="workEmail"
						name="workEmail"
						value={formData.workEmail}
						onChange={handleChange}
						required
						// className="p-inputtext-sm"
						size="large"
					/>
					<label htmlFor="workEmail">Work Email</label>
				</span>
				<br />
				<span className="p-float-label">
					<InputText
						id="companyName"
						name="companyName"
						value={formData.companyName}
						onChange={handleChange}
						required
						// className="p-inputtext-sm"
						size="large"
					/>
					<label htmlFor="companyName">Company Name</label>
				</span>
				<br />

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
						type="submit"
						label="Submit"
						icon="pi pi-send"
						iconPos="left"
						className="text-white"
						size="small"
						loading={loading}
					/>
					<Dialog
						header="Submit Succeeded"
						visible={visible}
						style={{ width: "50vw" }}
						onHide={() => setVisible(false)}
					>
						<p className="m-0">
							Your data is successfully inserted into the blockchain to view click the link below
						</p>
						<a
							target="_blank"
							href={`https://hashscan.io/testnet/topic/`+ topicId}
							rel="noopener noreferrer"
							style={{margin: "auto"}}
						>
							visit link
						</a>
					</Dialog>
				</div>
			</form>
		</div>
	);
}
