import React from "react";
import type { AppProps } from 'next/app';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}