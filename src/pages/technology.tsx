import React, {CSSProperties} from "react";
import Layout from "@app/components/layout";

export default function TechnologyPage() {
	return (
		<Layout>

			<div id="pachama's-tech-explained." className="section-heading  ">
				<div className="container">
					<div className="holder">
						<h2>Pachama&apos;s tech explained.</h2>
						<p>How earth observation and artificial intelligence can drive the next generation of investments in
							nature.</p>
						<ul className="btn-group">
							<li>
								<a href="/get-started" target="" className="btn  ">Contact our team</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="technology-block">
				<div className="tech-card" data-more="ac">
					<div className="img">
						<img alt="copy-of-qingbao-meng-01-igfr7hd4-unsplash-1-scaled-65c9f6bcd6450"
								 className="attachment-large-1600 lazyload"
								 src="/images/copy-of-qingbao-meng-01-igfr7hd4-unsplash-1-scaled-65c9f6bcd6450-1600x953.webp"/>
					</div>
					<div className="container">
						<div className="opener-box">
							<div className="holder">
								<span className="label">01 / PACHAMA’S CORE TECHNOLOGY</span>
								<h2>Building a modern, scalable carbon market</h2>
								<a href="#building-a-modern-scalable-carbon-market" className="btn"><span className="expand">Expand</span><span
									className="collapse">Collapse</span> <i className="icon-chevron-down-2"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="js-slide">

					<div id="our-core-technologies" className="section-heading  ">
						<div className="container">
							<div className="holder">
								<h2>Our core technologies</h2>
								<p>At Pachama, we’re developing three core technologies required to modernize the voluntary carbon
									market and create a future where high-integrity, transparent carbon credits can scale at the speed our
									planet demands.</p>
								<ul className="btn-group">
									<li>
										<a href="/get-started" target="" className="btn  ">Consult with experts</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<article className="image-w-text alt">
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<div className="video ">
										<div className="img ">
											<video muted={true} autoPlay={true} loop={true} playsInline={true}>
												<source data-src="/images/02_Pachama_technology_carbon_spin.webm"
																data-type="video/webm" />
											</video>
										</div>
									</div>
								</div>
								<div className="col-md-offset-1 col-md-7">
									<div className="txt">
										<span className="label">01</span>
										<h2>Estimating carbon</h2>
										<div>
											<p><strong>Status Quo:</strong> Field crews measure individual trees by hand to inventory carbon
												stocks over a small sample of a project’s area. This process costs tens to hundreds of thousands
												of dollars and can take months—or even years.</p>
											<p><strong>Pachama&apos;s Approach:</strong> We are building machine-learning models that integrate
												satellite data, field plots, and 3D airborne lidar imaging to map forest carbon over entire
												regions, and eventually, anywhere in the world. This satellite-based carbon mapping unlocks a
												more scalable, cost-efficient future for crediting.</p>
											<div className="text-sm">
												<p className="button-description">See how satellite-based carbon mapping can help scale forest
													carbon markets.</p>
											</div>
										</div>
										<ul className="btn-group">
											<li>
												<a
													href="../blog/why-satellite-based-carbon-mapping-is-key-to-scaling-forest-carbon-markets/index.html"
													target="" className="btn  ">Learn More</a>
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
									<div className="img">
										<img alt="03_Pachama_technology_forestcover-min"
												 className="attachment-large lazyload"
												 src="/images/03_Pachama_technology_forestcover-min.gif"/>
									</div>
								</div>
								<div className="col-md-offset-1 col-md-7">
									<div className="txt">
										<span className="label">02</span>
										<h2>Monitoring forest cover change</h2>
										<div>
											<p><strong>Status Quo:</strong> Most registries require that projects are monitored only every 7
												years. Years could pass without information of a forest fire or illegal deforestation.</p>
											<p><strong>Pachama’s Approach:</strong> We use high-resolution satellite imagery and
												cloud-penetrating radar to track losses and gains in forest areas over time, unlocking
												continuous visibility across an entire forest.</p>
										</div>
										<ul className="btn-group">
											<li>
												<a href="#eval-blog-form" className="btn  " data-modal>Watch a product demo</a>
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
									<div className="video video-poster">
										<div className="img video-thumb">
											<a href="#" className="play-video watch-video" data-type="youtube"
												 data-source="KsUF5LJL2NM">
												<img alt="screenshot-2023-06-13-at-141347-64885ded3d42c"
														 className="attachment-large lazyload"
														 src="/images/screenshot-2023-06-13-at-141347-64885ded3d42c-1-1024x555.webp"/>
												<span className="btn-play"><i className="icon-play"></i><span>Play Video</span></span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-offset-1 col-md-7">
									<div className="txt">
										<span className="label">03</span>
										<h2>Assessing the baseline</h2>
										<div>
											<p><strong>Status Quo:</strong> In forest carbon markets, a baseline is a business-as-usual
												scenario used to estimate expected emissions without the incentive of carbon financing. Today,
												credit issuance relies on historical data and a complex set of subjective factors to set
												baselines.</p>
											<p><strong>Pachama&apos;s Approach:</strong> Using machine learning models, we match each satellite
												pixel in a project to a ‘control’ pixel outside the project with similar attributes. We then use
												satellite data to observe forest loss in the control pixels compared to the pixels in the
												project area.</p>
											<div className="text-sm">
												<p className="button-description">See how a tech-driven approach to baselines can transform carbon
													crediting.</p>
											</div>
										</div>
										<ul className="btn-group">
											<li>
												<a href="../blog/4-ways-dynamic-baselines-can-transform-carbon-crediting/index.html" target=""
													 className="btn  ">Learn More</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</article>
					
					<div id="digitizing-the-<br>-carbon-market" className="section-heading  ">
						<div className="container">
							<div className="holder">
								<span className="label">PUTTING IT ALL TOGETHER</span>
								<h2>Digitizing the <br /> carbon market</h2>
								<ul className="btn-group">
								</ul>
							</div>
						</div>
					</div>
					
					<section className="section-media" style={{"--bg" : "#000000", "--h" : "840px"} as CSSProperties}>
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-md-offset-2">
									<div className="img">
										<img alt="04_Pachama_technology_DMRV-ezgif.com-optimize"
												 className="attachment-large-1600 lazyload"
												 src="/images/04_Pachama_technology_DMRV-ezgif.com-optimize-1.gif"/>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<section className="intro-text--centered">
						<div className="container">
							<div className="desc">
								<p>Since our founding in 2018, we’ve sought to lead the way in Digital Measurement, Reporting, and
									Verification (DMRV). Our goal is to create a registry-integrated system that provides a modern,
									intuitive experience for both project developers and buyers through a transparent, simplified
									crediting process.</p>
								<ul className="btn-group">
									<li>
										<a href="../blog/building-the-modern-carbon-market-the-planet-demands/index.html" target=""
											 className="btn  ">Learn more about our vision</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<div className="collapse-wrap">
						<a href="#" className="link-close">Collapse</a>
					</div>
				</div>
			</div>
			
			<div className="technology-block alt">
				<div className="tech-card" data-more="ac">
					<div className="img">
						<img alt="copy-of-planet-volumes-lvodghrlqio-unsplash-scaled-e1707528544526-65c9f7b53b7a8"
								 data-src="/images/copy-of-planet-volumes-lvodghrlqio-unsplash-scaled-e1707528544526-65c9f7b53b7a8-1600x821.webp"
								 className="attachment-large-1600 lazyload"
								 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
					</div>
					<div className="container">
						<div className="opener-box">
							<div className="holder">
								<span className="label">02 / PACHAMA VERIFIED PROJECTS</span>
								<h2>Finding the world’s highest-quality forest projects</h2>
								<a href="#finding-the-world-s-highest-quality-forest-projects" className="btn"><span
									className="expand">Expand</span><span className="collapse">Collapse</span> <i className="icon-chevron-down-2"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="js-slide">
					
					<section className="timeline-section--component timeline-section project-evaluation-timeline">
						<div className="timeline-section--backgrounds-wrapper">
							<div className="timeline-section--backgrounds">
								<div className="timeline-section--background timeline-section--spacer"></div>
								<div className="timeline-section--background timeline-section--media">
								</div>
								<div className="timeline-section--background timeline-section--media">
								</div>
								<div className="timeline-section--background timeline-section--media">
								</div>
								<div className="timeline-section--background timeline-section--media">
								</div>
							</div>
						</div>
						<div className="timeline-block timeline-section--first-step timeline-section--step"
								 style={{"--pointer-color": "#84e1ff"} as CSSProperties}>
							<div className="container">
								<div className="txt">
									<span className="label title-label">INVEST WITH CONFIDENCE</span>
									<h2>Project evaluation</h2>
									<p>Pachama rigorously evaluates every project listed on our marketplace to ensure we’re surfacing only
										the highest quality projects. Our Evaluation Criteria includes a series of checks that every project
										must pass, as well as a number of informative insights on project quality. In each evaluation, we
										ensure the project is:</p>
									<ul className="btn-group">
									</ul>
								</div>
								<div className="timeline-section--pointer"></div>
							</div>
						</div>
						<div className="timeline-block layout-has-video timeline-section--step step-1"
								 style={{"--pointer-color": "#8af289", "--step-color-mobile": "#84e1ff"} as CSSProperties}>
							<div className="img">
								<video muted={true} autoPlay={true} loop={true} playsInline={true}>
									<source src="/images/additional.mp4" type="video/mp4" />
								</video>
							</div>
							<div className="container">
								<div className="step-content">
									<div className="inner-box">
										<span className="label">Step 1</span>
										<h3>Additional</h3>
										<p>Emissions reductions would not have occurred without the the incentive of carbon credits.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline-block layout-has-video timeline-section--step step-2"
								 style={{"--pointer-color": "#73a9f5", "--step-color-mobile": "#eadf54", "--secondary-color": "#eadf54"} as CSSProperties}>
							<div className="img">
								<video muted={true} autoPlay={true} loop={true} playsInline={true}>
									<source src="/images/accurate.mp4" type="video/mp4" />
								</video>
							</div>
							<div className="container">
								<div className="step-content">
									<div className="timeline-section--point"></div>
									<div className="inner-box">
										<span className="label">Step 2</span>
										<h3>Conservative</h3>
										<p>Emissions reductions are robustly quantified and each credit represents at least one metric ton
											of carbon.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline-block layout-has-video timeline-section--step step-3"
								 style={{"--pointer-color": "#fd753b", "--step-color-mobile": "#e789ff", "--secondary-color": "#e789ff"} as CSSProperties}>
							<div className="img">
								<video muted={true} autoPlay={true} loop={true} playsInline={true}>
									<source src="/images/durable.mp4" type="video/mp4" />
								</video>
							</div>
							<div className="container">
								<div className="step-content">
									<div className="timeline-section--point"></div>
									<div className="inner-box">
										<span className="label">Step 3</span>
										<h3>Durable</h3>
										<p>The project delivers a long-lasting climate impact ensured by continuous monitoring and
											reporting.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline-block layout-has-video timeline-section--step step-4"
								 style={{"--pointer-color": "#84e1ff", "--step-color-mobile": "#84e1ff", "--secondary-color": "#F581AE"} as CSSProperties}>
							<div className="img">
								<video muted={true} autoPlay={true} loop={true} playsInline={true}>
									<source src="/images/beyond-carbon.mp4" type="video/mp4" />
								</video>
							</div>
							<div className="container">
								<div className="step-content">
									<div className="timeline-section--point"></div>
									<div className="inner-box">
										<span className="label">Step 4</span>
										<h3>Beyond Carbon</h3>
										<p>The project causes no net harm and delivers biodiversity and community benefits.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="timeline-block background-black step-last timeline-section--step">
							<div className="container">
								<div className="step-content">
								</div>
								<div className="btn-wrap">
									<a href="../blog/pachama-releases-project-evaluation-criteria-2-2/index.html" className="btn">Learn more
										about Pachama&apos;s evaluation</a>
								</div>
							</div>
						</div>
						<span className="line line-colored"><span className="line-filler"></span></span>
						<span className="line line-track">
                     <div className="next-step">
                        <span className="icon-chevron-down-2"></span>
                     </div>
                  </span>
					</section>
					
					<div id="monitoring-projects" className="section-heading  ">
						<div className="container">
							<div className="holder">
								<span className="label"> DATA AT YOUR FINGER TIPS</span>
								<h2>Monitoring projects</h2>
								<p>Access data at your fingertips with Pachama&apos;s Portal. Unlock interactive data visualizations and see
									the impact of each of your projects, including:</p>
								<ul className="btn-group">
								</ul>
							</div>
						</div>
					</div>
					
					<section className="article-list">
						<div className="container">
							<div className="header">
								<h2>Ongoing project updates</h2>
								<div className="btn-wrap">
									<a href="#" className="btn btn-secondary">Explore projects</a>
								</div>
							</div>
							<div className="featured-article-slider swiper-container">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="card card-resources">
											<div className="img">
												<picture>
													<source media="(max-width: 743px)" />
														<img alt="degraded-land-65c9f83482806"
																 className="attachment-medium_large lazyload"
																 src="/images/degraded-land-65c9f83482806.webp"/>
												</picture>
											</div>
											<div className="card-content">
												<div className="meta">
													<span className="tag">CLIMATE</span>
													<time>03.06.2024</time>
												</div>
												<h6>Heartbreaking deforestation at the project’s doorstep</h6>
											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="card card-resources">
											<div className="img">
												<picture>
													<source media="(max-width: 743px)" />
														<img alt="jaguar-1"
																 className="attachment-medium_large lazyload"
																 src="/images/jaguar-1-1.png"/>
												</picture>
											</div>
											<div className="card-content">
												<div className="meta">
													<span className="tag">BIODIVERSITY</span>
													<time>12.11.2022</time>
												</div>
												<h6>Jaguar spotted at a watering hole</h6>
											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="card card-resources">
											<div className="img">
												<picture>
													<source media="(max-width: 743px)" />
														<img alt="meli-trip-65c9f8a655f07"
																 className="attachment-medium_large lazyload"
																 src="/images/meli-trip-65c9f8a655f07.webp"/>
												</picture>
											</div>
											<div className="card-content">
												<div className="meta">
													<span className="tag">COMMUNITY</span>
													<time>05.04.2023</time>
												</div>
												<h6>Planting begins, employing 50 local workers</h6>
											</div>
										</div>
									</div>
									<div className="swiper-slide">
										<div className="card card-resources">
											<div className="img">
												<picture>
													<source media="(max-width: 743px)" />
														<img alt="manoa-monitoring-1-65c9f8d07eae3"
																 className="attachment-medium_large lazyload"
																 src="/images/manoa-monitoring-1-65c9f8d07eae3.webp"/>
												</picture>
											</div>
											<div className="card-content">
												<div className="meta">
													<span className="tag">CLIMATE</span>
													<time>03.06.2024</time>
												</div>
												<h6>Project is not at risk of reversal</h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<hr className="separator" />
						<div className="collapse-wrap">
							<a href="#" className="link-close">Collapse</a>
						</div>
				</div>
			</div>
			
			<div className="technology-block">
				<div className="tech-card" data-more="ac">
					<div className="img">
						<img alt="29062023-6c-0286-scaled-65c9eb81c9b7a"
								 className="attachment-large-1600 lazyload"
								 src="/images/29062023-6c-0286-scaled-65c9eb81c9b7a-1600x1067.webp"/>
					</div>
					<div className="container">
						<div className="opener-box">
							<div className="holder">
								<span className="label">03 / PACHAMA ORIGINALS PROJECTS</span>
								<h2>Building the next generation of nature-based projects</h2>
								<a href="#building-the-next-generation-of-nature-based-projects" className="btn"><span
									className="expand">Expand</span><span className="collapse">Collapse</span> <i className="icon-chevron-down-2"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div className="js-slide">
					
					<div id="derisked-investments-in-nature" className="section-heading  ">
						<div className="container">
							<div className="holder">
								<h2>Derisked investments in nature</h2>
								<p>With tech at the forefront, Pachama enhances project design, tracks project performance, and brings
									unprecedented accuracy and efficiency to carbon credit issuance. By surfacing data in one intuitive
									portal, companies get complete transparency into the ongoing health and impact of their project.</p>
								<ul className="btn-group">
									<li>
										<a href="/get-started" target="" className="btn  ">Consult with experts</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					
					<article className="image-w-text">
						<div className="container">
							<div className="row">
								<div className="col-md-8">
									<div className="video video-poster">
										<div className="img video-thumb">
											<a href="#" className="play-video watch-video" data-type="youtube"
												 data-source="9HxyWKXsvrU">
												<img alt="03-find-the-best-projects-thumbnail-648ac97283328 (1)"
														 data-src="/images/03-find-the-best-projects-thumbnail-648ac97283328-1.webp"
														 className="attachment-large lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<span className="btn-play"><i className="icon-play"></i><span>Play Video</span></span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-offset-1 col-md-7">
									<div className="txt">
										<h2>Find the best projects</h2>
										<div>
											<p>Pachama analyzes regional characteristics to find the ideal project areas that will ensure your
												investment delivers the maximum impact on the climate, communities, and local wildlife.</p>
										</div>
										<ul className="btn-group">
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
									<div className="video video-poster">
										<div className="img video-thumb">
											<a href="#" className="play-video watch-video" data-type="youtube"
												 data-source="9HxyWKXsvrU">
												<img alt="04-track-and-share-over-time-thumbnail"
														 data-src="/images/04-track-and-share-over-time-thumbnail.webp"
														 className="attachment-large lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<span className="btn-play"><i className="icon-play"></i><span>Play Video</span></span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-offset-1 col-md-7">
									<div className="txt">
										<h2>Track and share progress over time</h2>
										<div>
											<p>Pachama’s suite of in-the-sky and on-the-ground technology, paired with machine learning,
												enables you to monitor progress and identify potential risks sooner.</p>
										</div>
										<ul className="btn-group">
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
									<div className="video video-poster">
										<div className="img video-thumb">
											<a href="#" className="play-video watch-video" data-type="youtube"
												 data-source="9HxyWKXsvrU">
												<img alt="02-automate-credit-calculations-thumbnail"
														 data-src="/images/02-automate-credit-calculations-thumbnail.webp"
														 className="attachment-large lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<span className="btn-play"><i className="icon-play"></i><span>Play Video</span></span>
											</a>
										</div>
									</div>
								</div>
								<div className="col-md-offset-1 col-md-7">
									<div className="txt">
										<h2>Automate credit calculations</h2>
										<div>
											<p>Pachama’s digital measurement technologies will take the manual processes of estimating carbon
												from months to days, bringing all of the rigor of traditional methods at a fraction of the
												cost.</p>
										</div>
										<ul className="btn-group">
										</ul>
									</div>
								</div>
							</div>
						</div>
					</article>
					<div className="collapse-wrap">
						<a href="#" className="link-close">Collapse</a>
					</div>
				</div>
			</div>

			<section className="signup-form-section cols">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 col-lg-6 col-lg-offset-1">
							<h2>Sign up to our newsletter</h2>
							<div>
								<p>Stay updated with Pachama’s news and guides, zero spam, promise.</p>
							</div>
						</div>
						<div className="col-sm-8 col-lg-7 col-lg-offset-1">
							{/*<script>
								window.addEventListener("load", function() {
								if (hbspt) {
								var form_options = {
								onFormReady: function(e) {
								$('.hs-input').on('input', function() {
								if (!this.value) {
								$(this).closest('.hs-form-field').removeClass('has-value')
							} else {
								$(this).closest('.hs-form-field').addClass('has-value')
							}
							});
							},
								onBeforeValidationInit: function() {},
								onBeforeFormInit: function() {},
							}
								hbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"2c3b8be3-84f0-4bed-a795-d185cdba5e8f","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\/>","messageClass":"ui red pointing below label"}}));
							}
							});
							</script>*/}
						</div>
					</div>
				</div>
			</section>
		</Layout>
);
}