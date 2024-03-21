import React from 'react';
import Layout from "@app/components/layout";
import {useState} from "react";
import Project from "@app/components/Project/Project";
import data from "../../data/Projects.json";
import MapComp from "@app/components/MapComp";
import SelectComp from "@app/components/SelectComp";
import styles from "../../../public/sass/explore.module.scss";

export default function Explore() {
	const [sharedData, setSharedData] = useState(data);

	return (
		<Layout>
			<div className={styles["css-1dhxv6h"]}>
				<div className={styles["css-1llqle4"]}></div>
				<div className={styles["css-pwckxr"]}>
					<div className={styles["css-1smmmxx"]}>
						<div className={styles["css-og8lvl"]}>
							<div className="d_flex items_flex-start gap_10px flex_column pt_6 pb_2">
								<h6 className="font_Chromatic,_sans-serif! text_text.heavy h6 text_text.heavy font_heavy">Support
									Pachama Projects</h6>
								<p className="text_text.medium text_text.heavy font_body fs_14px">Pachama has evaluated over 150 forest
									carbon projects across 14 countries to help you identify the highest quality projects. Here,
									you&apos;ll
									find projects with credits currently available for purchase. Each project is carefully vetted by
									Pachama&apos;s technology and forest scientists to make sure your investment reduces carbon, protects
									wildlife and supports local communities.</p>
							</div>
							<SelectComp sharedData={sharedData} setSharedData={setSharedData} data={data}/>

							{/* Projects */}
							<ul id="projects-list"
									data-testid="project-list"
									aria-label="projects"
									className={styles["css-iwkjvg"]}>
								{sharedData.map((item, i) => (
									<li key={i} className={styles["css-x5gdjb"]}>
										<a href="#">
											<Project data={item} />
										</a>
									</li>
								))}
							</ul>

						</div>
					</div>
					<div className={styles["css-1wrwd7y"]}>
						<div className="[&amp;_.mapboxgl-ctrl-bottom-left]:d_none! css-t0ymut">
							<div id="mapboxgl-map" style={{"position": "relative", "width": "950px", "height": "799px"}}>
								<MapComp data={sharedData}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}