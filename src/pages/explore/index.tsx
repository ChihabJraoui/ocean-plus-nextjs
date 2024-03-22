import React from 'react';
import Layout from "@app/components/layout";
import {useState} from "react";
import Project from "@app/components/Project/Project";
import projectsData from "../../data/projects.json";
import MapComp from "@app/components/MapComp";
import SelectComp from "@app/components/SelectComp";
import styles from "../../../public/sass/explore.module.scss";

export default function Explore() {

	const [projects, setProjects] = useState(projectsData);

	return (
		<Layout>
			<div className={styles["explore-container"]}>
					<div className={styles["projects-container"]}>

						<h6 className="font-bold text-2xl">Support Pachama Projects</h6>

						<p>Pachama has evaluated over 150 forest
							carbon projects across 14 countries to help you identify the highest quality projects. Here,
							you&apos;ll find projects with credits currently available for purchase. Each project is carefully vetted
							by Pachama&apos;s technology and forest scientists to make sure your investment reduces carbon, protects
							wildlife and supports local communities.</p>

							<SelectComp data={projectsData}
													setData={setProjects} />

							{/* Projects */}
							<ul id="projects-list"
									data-testid="project-list"
									aria-label="projects"
									className={styles["projects-list"]}>
								{projects.map((item, i) => (
									<li key={i} className={styles["css-x5gdjb"]}>
										<Project data={item} />
									</li>
								))}
							</ul>
					</div>
					<div className={styles["css-1wrwd7y"]}>
						<div className="[&amp;_.mapboxgl-ctrl-bottom-left]:d_none! css-t0ymut">
							<div id="mapboxgl-map" style={{"position": "relative", "width": "950px", "height": "799px"}}>
								<MapComp data={projects}/>
							</div>
						</div>
					</div>
			</div>
		</Layout>
	);
}