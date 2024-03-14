import React from "react";
import Layout from "@app/components/layout";
import LogoSlider from "@app/components/LogoSlider";
import Link from "next/link";

export default function EnterprisePage() {
	return (
		<Layout>

			<section className="featured-guide secondary-hero">
				<div className="inner">
					<picture className="img">
						<img alt="faried-anzyari-5vcygqehv0k-unsplash-scaled-65c4c1ce7eae6"
								 className="attachment-large-1600 lazyload"
								 src="/images/faried-anzyari-5vcygqehv0k-unsplash-scaled-65c4c1ce7eae6-1600x900.jpg"/>
					</picture>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-10 col-lg-8">
								<div className="featured-guide-txt">
									<div className="txt">

										<h1>Build a portfolio of the world’s best nature-based projects.</h1>
										<p><span style={{fontWeight: 400}}>Harness tech-enabled insights to invest in
											the highest quality carbon credits.</span></p>
										<ul className="btn-group">
											<li>
												<a href="#enterprise-vetting-form" className="btn" data-modal>Contact us</a>
											</li>
											<li>
												<a href="#the-pachama-difference" target="" className="btn btn-secondary-w">Ocean Pulse
													difference</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="banner-cta">
				<div className="container">
					<div className="row">
						<div className="col-lg-14 col-lg-offset-1">
							<div className="holder">
								<strong className="txt">Want to purchase a smaller amount of credits for the near term?</strong>
								<ul className="btn-group">
									<li>
										<a href="https://app.pachama.com/buy" target="" className="btn  btn-secondary">support now</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className="investor-timeline">
				<div className="container">
					<div className="row">
						<div className="col-lg-14 col-lg-offset-1">
							<div className="header">
								<h2>Meet your climate goals</h2>
								<p>
									<span style={{fontWeight: 400}}>Companies leading on climate are investing in nature.
										Adjust the timelinebelow for your carbon credit needs and see how you stack up
										to your peers. </span>
								</p>
							</div>
							<div className="content time-slider--component">
								<div className="top-content">
									<div className="time-slider">
										<div className="bar time-slider--line"></div>
										<div className="bar-overlap time-slider--overlap" style={{width: "100%"}}></div>
										<ul className="dots">
											<li className="time-slider--dot" data-year="2023">
												<span className="dot active"
															style={{background: "#84E1FFFF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2024">
                                    <span className="dot "
																					style={{background: "#83EBBDFF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2025">
                                    <span className="dot "
																					style={{background: "#BAEC6AFF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2026">
                                    <span className="dot "
																					style={{background: "#E4DD5DFF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2027">
                                    <span className="dot "
																					style={{background: "#6E8CFFFF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2028">
                                    <span className="dot "
																					style={{background: "#CE71FFFF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2029">
                                    <span className="dot "
																					style={{background: "#F16688FF"}}></span>
											</li>
											<li className="time-slider--dot" data-year="2030">
                                    <span className="dot "
																					style={{background: "#F65D21FF"}}></span>
											</li>
										</ul>
										<div className="slider time-slider--thumb" style={{left: "0%"}}>
											<span className="icon-chevron-left-2"></span>
											<em>Now</em>
											<span className="icon-chevron-right-2"></span>
										</div>
									</div>
									<ul className="slide-content-list">
										<li className="time-slider--step" data-start="2024" data-end="2024">
											<div className="holder">
												<span className="bullet"></span>
												<h4>Credits for 2024</h4>
												<p> Meet your near-term climate targets with a one-time purchase. </p>
											</div>
										</li>
										<li className="time-slider--step" data-start="2025" data-end="2029">
											<div className="holder">
												<span className="bullet"></span>
												<h4>Credits for 2025-2029</h4>
												<p>Meet your mid-term climate targets with a multi-year investment. </p>
											</div>
										</li>
										<li className="time-slider--step" data-start="2030" data-end="2030">
											<div className="holder">
												<span className="bullet"></span>
												<h4>Credits for 2030 & beyond</h4>
												<p>Meet your long-term climate targets by investing in the next generation of projects.</p>
											</div>
										</li>
									</ul>
								</div>
								<div className="btm-content">
									<div className="slide-up-content time-slider--popup" data-start="2024" data-end="2024">
										<div className="text-holder">
											<h3>You’re in good company! </h3>
											<p>Most companies investing in nature start with annual purchases. </p>
										</div>
										<ul className="btn-group">
											<li>
												<a href="#enterprise-vetting-form" className="btn  " data-modal>BUILD YOUR PORTFOLIO</a>
											</li>
										</ul>
									</div>
									<div className="slide-up-content time-slider--popup" data-start="2025" data-end="2029">
										<div className="text-holder">
											<h3>You’re amongst climate leaders!</h3>
											<p>Sophisticated companies are locking in the best projects at a fixed price with multi-year
												investments. </p>
										</div>
										<ul className="btn-group">
											<li>
												<a href="#enterprise-vetting-form" className="btn  " data-modal>BUILD YOUR PORTFOLIO</a>
											</li>
										</ul>
									</div>
									<div className="slide-up-content time-slider--popup" data-start="2030" data-end="2030">
										<div className="text-holder">
											<h3>You’re a trailblazer! </h3>
											<p>Only the most innovative companies are making their mark by investing in projects from the
												ground up.</p>
										</div>
										<ul className="btn-group">
											<li>
												<a href="#enterprise-vetting-form" className="btn  " data-modal>BUILD YOUR PORTFOLIO</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="logo-slider-section">
				<div className="container">
					<h2 className="lg">Climate leaders worldwide are investing with Ocean Pulse</h2>
				</div>
				<LogoSlider />
			</div>

			<div id="reimagining-your-company’s-relationship-with-nature" className="section-heading space is-left-sm ">
				<div className="container">
					<div className="holder">
						<h2>Reimagining your company’s relationship with nature</h2>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>

			<section className="why-invest">
				<div className="container">
					<div className="three-cols-slider swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="copy-of-usgs-rcp0abxhk-m-unsplash-scaled-e1707451789980-65c9e7351f2b3"
												 className="attachment-medium_large lazyload"
												 src="/images/copy-of-usgs-rcp0abxhk-m-unsplash.jpg" />
									</div>
									<div className="card-content">
										<h3 className="h5">Support local communities</h3>
										<p>Create well-paying jobs, education and clean air and water for critical stakeholders around the
											world.</p>
										<ul className="btn-group">
										</ul>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="sam-wermut-fiuunwxnb3k-unsplash-scaled-65c9e75e99e15"
												 data-src="../wp-content/uploads/2024/02/sam-wermut-fiuunwxnb3k-unsplash-scaled-65.jpg"
												 className="attachment-medium_large lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<div className="card-content">
										<h3 className="h5">Build resilience</h3>
										<p>Future-proof your business by restoring the vital natural systems critical to your
											operations.</p>
										<ul className="btn-group">
										</ul>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="copy-of-pawel-czerwinski-frzupsfnp04-unsplash-scaled-e1707512746172-65c9e7855dd87"
												 data-src="../wp-content/uploads/2024/02/copy-of-pawel-czerwinski-frzupsfnp04-unsplash.jpg"
												 className="attachment-medium_large lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<div className="card-content">
										<h3 className="h5">Lead with action</h3>
										<p>Show what real climate action looks like with investments that transform communities, ecosystems
											and the climate for years to come</p>
										<ul className="btn-group">
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div id="the-pachama-difference" className="section-heading  ">
				<div className="container">
					<div className="holder">
						<h2>The Ocean Pulse difference</h2>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>

			<article className="image-w-text">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="video ">
								<div className="img safari">
									{/*<video muted autoplay loop playsinline >
										 <source-data data-src="../wp-content/uploads/2024/02/StartProject_1000x1080_15s.jpg" data-type="video/mp4">
									</video>*/}
									<img src="/images/StartProject_1000x1080_15s.jpg" alt=""/>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-7">
							<div className="txt">
								<h2>Invest in quality backed by deep due diligence</h2>
								<p><span style={{fontWeight: 400}}>Confidently invest in the highest-quality forest carbon
									projects with comprehensive climate, community, and biodiversity insights. Each Ocean
									Pulse project is carefully vetted by our technology and forest scientists to make
									your due diligence easy.</span>
								</p>
								<ul className="btn-group">
									<li>
										<a href="../#" target="" className="btn  ">View Evaluation Criteria</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</article>

			<article className="image-w-text alt">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="img">
								<img alt="rectangle-1-4-65c9e81037511"
										 className="attachment-large lazyload"
										 src="/images/StartProject_1000x1080_15s.jpg"/>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-7">
							<div className="txt">
								<h2>Build a resilient nature strategy </h2>
								<p><span style={{fontWeight: 400}}>Tap into Ocean Pulse&#8217;s expertise to navigate the carbon
									market and craft a custom nature portfolio to meet your goals. From compensation strategies
									to making claims, our team of </span><span
									style={{fontWeight: 400}}>science and policy</span><span style={{fontWeight: 400}}> experts
									is there to support you on your climate action journey.</span>
								</p>
								<ul className="btn-group">
									<li>
										<a href="#enterprise-vetting-form" className="btn  " data-modal>Contact our experts</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</article>

			<article className="image-w-text">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="video ">
								<div className="img safari">
									{/*<video muted autoplay loop playsinline >
										 <source-data data-src="../wp-content/uploads/2024/02/Baseline_1000x1080-1.jpg" data-type="video/mp4">
									</video>*/}
									<img src="/images/Baseline_1000x1080-1.jpg" alt=""/>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-7">
							<div className="txt">
								<h2>See your impact in action</h2>
									<p><span style={{fontWeight: 400}}>Follow your project’s performance over time and have
										confidence that it&#8217;s delivering the impact it claims to. Ocean Pulse&#8217;s
										portal enables you to monitor forest change, track </span><span
										style={{fontWeight: 400}}>biodiversity</span><span style={{fontWeight: 400}}>, and see
										how funds are being used on the ground.</span>
									</p>
								<ul className="btn-group">
									<li>
										<a href="#product_demo_portal" className="btn  " data-modal>Get a demo</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</article>

			<div className="accordion-section space-xxl">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-offset-1 col-lg-7">
							<div className="text-wrap">
								<h2>Our Tech</h2>
								<ul data-accordion="one" className="accordion">
									<li className="first">
										<a href="#" data-more className="h5 active">Assess the baseline</a>
										<div className="slide">
											<p><span style={{fontWeight: 400}}>Ocean Pulse has built the first AI-based tool to
												measure baselines dynamically. Using satellite data and machine learning models,
												we can observe the on-the-ground impact of a carbon project over time, increasing
												confidence in a project’s baseline integrity. </span>
											</p>
											<ul className="btn-group">
												<li>
													<a href="../blog/4-ways-dynamic-baselines-can-transform-carbon-crediting/index.html" target=""
														 className="btn  ">Learn more</a>
												</li>
											</ul>
											<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
												<div className="img safari">
													{/*<video muted autoplay loop playsinline >
														 <source-data data-src="../wp-content/uploads/2024/02/07ca1580-fa73-4e5e-b56c-10eaca4738d0.mp4" data-type="video/mp4">
													</video>*/}
													<img src="/images/StartProject_1000x1080_15s.jpg" alt=""/>
												</div>
											</div>
										</div>
									</li>
									<li className="rest">
										<a href="#" data-more className="h5 ">Monitor forest cover change</a>
										<div className="slide">
											<p><span style={{fontWeight: 400}}>While most projects today are only monitored every
												3 to 7 years, we provide continual visibility across an entire bioregion.
												Using high-resolution satellite imagery and cloud-penetrating radar, we track forest
												change in and around forest projects over time. </span>
											</p>
											<ul className="btn-group">
												<li>
													<a href="#product_demo_monitoring" className="btn  " data-modal>See monitoring in action</a>
												</li>
											</ul>
											<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
												<div className="img safari">
													{/*<video muted autoplay loop playsinline >
														 <source-data data-src="../wp-content/uploads/2024/02/Monitoring_1000x1080.mp4" data-type="video/mp4">
													</video>*/}
													<img src="/images/StartProject_1000x1080_15s.jpg" alt=""/>
												</div>
											</div>
										</div>
									</li>
									<li className="rest">
										<a href="#" data-more className="h5 ">Track biodiversity impacts</a>
										<div className="slide">
											<p>Leveraging global biodiversity data and on-the-ground tracking, we offer leading insights into
												conservation and restoration impacts on biodiversity, species extinction risks, and top regional
												threats.</p>
											<ul className="btn-group">
												<li>
													<a href="#protduct_demo_biodiversity" className="btn  " data-modal>Get a demo</a>
												</li>
											</ul>
											<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
												<div className="img safari">
													{/*<video muted autoplay loop playsinline >
														 <source-data data-src="../wp-content/uploads/2024/02/Track_1000x1080_v04-1.mp4" data-type="video/mp4">
													</video>*/}
													<img src="/images/StartProject_1000x1080_15s.jpg" alt=""/>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr className="separator"/>

			<div className="quote">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-md-8 col-lg-7">
							<div className="quote-img">
								<img alt="quote-img-65c3722dc6ebc"
										 className="attachment-large lazyload"
										 src="/images/quote-img-65c3722dc6ebc-1024x1019.jpg"/>
							</div>
						</div>
						<div className="col-lg-offset-1 col-md-8 col-lg-6">
							<div className="txt-hold">
								<div className="txt-top">
									<blockquote>
										<p className="check-quote">“We’re able to utilize Ocean Pulse’s tools to see our carbon impact — not
											just at the point of buying, but on an ongoing basis.”</p>
									</blockquote>
										<p>Since 2021, Boston Consulting Group has partnered with Ocean Pulse to invest in high-quality
											forest carbon projects. Their leading climate strategy is defining a new vision for corporate
											climate action.</p>
								</div>
								<ul className="btn-group">
									<li>
										<a href="../#" target="" className="btn  ">Read BCG’s story</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<section className="projects">
				<div className="container">
					<div className="header">
						<div className="heading-txt">
							<span className="label">Join the net zero movement</span>
							<h2>Explore our tech-verified projects</h2>
						</div>
						<div className="btn-wrap">
							<a href="#" className="btn">explore projects</a>
						</div>
					</div>
					<div className="project-slider-wrap">
						<div className="project-slider swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<a href="#/brazil-manoa/overview#hero" className="card card-project">
										<div className="img">
											<img alt="manoacover-65c4ccda2f7c0"
													 className="attachment-medium_large lazyload"
													 src="/images/manoacover-65c4ccda2f7c0-768x512.webp"/>
										</div>
										<div className="card-content">
											<div className="top">
												<span className="label">Avoided Unplanned Deforestation</span>
												<h4>Manoa</h4>
											</div>
											<div className="btm">
												<div className="left">
													<div className="flag">
														<img alt="flag-brazil-1"
																 className="attachment-thumbnail lazyload"
																 src="/images/flag-brazil-1.png"/>
													</div>
													<span className="button-label">79107 HA</span>
												</div>
												<div className="right">
													<img alt="Manoa.Boundary 2722x" width="122"
															 className="attachment-medium lazyload"
															 src="/images/Manoa.Boundary-2722x.png"/>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="#/central-kalimantan-peatlands/overview#hero" className="card card-project">
										<div className="img">
											<img alt="project-card-02-768x634"
													 className="attachment-medium_large lazyload"
													 src="/images/project-card-02-768x634-1.jpg"/>
										</div>
										<div className="card-content">
											<div className="top">
												<span className="label">Avoided Planned Deforestation</span>
												<h4>Central Kalimantan Peatlands</h4>
											</div>
											<div className="btm">
												<div className="left">
													<div className="flag">
														<img alt="flag-poland"
																 className="attachment-thumbnail lazyload"
																 src="/images/flag-poland.png"/>
													</div>
													<span className="button-label">47237 HA</span>
												</div>
												<div className="right">
													<img alt="Central Kalimantan Peatlands" width="122"
															 className="attachment-medium lazyload"
															 src="/images/Central-Kalimantan-Peatlands.png"/>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="#/washington-state/overview#hero" className="card card-project">
										<div className="img">
											<img alt="20230607-kingcountypachama-14-scaled-e1690928315373-65c4cca85ae56"
													 className="attachment-medium_large lazyload"
													 src="/images/20230607-kingcountypachama-14-scaled-e1690928315373-65c4cca85ae56-768x864.webp"/>
										</div>
										<div className="card-content">
											<div className="top">
												<span className="label">Improved Forest Management</span>
												<h4>King County Parks</h4>
											</div>
											<div className="btm">
												<div className="left">
													<div className="flag">
														<img alt="flag-usa"
																 className="attachment-thumbnail lazyload"
																 src="/images/flag-usa.jpg"/>
													</div>
													<span className="button-label">514 HA</span>
												</div>
												<div className="right">
													<img alt="Kingcount" width="122"
															 data-src="../wp-content/uploads/2024/02/Kingcount-300x244.png"
															 className="attachment-medium lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="#/pacaja-para/overview#hero" className="card card-project">
										<div className="img">
											<img alt="99c6c89a-c3c7-467e-a845-24e4b7138fe8-scaled-65c4cd1bd40f6"
													 data-src="../wp-content/uploads/2024/02/99c6c89a-c3c7-467e-a845-24e4b7138fe8-scaled-65c4cd1bd40f6-768x576.webp"
													 className="attachment-medium_large lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										</div>
										<div className="card-content">
											<div className="top">
												<span className="label">Avoided Unplanned Deforestation</span>
												<h4>Pacajá Pará</h4>
											</div>
											<div className="btm">
												<div className="left">
													<div className="flag">
														<img alt="flag-brazil-1" data-src="../wp-content/uploads/2024/01/flag-brazil-1.png"
																 className="attachment-thumbnail lazyload"
																 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													</div>
													<span className="button-label">140433 HA</span>
												</div>
												<div className="right">
													<img alt="pacajapara" width="122"
															 data-src="../wp-content/uploads/2024/02/pacajapara-300x160.png"
															 className="attachment-medium lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="#/borneo-peatlands/overview#hero" className="card card-project">
										<div className="img">
											<img alt="KMP drone footage boardwalk"
													 data-src="../wp-content/uploads/2024/02/KMP-drone-footage-boardwalk-768x432.jpg"
													 className="attachment-medium_large lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img src="../wp-content/uploads/2024/02/KMP-drone-footage-boardwalk-768x432.jpg"
																		 className="attachment-medium_large" alt="KMP drone footage boardwalk"/></noscript>
										</div>
										<div className="card-content">
											<div className="top">
												<span className="label">Avoided Planned Deforestation</span>
												<h4>Borneo Peatlands</h4>
											</div>
											<div className="btm">
												<div className="left">
													<div className="flag">
														<img alt="flag-poland" data-src="../wp-content/uploads/2024/01/flag-poland.png"
																 className="attachment-thumbnail lazyload"
																 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
														<noscript>
															<img alt="flag-poland" data-src="../wp-content/uploads/2024/01/flag-poland.png"
																	 className="attachment-thumbnail lazyload"
																	 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
															<noscript><img src="../wp-content/uploads/2024/01/flag-poland.png"
																						 className="attachment-thumbnail" alt="flag-poland"/></noscript>
														</noscript>
													</div>
													<span className="button-label">149800 HA</span>
												</div>
												<div className="right">
													<img alt="Borneo Peatlands" width="122"
															 data-src="../wp-content/uploads/2024/02/Borneo-Peatlands-102x300.png"
															 className="attachment-medium lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img src="../wp-content/uploads/2024/02/Borneo-Peatlands-102x300.png"
																				 className="attachment-medium" alt="Borneo Peatlands" width="122"/></noscript>
												</div>
											</div>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="#/carmen-del-darien/overview#hero" className="card card-project">
										<div className="img">
											<img alt="cddmangrove-65c4cd5cc921b"
													 data-src="../wp-content/uploads/2024/02/cddmangrove-65c4cd5cc921b-768x512.webp"
													 className="attachment-medium_large lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img src="../wp-content/uploads/2024/02/cddmangrove-65c4cd5cc921b-768x512.webp"
																		 className="attachment-medium_large" alt="cddmangrove-65c4cd5cc921b"/></noscript>
										</div>
										<div className="card-content">
											<div className="top">
												<span className="label">Avoided Unplanned Deforestation</span>
												<h4>Chocó-Darién Bioregion</h4>
											</div>
											<div className="btm">
												<div className="left">
													<div className="flag">
														<img alt="Flags2x" data-src="../wp-content/uploads/2024/02/Flags2x.png"
																 className="attachment-thumbnail lazyload"
																 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
														<noscript><img src="../wp-content/uploads/2024/02/Flags2x.png"
																					 className="attachment-thumbnail" alt="Flags2x"/></noscript>
													</div>
													<span className="button-label">140650 HA</span>
												</div>
												<div className="right">
													<img alt="Choco Darien Bioregion" width="122"
															 data-src="../wp-content/uploads/2024/02/Choco-Darien-Bioregion.png"
															 className="attachment-medium lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img src="../wp-content/uploads/2024/02/Choco-Darien-Bioregion.png"
																				 className="attachment-medium" alt="Choco Darien Bioregion" width="122"/>
													</noscript>
												</div>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</div>
					</div>
				</div>
			</section>

			<section className="featured-guide">
				<div className="inner">
					<picture className="img">
						<source media="(max-width:768px)"
										srcSet="/images/pachama-originals-go-beyond-mobile-65c4cb067e0c1.webp"/>
						<img alt="pachama-originals-go-beyond-65c4caf1914c9"
								 className="attachment-large-1600 lazyload"
								 src="/images/pachama-originals-go-beyond-mobile-65c4cb067e0c1.webp"/>
					</picture>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-10 col-lg-8">
								<div className="featured-guide-txt">
									<div className="txt">
										<span className="label">pachama originals</span>

										<h2>Go beyond</h2>
											<p>Today, there simply aren’t enough forest restoration and conservation projects to move at the
												pace the planet demands. So now, we’re applying our technology every step of the way to create
												the highest integrity, transparent and impactful forest carbon projects from the ground up.
												Ocean Pulse Originals unlocks the next generation of nature-based projects.</p>
										<ul className="btn-group">
											<li>
												<a href="#originals_general" className="btn  " data-modal>Contact our team</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cta">
				<div className="container">
					<div className="cta-box">
						<div className="img">
							<img alt="container-1-1-65c4cc5166817"
									 className="attachment-large-1600 lazyload"
									 src="/images/cta-img-1536x553-1-65c37264b3dcf.jpg"/>
						</div>
						<div className="cta-background-dots-animation"></div>
						<div className="cta-txt">
							<h2>Build your nature strategy</h2>
								<p>Chat with our experts to design a portfolio that meets your needs</p>
							<ul className="btn-group">
								<li>
									<Link href="/get-started" className="btn">Get Started</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="featured-guide featured-guide-reverse">
				<div className="inner">
					<picture className="img">
						<img alt="building-a-nature-based-carbon-plan-1-65c371afb5c4b"
								 className="attachment-large-1600 lazyload"
								 src="/images/building-a-nature-based-carbon-plan-1-65c371afb5c4b-1600x898.jpg"/>
					</picture>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-10 col-lg-8">
								<div className="featured-guide-txt">
									<div className="txt">
										{/*<h1>Build a portfolio of the world’s best forest projects. </h1>*/}
										<h2>Why forests are our most effective carbon removal technology</h2>
											<p>Forests have been extracting and storing carbon dioxide from the atmosphere for millennia. Yet,
												some argue if we’re to create a permanent solution to climate change, aren’t trees a stopgap
												measure? To answer this question, we need to see the forest through the trees.</p>
										<ul className="btn-group">
											<li>
												<a
													href="../blog/seeing-the-forest-through-the-trees-why-forests-are-our-most-effective-carbon-removal-technology/index.html"
													target="" className="btn  ">Read article</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="article-list">
				<div className="container">
					<div className="header">
						<h2>Featured resources</h2>
					</div>
					<div className="featured-article-slider swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<a href="../blog/2023-carbon-market-trends/index.html" className="card card-resources">
									<div className="img">
										<picture>
											<source media="(max-width: 743px)"
															srcSet="/images/alex-diaz-rjycnt2hewy-unsplash-65c4dc17c0492.jpg"/>
											<img alt="alex-diaz-rjycnt2hewy-unsplash-65c4dc17c0492-1-65c5f4281a32f"
													 className="attachment-medium_large lazyload"
													 src="/images/alex-diaz-rjycnt2hewy-unsplash-65c4dc17c0492.jpg"/>
										</picture>
									</div>
									<div className="card-content">
										<div className="meta">
											<span className="tag">Guide</span>
											<time dateTime="2023-10-30">30.10.2023</time>
										</div>
										<h6>2023 Carbon Market Trends</h6>
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="../#" className="card card-resources">
									<div className="img">
										<picture>
											<source media="(max-width: 743px)"
															srcSet="/images/preview-1-65c9eb2f70326-768x510.webp"/>
											<img alt="preview-1-65c9eb2f70326"
													 className="attachment-medium_large lazyload"
													 src="/images/preview-1-65c9eb2f70326-768x510.webp"/>
										</picture>
									</div>
									<div className="card-content">
										<div className="meta">
											<span className="tag">Case study</span>
											<time dateTime="2023-11-13">13.11.2023</time>
										</div>
										<h6>Customer success story: Boston Consulting Group</h6>
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="../blog/four-key-characteristics-of-quality-reforestation-projects/index.html"
									 className="card card-resources">
									<div className="img">
										<picture>
											<source media="(max-width: 743px)"
															srcSet="/images/29062023-6c-0286-scaled-65c9eb81c9b7a2.jpg"/>
											<img alt="29062023-6c-0286-scaled-65c9eb81c9b7a"
													 className="attachment-medium_large lazyload"
													 src="/images/29062023-6c-0286-scaled-65c9eb81c9b7a2.jpg"/>
										</picture>
									</div>
									<div className="card-content">
										<div className="meta">
											<span className="tag">Article</span>
											<time dateTime="2023-05-30">30.05.2023</time>
										</div>
										<h6>Four Key Characteristics of Quality Reforestation Projects</h6>
									</div>
								</a>
							</div>
							<div className="swiper-slide">
								<a href="../blog/the-case-for-conservation/index.html" className="card card-resources">
									<div className="img">
										<picture>
											<source media="(max-width: 743px)"
															srcSet="/images/28062023-6c-9972-scaled.jpg"/>
											<img alt="28062023-6c-9972-scaled-65c9ec03996e8"
													 className="attachment-medium_large lazyload"
													 src="/images/28062023-6c-9972-scaled.jpg"/>
										</picture>
									</div>
									<div className="card-content">
										<div className="meta">
											<span className="tag">Article</span>
											<time dateTime="2023-03-21">21.03.2023</time>
										</div>
										<h6>Yes, Conservation Projects Have Challenges. Here’s How Tech Can ...</h6>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}