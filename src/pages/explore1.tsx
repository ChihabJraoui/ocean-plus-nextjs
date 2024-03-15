import React from "react";
import Layout from "@app/components/layout";
import {useEffect, useState} from "react";
import {brazilProject, defaultProjects, uaeProject, usaProject} from "@app/projects";
import Project from "@app/components/Project/Project";
import * as styles from "../../public/css/explore.module.css";
import MapBox from "@app/components/Map";

export default function Explore1() {

	const [projects, setProjects] = useState<any[]>([]);

	const handleSelect = (e) => {
		const selectedOption = e.target.value;
		switch (selectedOption) {
			case "usa":
				localStorage.setItem("country", "usa");
				break;
			case "uae":
				localStorage.setItem("country", "uae");
				break;
			case "brazil":
				localStorage.setItem("country", "brazil");
				break;
			case "india":
				localStorage.setItem("country", "india");
				break;
			// default:
			// 	localStorage.clear("country");
		}
		// location.reload();
	}

	useEffect(() => {
		if (window !== undefined) {

			const country = localStorage.getItem("country");

			switch (country) {
				case "brazil":
					setProjects(brazilProject);
					break;
				case "usa":
					setProjects(usaProject);
					break;
				case "uae":
					setProjects(uaeProject);
					break;
				default:
					setProjects(defaultProjects);
			}
		}
	}, []);

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
							<div className={styles["css-uqk96i"]}>
								<p className={"chakra-text " + styles["css-o2ke8n"]}>Filter by:</p>

								<div className={"chakra-stack " + styles["css-6jfr73"]}>
									<div className={styles["css-a8iw49"]}>
										<div className={styles["css-1vicip6"]}>
											<div className={styles["css-0"]}>
												<div role="group" className="chakra-form-control css-1kxonj9">
													<div className="chakra-input__group css-4302v8">
														<select name="" id="select" onChange={handleSelect}>
															<option value="all">COUNTRIES</option>
															<option value="usa">USA</option>
															<option value="uae">KSA</option>
															<option value="brazil">BRAZIL</option>
															<option value="india">INDIA</option>
														</select>
													</div>
													<div className="css-1pmxynf"></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Projects */}
							<ul id="projects-list"
									data-testid="project-list"
									aria-label="projects"
									className={styles["css-iwkjvg"]}>
								{projects?.map((item, i) => (
									<li key={i} className={styles["css-x5gdjb"]}>
										<a href="#">
											<Project data={item}/>
										</a>
									</li>
								))}
							</ul>

						</div>
					</div>
					<div className={styles["css-1wrwd7y"]}>
						<div className="[&amp;_.mapboxgl-ctrl-bottom-left]:d_none! css-t0ymut">
							<div id="mapboxgl-map" style={{"position": "relative", "width": "950px", "height": "799px"}}>
								<MapBox />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="eval-blog-form" className="modal modal--universal">
				<div className="modal-inner">
					<div className="container">
						<div className="modal-box contact-us-content">
							<a href="#" className="close">
								<img width="16" alt="" className="lazyload" src="/images/icon-cross.svg"/>
							</a>
							<div className="col-r">
								<div className="contact-us-form">
									<div className="header">
										<h6>Download Project Evaluation Criteria</h6>
										<p>Find out how Pachama evaluates forest carbon projects with a deep dive into our Project
											Evaluation Criteria. We are incorporating our latest technology and scientific research
											to advance a more transparent and trustworthy carbon market. </p>
									</div>
									<a href="#">
										<li data-project-slug="brazil-manoa" className={styles["css-x5gdjb"]}>
											<div className={styles["css-knybk"]}>
										<span style={{
											boxSizing: "border-box",
											display: "block",
											overflow: "hidden",
											width: "initial",
											height: "initial",
											background: "none",
											opacity: 1,
											border: 0,
											margin: "0px",
											padding: "0px",
											position: "absolute",
											inset: 0
										}}>
										<img src="/images/faried-anzyari-5vcygqehv0k-unsplash-scaled-65c4c1ce7eae6-1600x900.jpg"
												 decoding="async" data-nimg="fill" className={styles["css-1nf0x2k"]}
												 style={{
													 position: "absolute",
													 inset: 0,
													 boxSizing: "border-box",
													 padding: 0,
													 border: "none",
													 margin: "auto",
													 display: "block",
													 width: 0,
													 height: 0,
													 minWidth: "100%",
													 maxWidth: "100%",
													 minHeight: "100%",
													 maxHeight: "100%",
													 objectFit: "cover"
												 }}
												 sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"/>
										</span>
												<div className={styles["css-qwl8h7"]}>
													<div className={styles["css-wh3fb4"]}>
														<div className={styles["css-1tsbzs"]}>
															<div className={styles["css-b74377"]}>
																<p className="chakra-text css-cimxt8">Avoided Unplanned Deforestation - REDD+</p>
																<h5 className="chakra-heading css-1j0nf7q">Manoa</h5>
																<p className={"chakra-text " + styles["css-1m942b8"]}>
																	<img className={"chakra-icon " + styles["css-mblvt0"]} alt="BR" width="24" height="24"
																			 src="https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/BR.svg"/> Brazil
																	| Verra</p>
															</div>
														</div>
														<div className={styles["css-zwhd7k"]}>
															<button type="button" className="chakra-button css-mwecow" role="button">Support now
															</button>
														</div>
													</div>
												</div>
											</div>
										</li>
									</a>
								</div>
								<div className="success-msg" style={{display: "none"}}>
									<p>Thank you for your interest in Pachama! Our team will follow up soon.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}