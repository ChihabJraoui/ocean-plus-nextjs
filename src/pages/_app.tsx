import React from "react";
import type { AppProps } from "next/app";
import "mapbox-gl/dist/mapbox-gl.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import "../../public/css/global.css";
import {PrimeReactProvider} from "primereact/api";

const primeReact = {
	ripple: true
};

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<PrimeReactProvider value={primeReact}>
			<Component {...pageProps} />
		</PrimeReactProvider>
	);
}