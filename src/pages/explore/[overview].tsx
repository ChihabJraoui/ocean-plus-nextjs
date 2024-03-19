import { useEffect, useRef, useState } from "react";
import { Layer, Map, MapRef, Source } from "react-map-gl";
import Layout from "@app/components/layout";
import React from "react";
import { useRouter } from "next/router";
import data from "../../data/Projects.json";

export default function Overview() {
	const mapRef: any = useRef<MapRef>(null);
	const [coordinates, setCoordinates] = useState<any>(null);
	const router = useRouter();
	const { overview } = router.query;
	var viewport:any = null;
	var geojson: any;

	if (overview && !coordinates) {
		setCoordinates(data.filter((item) => item.name == overview));
	}

	// @ts-ignore
	if (coordinates) {
		viewport = {
			longitude: coordinates[0].lng,
			latitude: coordinates[0].ltd,
			zoom: 2,
			transitionDuration: 2000,
		};
		geojson = {
			type: "FeatureCollection",
			features: [
				// @ts-ignore
				{
					type: "Feature",
					geometry: {
						type: "Polygon",
						coordinates: [coordinates[0].coordinates],
					},
				},
			],
		};
	}

	const layerStyle = {
		id: "outline",
		type: "line",
		source: "maine",
		layout: {},
		paint: {
			"line-color": "#FFF",
			"line-width": 3,
		},
	};

	var angle = 0;
	function spinGlobe() {
		angle += 0.3;
		mapRef.current?.setBearing(angle);
	}
	useEffect(() => {
		const targetPitch = 50;
		const targetZoom = 12;
		const duration = 3000;
		const startTimestamp = performance.now();

		const timer = setTimeout(() => {
			const map = mapRef.current?.getMap();
			function animateMap(timestamp: any) {
				const progress = timestamp - startTimestamp;

				if (progress < duration) {
					const currentPitch = map.getPitch();
					const newBearing =
						currentPitch + (targetPitch - currentPitch) * (progress / duration);
					const currentZoom = map.getZoom();
					const newZoom =
						currentZoom + (targetZoom - currentZoom) * (progress / duration);

					map.easeTo({ pitch: newBearing, zoom: newZoom });
					requestAnimationFrame(animateMap);
				} else {
					map.easeTo({ pitch: targetPitch, zoom: targetZoom });
				}
			}
			requestAnimationFrame(animateMap);
		}, 2000);

		// Clean up on unmount
		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInterval(() => {
				spinGlobe();
			}, 50);
		}, 5000);

		return () => clearTimeout(timer)
	});

	if (coordinates) {
		return (
			<Layout>
				<div id="wrapper">
					<div className="overview" style={{ width: "100%", height: "100vh" }}>
						<Map
							ref={mapRef}
							initialViewState={viewport}
							scrollZoom={false}
							mapStyle="mapbox://styles/mapbox/satellite-v9"
							mapboxAccessToken="pk.eyJ1IjoibWVsbW91dGFraSIsImEiOiJjam8xdml4YmswZWtnM3FrdTlzbTI0bmxrIn0.aeG9mjRaPW2wnDRuhWix6Q"
							// @ts-ignore
							projection="globe"
						>
							<Source id="my-data" type="geojson" data={geojson}>
								{/* @ts-ignore */}
								<Layer {...layerStyle} />
							</Source>
						</Map>
					</div>
				</div>
			</Layout>
		);
	}
}
