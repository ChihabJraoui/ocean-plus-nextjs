import { useEffect, useRef, useState } from "react";
import { Layer, Map, MapRef, Source } from "react-map-gl";
import type { FeatureCollection } from "geojson";
import Layout from "@app/components/layout";

export default function overview() {
	const mapRef: any = useRef<MapRef>(null);

	// @ts-ignore
	const [viewport, setViewport] = useState({
		longitude: 39.15,
		latitude: 21.44,
		zoom: 2,
		transitionDuration: 2000,
	});
	const geojson: FeatureCollection = {
		type: "FeatureCollection",
		features: [
			// @ts-ignore
			{
				type: "Feature",
				geometry: {
					type: "Polygon",
					coordinates: [
						[
							[39.18, 21.42],
							[39.14, 21.42],
							[39.13, 21.43],
							[39.14, 21.46],
							[39.18, 21.42],
						],
					],
				},
			},
		],
	};
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
		angle += 0.5;
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
		setTimeout(() => {
			setInterval(() => {
				spinGlobe();
			}, 50);
		}, 5000);
	});

	return (
		<Layout>
			<div id="wrapper">
				<div className="overview" style={{width: "100%", height: "100vh"}}>
					<Map
						ref={mapRef}
						initialViewState={viewport}
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
