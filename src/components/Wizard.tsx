import { useEffect, useState } from "react";
import { Layer, Map, Source } from "react-map-gl";
import ReefNature from "./Steps/ReefNature";
import ReefLocation from "./Steps/ReefLocation";
import AreaChoice from "./Steps/AreaChoice";
import data from "../data/Projects.json";
import DeployedChoice from "./Steps/DeployedChoice";
import FormInfos from "./Steps/FormInfos";
import React from 'react';

export default function Wizard() {
	const [step, setStep] = useState(1);
	const [coordinates, setCoordinates] = useState<any>(data[0].reefNature);
	const [area, setArea] = useState(100);
	const [deployedChoice, setDeployedChoice] = useState("OSD");
	const [test, setTest] = useState(0);
	const [test1, setTest1] = useState(0);

	String(deployedChoice)

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
		setArea(100);
	};

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<ReefNature nextStep={nextStep} setCoordinates={setCoordinates} />
				);
			case 2:
				return (
					<ReefLocation
						nextStep={nextStep}
						prevStep={prevStep}
						area={coordinates}
					/>
				);
			case 3:
				return (
					<AreaChoice
						nextStep={nextStep}
						prevStep={prevStep}
						setArea={setArea}
						data={{
							first: {
								setter: setTest,
								start: coordinates[0].coordinates[0][1],
								min: coordinates[0].coordinates[0][1],
								max: coordinates[0].coordinates[3][1],
							},
							second: {
								setter: setTest1,
								start: coordinates[0].coordinates[1][1],
								min: coordinates[0].coordinates[1][1],
								max: coordinates[0].coordinates[2][1],
							},
						}}
					/>
				);
			case 4:
				return (
					<DeployedChoice
						nextStep={nextStep}
						prevStep={prevStep}
						setDeployedChoice={setDeployedChoice}
					/>
				);
			case 5:
				return (
					<FormInfos
						prevStep={prevStep}
					/>
				);
			default:
				return null;
		}
	};

	useEffect(() => {
		setTest(coordinates[0].coordinates[0][1]);
		setTest1(coordinates[0].coordinates[1][1]);
	}, []);

	const fillColor = [255, 0, 0, 100];
	const handleMapClick = (e: any) => {
		console.log(e.lngLat);
	};

	const coloring = {
		type: "Feature",
		geometry: {
			type: "Polygon",
			coordinates: [
				[
					[coordinates[0].coordinates[0][0], coordinates[0].coordinates[0][1]],
					[coordinates[0].coordinates[1][0], coordinates[0].coordinates[1][1]],
					[coordinates[0].coordinates[2][0], test1],
					[coordinates[0].coordinates[3][0], test],
					[coordinates[0].coordinates[4][0], coordinates[0].coordinates[4][1]],
				],
			],
		},
	};

	return (
		<div
			className="container1"
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-around",
				alignItems: "center",
				backgroundColor: "beige",
			}}
		>
			<div
				className="right-container"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<div>{renderStep()}</div>
			</div>
			<div
				className="map1"
				style={{
					width: "600px",
					height: "400px",
					borderRadius: "20px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Map
					mapboxAccessToken="pk.eyJ1IjoibWVsbW91dGFraSIsImEiOiJjam8xdml4YmswZWtnM3FrdTlzbTI0bmxrIn0.aeG9mjRaPW2wnDRuhWix6Q"
					initialViewState={{
						longitude: 39.15,
						latitude: 21.44,
						zoom: 13,
					}}
					cursor="crosshair"
					style={{ borderRadius: 20 }}
					mapStyle="mapbox://styles/mapbox/satellite-v8"
					onClick={handleMapClick}
				>
					{coordinates.map((item, index) => {
						return (
							<Source
								key={index}
								id={`my-data-${index}`}
								type="geojson"
								data={{
									type: "FeatureCollection",
									features: [
										// @ts-ignore
										{
											type: "Feature",
											geometry: {
												type: "Polygon",
												coordinates: [item.coordinates],
											},
										},
									],
								}}
							>
								{/* @ts-ignore */}
								<Layer
									{...{
										id: `my-data-${index}`,
										type: "line",
										source: `my-data-${index}`,
										layout: {},
										paint: {
											"fill-color": fillColor,
											"fill-opacity": 0.5,
											"line-color": item.color,
											"line-width": 1,
										},
									}}
								/>
							</Source>
						);
					})}
					{step == 3 && area != 100 ? (
						// @ts-ignore
						<Source id="polygon1" type="geojson" data={coloring}>
							<Layer
								id="polygon1"
								type="fill"
								paint={{
									"fill-color": coordinates[0].color,
									"fill-opacity": 0.2,
								}}
							/>
						</Source>
					) : (
						""
					)}
				</Map>
			</div>
		</div>
	);
}
