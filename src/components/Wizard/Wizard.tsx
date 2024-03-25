import React, { useEffect, useState } from "react";
import styles from "./Wizard.module.scss";
import { Layer, Map, Source } from "react-map-gl";
import ReefNature from "../Steps/ReefNature";
import ReefLocation from "../Steps/ReefLocation";
import AreaChoice from "../Steps/AreaChoice";
import DeployedChoice from "../Steps/DeployedChoice";
import FormInfos from "../Steps/FormInfos";
import $ from 'jquery';

export default function Wizard(props) {
	const [step, setStep] = useState(1);
	const [coordinates, setCoordinates] = useState<any>(props.data[0].reefNature);
	const [area, setArea] = useState(100);
	const [deployedChoice, setDeployedChoice] = useState("OSD");
	const [test, setTest] = useState(0);
	const [test1, setTest1] = useState(0);

	String(deployedChoice);

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
					<ReefNature
						nextStep={nextStep}
						setCoordinates={setCoordinates}
						data={props.data[0].reefNature}
					/>
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
				return <FormInfos prevStep={prevStep} />;
			default:
				return null;
		}
	};

	function handleWizardSteps()
	{
		$("#button-next").click(function(){
			if($(".step-wrapper li:last-child").hasClass('completed')){
			  alert("completed");
			   return
			}
			  $(".step-wrapper li.active").addClass("completed").removeClass("active").next('li').addClass("active");  
		  });
		  
		  $("#button-previous").click(function(){
			if($(".step-wrapper li:first-child").hasClass('active')){
			  alert("Already on first step");
			   return
			}
			  $(".step-wrapper li.active").removeClass("active completed").prev('li').addClass("active").removeClass('completed');
			if($(".step-wrapper li:last-child").hasClass('completed')){
			  $(".step-wrapper li:last-child").removeClass('completed').addClass('active')
			}
		  });
	}

	useEffect(() => {
		setTest(coordinates[0].coordinates[0][1]);
		setTest1(coordinates[0].coordinates[1][1]);
		handleWizardSteps()
	}, [step]);

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
		<div className={styles["container"]}>
			<div className={styles["right-container"]}>
				<div className="wizard-container">
					{/* form steps */}
					<ul className="step-wrapper">
						<li id="step-1" className="active">
							<span>
								<a>Step 1</a>
							</span>
							<a>
								<svg className="icon icon-left">
									<use xlinkHref="#icon-left"></use>
								</svg>
							</a>
						</li>
						<li id="step-2" className="">
							<span>
								<a>Step 2</a>
							</span>
							<a>
								<svg className="step step-mid">
									<use xlinkHref="#icon-mid"></use>
								</svg>
							</a>
						</li>
						<li id="step-3" className="">
							<span>
								<a>Step 3</a>
							</span>
							<a>
								<svg className="step step-mid">
									<use xlinkHref="#icon-mid"></use>
								</svg>
							</a>
						</li>
						<li id="step-4" className="">
							<span>
								<a>Step 4</a>
							</span>
							<a>
								<svg className="step step-mid">
									<use xlinkHref="#icon-mid"></use>
								</svg>
							</a>
						</li>
						<li id="step-5" className="">
							<span>
								<a>Step 5</a>
							</span>
							<a>
								<svg className="step step-right">
									<use xlinkHref="#icon-right"></use>
								</svg>
							</a>
						</li>
					</ul>
					{renderStep()}
				</div>
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
						longitude: props.data[0].lng,
						latitude: props.data[0].ltd,
						zoom: 13,
					}}
					scrollZoom={false}
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
