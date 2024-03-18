import { useEffect, useRef, useState } from "react";
import React from 'react';
import Image from "next/image";
import Map, { Marker, MapRef } from "react-map-gl";
import marker from "../assets/marker-editor.svg";

export default function MapComp(props:any) {
	//@ts-ignore
	const viewport = ({
		latitude: 28.6448,
		longtitude: 77,
		zoom: 0.5,
		bearing: 0,
		maxZoom: 1,
	});
	const map = useRef<MapRef>();
	const [loop, setLoop] = useState(true);
	const [spin, setSpin] = useState(true);

	useEffect(() => {
		if (spin) {
			setTimeout(() => {
				spinGlobe();
			}, 1000);
		}
		setTimeout(() => {
			map.current?.on("dragend", () => {
			});
			map.current?.on("dragstart", () => {
			});
			map.current?.on("mousemove", () => {
				setSpin(false);
			});
			map.current?.on("mouseout", () => {
				setSpin(true);
			});
		}, 100);
	}, [loop, spin]);

	const secondsPerRevolution = 50;

	function spinGlobe() {
		let distancePerSecond = 360 / secondsPerRevolution;
		const center = map.current?.getCenter();
		// @ts-ignore
		center.lng += distancePerSecond;
		map.current?.easeTo({ center, duration: 1000, easing: (n) => n });
		setLoop(!loop);
	}

	return (
		<div
			id="mapboxgl-map"
			style={{
				position: "relative",
				width: "950px",
				height: "799px",
			}}
		>
			<Map
				id="mapboxgl-map"
				mapboxAccessToken="pk.eyJ1IjoibWVsbW91dGFraSIsImEiOiJjam8xdml4YmswZWtnM3FrdTlzbTI0bmxrIn0.aeG9mjRaPW2wnDRuhWix6Q"
				initialViewState={viewport}
				mapStyle="mapbox://styles/mapbox/satellite-v9"
				// @ts-ignore
				projection="globe"
				// @ts-ignore
				ref={map}
			>
				{props.data.map((item:any, index:any) => {
					return (
						<Marker
							key={index}
							longitude={item.lng}
							latitude={item.ltd}
							onClick={() => (window.location.href = `./explore/${item.name}`)}
							anchor="bottom"
						>
							<Image src={marker} alt="" />
						</Marker>
					);
				})}
			</Map>
		</div>
	);
}
