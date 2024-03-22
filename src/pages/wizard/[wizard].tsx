import Layout from "@app/components/layout";
import Wizard from "@app/components/Wizard";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import data from "../../data/projects.json";

export default function Explore() {
	const router = useRouter();
	const { wizard } = router.query;
	const [coordinates, setCoordinates] = useState<any>(null);

	if (wizard && !coordinates) {
		setCoordinates(data.filter((item) => item.name == wizard));
	}

	useEffect(() => {
		// console.log(coordinates);
	}, [coordinates]);

	if (coordinates) {
		return (
			<Layout>
				<Wizard data={coordinates}/>
			</Layout>
		);
	}
}
