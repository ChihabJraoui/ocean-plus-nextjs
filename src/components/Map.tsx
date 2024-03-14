import React, {useEffect, useState} from "react";
import mapboxgl, {Map} from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoibWVsbW91dGFraSIsImEiOiJjam8xdml4YmswZWtnM3FrdTlzbTI0bmxrIn0.aeG9mjRaPW2wnDRuhWix6Q';

const markers: any[] = [
];

function createMarkerElement(title) {
	const element = document.createElement('div');
	element.className = 'marker';
	element.title = title;
	return element;
}

export default function MapBox() {
	const [loop, setLoop] = useState(true);
	const [spin, setSpin] = useState(true);
	const [interv, setInterv] = useState<any>(null);

	let map: Map;
	const secondsPerRevolution = 50;

	function spinGlobe() {
		let distancePerSecond = 360 / secondsPerRevolution;
		const center = map?.getCenter();
		center.lng += distancePerSecond;
		map?.easeTo({center, duration: 1000, easing: (n) => n});
		setLoop(!loop)
	}

	useEffect(() => {
		if (map && spin) {
			setInterv(setInterval(() => {
				spinGlobe()
			}, 100))
		}
		if (!spin) {
			clearInterval(interv)
		}
	}, [loop, spin]);

	useEffect(() => {

		if (localStorage.getItem("country")) {
			let country = localStorage.getItem("country");

			// const dropdown = document.getElementById("select");
			// dropdown.value = country;

			switch (country) {
				case "usa":
					markers.push(
						{ coordinates: [-118.39, 33.84], page: 'index1.html' }
					);
					break;
				case "uae":
					markers.push(
						{ coordinates: [39.15, 21.44], page: 'index.html' }
					);
					break;
				case "brazil":
					markers.push(
						{ coordinates: [-38.41, -12.98], page: 'index3.html' }
					);
					break;
				case "india":
					markers.push(
						{ coordinates: [74.09, 14.88], page: 'index4.html' }
					);
					break;
				default:
			}
		}
		else {
			markers.push(
				{ coordinates: [-118.39, 33.84], page: 'index1.html' },
				{ coordinates: [39.15, 21.44], page: 'index.html' },
				{ coordinates: [-38.41, -12.98], page: 'index3.html' },
				{ coordinates: [74.09, 14.88], page: 'index4.html' }
			);
		}

		map = new mapboxgl.Map({
			container: 'map',
			projection: {
				name: "globe"
			},
			style: "mapbox://styles/mapbox/satellite-v9",
			center: [-98, 38.88],
			zoom: 0.9,
			maxZoom: 1
		});

		map.on("mousemove", () => {
			setSpin(false)
		});
		map.on("mouseout", () => {
			setSpin(true)
			setInterv(setInterval(() => {
				spinGlobe()
			}, 100))
		});

		markers.forEach(marker => {
			const markerElement = createMarkerElement(marker.title);
			markerElement.addEventListener('click', () => {
				window.location.href = `./projectDetails/${marker.page}`;
			});

			new mapboxgl.Marker({element: markerElement})
				.setLngLat(marker.coordinates)
				.addTo(map);
		});

		return () => {
			map.remove()
		};
	}, []);


	return <div id="map" style={{ width: '100%', height: '100%' }}/>;
}