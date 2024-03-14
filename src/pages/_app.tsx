import React from "react";
import type { AppProps } from "next/app";
import "mapbox-gl/dist/mapbox-gl.css";
import "../../public/css/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}