import Script from "next/script";
import Header from "@app/app/components/header";
import Footer from "@app/app/components/footer";

export default function Home() {
	return (
		<>
			<div id="page-loader">
				<img alt="Loading..." data-src="/images/loader.gif" className="lazyload"
						 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
				<noscript><img src="/images/loader.gif" alt="Loading..."/></noscript>
			</div>
			<div id="wrapper">

				<Header />

				<section className="hero-home">
					<div className="container">
						<div className="row">
							<div className="col-sm-8">
								<h1 className="h1-huge">Restore Nature. Remove Carbon.</h1>
							</div>
							<div className="col-sm-8 col-md-6 col-md-offset-2">
								<p>Harnessing satellite data and AI to empower companies to confidently invest in
									nature.</p>
								<ul className="btn-group">
									<li>
										<a href="enterprise/index.html" target="" className="btn  ">Invest in nature</a>
									</li>
									<li>
										<a href="partner/index.html" target="" className="btn btn-secondary">Start a
											Project</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="hero-scroll-animation" style={{"height": "80vh"}}>
					<div className="hero-scroll-animation--scroller">
						<div className="img image-primary">
							<img alt="heatmap" data-src="/images/heatmap-1-min-1-65c6444a8d1b5.jpg"
									 className="attachment-large-1600 lazyload"
									 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
							<noscript><img src="/images/heatmap-1-min-1-65c6444a8d1b5.jpg"
														 className="attachment-large-1600" alt="heatmap"/></noscript>
						</div>
						<div className="img image-secondary">
							<img alt="heatmap-1-min-1-65c6444a8d1b5"
									 data-src="/images/heatmap-1-min-1-65c6444a8d1b5.jpg"
									 className="attachment-large-1600 lazyload"
									 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
							<noscript><img src="/images/heatmap-1-min-1-65c6444a8d1b5.jpg"
														 className="attachment-large-1600" alt="heatmap-1-min-1-65c6444a8d1b5"/>
							</noscript>
						</div>
					</div>
				</section>

				<section className="intro-text">
					<div className="container">
						<div className="row">
							<div className="col-md-10 col-lg-offset-1">
								<h3>Whether you’re looking to support the world’s highest quality carbon projects or
									earn
									an income restoring nature, Ocean Pulse can help. </h3>
								<ul className="btn-group">
									<li>
										<a href="#" target="" className="btn  ">discover pachama</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<hr className="separator" />

				<div id="see-carbon-in-action" className="section-heading  ">
					<div className="container">
						<div className="holder">
							<h2>See Carbon in Action</h2>
							<p>Technology brings new vision to nature. With satellite data and AI, you can see the many
								benefits of protecting critical ecosystems and share their growth over time.</p>
							<ul className="btn-group">
							</ul>
						</div>
					</div>
				</div>

				<section className="tab-slider-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-14 col-lg-offset-1">
								<div className="tab-slider swiper-container">
									<div className="swiper-pagination-wrap">
										<div className="swiper-pagination"></div>
									</div>
									<div className="swiper-wrapper">
										<div className="swiper-slide" data-nav="Carbon">
											<div className="img">
												<picture>
													<source media="(max-width: 767px)"
																	srcSet="/images/david-clode-ocrre9e1aro-unsplash-darker-tree-edit2-copy-2-65c395718f7ab-1600x737.jpg"/>
													<img alt=""
															 data-src="/images/david-clode-ocrre9e1aro-unsplash-darker-tree-edit2-copy-2-65c395718f7ab-1600x737.jpg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img
														src="/images/david-clode-ocrre9e1aro-unsplash-darker-tree-edit2-copy-2-65c395718f7ab-1600x737.jpg"
														alt=""/></noscript>
												</picture>
												<div className="data-img">
													<img alt="" data-src="/images/carbon-graph.svg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img src="/images/carbon-graph.svg"
																				 alt=""/></noscript>
												</div>
											</div>
										</div>
										<div className="swiper-slide" data-nav="Wildlife">
											<div className="img">
												<picture>
													<source media="(max-width: 767px)"
																	srcSet="/images/kingfisher-no-branch-rainbow-copy3-1-65c5056640fa7.jpg"/>
													<img alt=""
															 data-src="/images/kingfisher-no-branch-rainbow-copy3-1-65c5056640fa7.jpg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img
														src="/images/kingfisher-no-branch-rainbow-copy3-1-65c5056640fa7.jpg"
														alt=""/></noscript>
												</picture>
												<div className="data-img">
													<img alt=""
															 data-src="/images/Frame-2147204995.svg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img src="/images/Frame-2147204995.svg"
																				 alt=""/></noscript>
												</div>
											</div>
										</div>
										<div className="swiper-slide" data-nav="Communities">
											<div className="img">
												<picture>
													<source media="(max-width: 767px)"
																	srcSet="/images/community2-2-65c505aa95e6b.jpg"/>
													<img alt=""
															 data-src="/images/community2-2-65c505aa95e6b.jpg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img
														src="/images/community2-2-65c505aa95e6b.jpg"
														alt=""/></noscript>
												</picture>
												<div className="data-img">
													<img alt=""
															 data-src="/images/Frame-2147204995-1.svg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img
														src="/images/Frame-2147204995-1.svg"
														alt=""/></noscript>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="cards-links-section">
					<div className="container">
						<div className="row">
							<div className="col-lg-14 col-lg-offset-1">
								<div className="card-links-wrap row">
									<div className="col-sm-8">
										<div className="card card-links">
											<div className="img">
												<img alt=""
														 data-src="/images/card-img03-1024x901-1-65c36cea3d594.jpg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/card-img03-1024x901-1-65c36cea3d594.jpg"
													alt=""/></noscript>
											</div>
											<div className="card-content">
												<span className="label">For companies</span>
												<h2>Make a catalytic investment in nature</h2>
												<p>Harness tech-enabled insights to build a high-integrity portfolio of
													carbon projects to meet your climate goals. </p>
												<ul className="btn-group">
													<li>
														<a href="enterprise/index.html" target=""
															 className="btn btn-secondary-w">Learn More</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-sm-8">
										<div className="card card-links">
											<div className="img">
												<img alt=""
														 data-src="/images/card-img04-1024x901-1-65c36cea389b3.jpg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/card-img04-1024x901-1-65c36cea389b3.jpg"
													alt=""/></noscript>
											</div>
											<div className="card-content">
												<span className="label">For project partners</span>
												<h2>Make an income restoring land</h2>
												<p>Access intuitive tools to develop carbon projects, get funding, and
													measure impact.</p>
												<ul className="btn-group">
													<li>
														<a href="partner/index.html" target=""
															 className="btn btn-secondary-w">Learn More</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="logo-slider-section">
					<div className="container">
						<h2 className="lg">Leaders choosing Ocean Pulse</h2>
					</div>
					<div className="logo-slider">
						<div className="logo-list ">
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt=""
											data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="107"
									alt="" data-src="/images/Workday_logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="107"
										alt="" data-src="/images/Workday_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="107"
											alt="" data-src="/images/Workday_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="107"
												alt="" data-src="/images/Workday_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="107"
												src="/images/Workday_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Shopify-Black.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Shopify-Black.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Shopify-Black.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Shopify-Black.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Shopify-Black.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/MercadoLibre.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/MercadoLibre.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/MercadoLibre.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/MercadoLibre.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/MercadoLibre.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/Salesforce.com_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/Salesforce.com_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/Salesforce.com_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/Salesforce.com_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/Salesforce.com_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/NESPRESSO_LOGO_BLACK.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									alt="" data-src="/images/Airbnb_Logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										alt="" data-src="/images/Airbnb_Logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											alt="" data-src="/images/Airbnb_Logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												alt="" data-src="/images/Airbnb_Logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												src="/images/Airbnb_Logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/bcg.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/bcg.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/bcg.svg" className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/bcg.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/bcg.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/Duolingo_wordmark_gray_RGB.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Duolingo_wordmark_gray_RGB.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Flexport.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Flexport.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Flexport.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Flexport.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Flexport.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/athletic-greens-vector-logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/athletic-greens-vector-logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/athletic-greens-vector-logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/athletic-greens-vector-logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/athletic-greens-vector-logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="100"
									data-width-mb="60"
									alt="" data-src="/images/Church__Dwight_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="100"
										data-width-mb="60"
										alt="" data-src="/images/Church__Dwight_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="100"
											data-width-mb="60"
											alt="" data-src="/images/Church__Dwight_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="100"
												data-width-mb="60"
												alt="" data-src="/images/Church__Dwight_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="100"
												data-width-mb="60"
												src="/images/Church__Dwight_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/vuori-1.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/vuori-1.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/vuori-1.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/vuori-1.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/vuori-1.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt=""
											data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="107"
									alt="" data-src="/images/Workday_logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="107"
										alt="" data-src="/images/Workday_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="107"
											alt="" data-src="/images/Workday_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="107"
												alt="" data-src="/images/Workday_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="107"
												src="/images/Workday_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Shopify-Black.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Shopify-Black.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Shopify-Black.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Shopify-Black.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Shopify-Black.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/MercadoLibre.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/MercadoLibre.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/MercadoLibre.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/MercadoLibre.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/MercadoLibre.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/Salesforce.com_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/Salesforce.com_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/Salesforce.com_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/Salesforce.com_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/Salesforce.com_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/NESPRESSO_LOGO_BLACK.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									alt="" data-src="/images/Airbnb_Logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										alt="" data-src="/images/Airbnb_Logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											alt="" data-src="/images/Airbnb_Logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												alt="" data-src="/images/Airbnb_Logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												src="/images/Airbnb_Logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/bcg.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/bcg.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/bcg.svg" className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/bcg.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/bcg.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/Duolingo_wordmark_gray_RGB.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Duolingo_wordmark_gray_RGB.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Flexport.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Flexport.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Flexport.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Flexport.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Flexport.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/athletic-greens-vector-logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/athletic-greens-vector-logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/athletic-greens-vector-logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/athletic-greens-vector-logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/athletic-greens-vector-logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="100"
									data-width-mb="60"
									alt="" data-src="/images/Church__Dwight_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="100"
										data-width-mb="60"
										alt="" data-src="/images/Church__Dwight_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="100"
											data-width-mb="60"
											alt="" data-src="/images/Church__Dwight_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="100"
												data-width-mb="60"
												alt="" data-src="/images/Church__Dwight_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="100"
												data-width-mb="60"
												src="/images/Church__Dwight_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/vuori-1.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/vuori-1.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/vuori-1.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/vuori-1.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/vuori-1.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
						</div>
						<div className="logo-list cloned">
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt=""
											data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="107"
									alt="" data-src="/images/Workday_logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="107"
										alt="" data-src="/images/Workday_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="107"
											alt="" data-src="/images/Workday_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="107"
												alt="" data-src="/images/Workday_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="107"
												src="/images/Workday_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Shopify-Black.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Shopify-Black.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Shopify-Black.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Shopify-Black.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Shopify-Black.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/MercadoLibre.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/MercadoLibre.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/MercadoLibre.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/MercadoLibre.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/MercadoLibre.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/Salesforce.com_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/Salesforce.com_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/Salesforce.com_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/Salesforce.com_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/Salesforce.com_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/NESPRESSO_LOGO_BLACK.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									alt="" data-src="/images/Airbnb_Logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										alt="" data-src="/images/Airbnb_Logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											alt="" data-src="/images/Airbnb_Logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												alt="" data-src="/images/Airbnb_Logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												src="/images/Airbnb_Logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/bcg.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/bcg.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/bcg.svg" className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/bcg.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/bcg.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/Duolingo_wordmark_gray_RGB.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Duolingo_wordmark_gray_RGB.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Flexport.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Flexport.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Flexport.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Flexport.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Flexport.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/athletic-greens-vector-logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/athletic-greens-vector-logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/athletic-greens-vector-logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/athletic-greens-vector-logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/athletic-greens-vector-logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="100"
									data-width-mb="60"
									alt="" data-src="/images/Church__Dwight_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="100"
										data-width-mb="60"
										alt="" data-src="/images/Church__Dwight_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="100"
											data-width-mb="60"
											alt="" data-src="/images/Church__Dwight_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="100"
												data-width-mb="60"
												alt="" data-src="/images/Church__Dwight_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="100"
												data-width-mb="60"
												src="/images/Church__Dwight_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/vuori-1.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/vuori-1.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/vuori-1.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/vuori-1.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/vuori-1.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt=""
											data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="wp-content/uploads/2024/02/Bertelsmann_Logo_2016-1-300x55.png"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="107"
									alt="" data-src="/images/Workday_logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="107"
										alt="" data-src="/images/Workday_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="107"
											alt="" data-src="/images/Workday_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="107"
												alt="" data-src="/images/Workday_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="107"
												src="/images/Workday_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Shopify-Black.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Shopify-Black.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Shopify-Black.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Shopify-Black.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Shopify-Black.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/MercadoLibre.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/MercadoLibre.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/MercadoLibre.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/MercadoLibre.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/MercadoLibre.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/Salesforce.com_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/Salesforce.com_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/Salesforce.com_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/Salesforce.com_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/Salesforce.com_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/NESPRESSO_LOGO_BLACK.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/NESPRESSO_LOGO_BLACK.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									alt="" data-src="/images/Airbnb_Logo.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										alt="" data-src="/images/Airbnb_Logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											alt="" data-src="/images/Airbnb_Logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												alt="" data-src="/images/Airbnb_Logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												src="/images/Airbnb_Logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="100"
									alt="" data-src="/images/bcg.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="100"
										alt="" data-src="/images/bcg.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="100"
											alt="" data-src="/images/bcg.svg" className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="100"
												alt="" data-src="/images/bcg.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="100"
												src="/images/bcg.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Duolingo_wordmark_gray_RGB.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/Duolingo_wordmark_gray_RGB.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Duolingo_wordmark_gray_RGB.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/Flexport.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/Flexport.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/Flexport.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt="" data-src="/images/Flexport.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/Flexport.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="180"
									data-width-mb="117"
									alt="" data-src="/images/athletic-greens-vector-logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="180"
										data-width-mb="117"
										alt="" data-src="/images/athletic-greens-vector-logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="180"
											data-width-mb="117"
											alt="" data-src="/images/athletic-greens-vector-logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="180"
												data-width-mb="117"
												alt=""
												data-src="/images/athletic-greens-vector-logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="180"
												data-width-mb="117"
												src="/images/athletic-greens-vector-logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="100"
									data-width-mb="60"
									alt="" data-src="/images/Church__Dwight_logo.svg"
									className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="100"
										data-width-mb="60"
										alt="" data-src="/images/Church__Dwight_logo.svg"
										className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="100"
											data-width-mb="60"
											alt="" data-src="/images/Church__Dwight_logo.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="100"
												data-width-mb="60"
												alt="" data-src="/images/Church__Dwight_logo.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="100"
												data-width-mb="60"
												src="/images/Church__Dwight_logo.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
							<div className="logo cloned">
								<img
									width="120"
									data-width-mb="60"
									alt="" data-src="/images/vuori-1.svg" className="lazyload"
									src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img
										width="120"
										data-width-mb="60"
										alt="" data-src="/images/vuori-1.svg" className="lazyload"
										src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img
											width="120"
											data-width-mb="60"
											alt="" data-src="/images/vuori-1.svg"
											className="lazyload"
											src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img
												width="120"
												data-width-mb="60"
												alt="" data-src="/images/vuori-1.svg"
												className="lazyload"
												src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript><img
												width="120"
												data-width-mb="60"
												src="/images/vuori-1.svg"
												alt=""/></noscript>
										</noscript>
									</noscript>
								</noscript>
							</div>
						</div>
					</div>
				</div>

				<div className="accordion-section space-xxl">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-lg-offset-1 col-lg-7">
								<div className="text-wrap">
									<h2>Ocean Pulse's technology difference</h2>
									<ul data-accordion="one" className="accordion">
										<li className="first">
											<a href="#" data-more className="h5 active">Originate a project</a>
											<div className="slide">
												<p><span style={{"fontWeight": 400}}>Catalyze the next generation of forest carbon projects. Technology enables ongoing visibility into on-the-ground impacts, rigorous carbon accounting and ecologically-positive design.</span>
												</p>
												<ul className="btn-group">
													<li>
														<a href="#" target="" className="btn  ">See Originals in
															Action</a>
													</li>
													<li>
														<a href="get-started/index.html" target=""
															 className="btn btn-secondary">Contact us</a>
													</li>
												</ul>
												<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
													<div className="img ">
														<img
															src="/images/StartProject_1000x1080_15s.jpg"/>
													</div>
												</div>
											</div>
										</li>
										<li className="rest">
											<a href="#" data-more className="h5 ">Find the best project</a>
											<div className="slide">
												<p><span style={{"fontWeight": 400}}>Accelerate your due diligence with unprecedented insight into climate, community and biodiversity impacts. Each Ocean Pulse project is carefully vetted by satellite-based, AI-enabled technology and expert scientists. </span>
												</p>
												<ul className="btn-group">
													<li>
														<a href="#product_demo_eval" className="btn  " data-modal>See a
															demo</a>
													</li>
													<li>
														<a href="#" target="" className="btn btn-secondary">View
															Evaluation Criteria</a>
													</li>
												</ul>
												<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
													<div className="img ">
														<img src="/images/Baseline_1000x1080-1.jpg"
																 alt=""/>
													</div>
												</div>
											</div>
										</li>
										<li className="rest">
											<a href="#" data-more className="h5 ">Track projects over time</a>
											<div className="slide">
												<p><span style={{"fontWeight": 400}}>See carbon in action with real-time insights that enable you to monitor forest cover, track wildlife and understand where funds are going.</span>
												</p>
												<ul className="btn-group">
													<li>
														<a href="#product_demo_monitoring" className="btn  " data-modal>See
															a demo</a>
													</li>
													<li>
														<a href="#enterprise-form" className="btn btn-secondary"
															 data-modal>Contact Us</a>
													</li>
												</ul>
												<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
													<div className="img ">
														<img src="/images/Baseline_1000x1080-2.jpg"
																 alt=""/>
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

				<div className="quote quote-reverse">
					<div className="container">
						<div className="row">
							<div className="col-lg-offset-1 col-md-8 col-lg-7">
								<div className="quote-img">
									<img alt="quote-img-65c3722dc6ebc"
											 data-src="/images/quote-img-65c3722dc6ebc-1024x1019.jpg"
											 className="attachment-large lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript><img
										src="/images/quote-img-65c3722dc6ebc-1024x1019.jpg"
										className="attachment-large" alt="quote-img-65c3722dc6ebc"/></noscript>
								</div>
							</div>
							<div className="col-lg-offset-1 col-md-8 col-lg-6">
								<div className="txt-hold">
									<div className="txt-top">
										<blockquote>
											<p className="check-quote">“We use Ocean Pulse's tools to see our carbon
												impact — not just at the point of buying, but on an ongoing basis, year
												after year.”</p>
										</blockquote>
											<p>With ambitions to halve its emissions by 2025, achieve net zero by 2030
												and
												become climate positive thereafter, Boston Consulting Group is serious
												about climate action. Read how they partnered with Ocean Pulse to pair
												their ambitious reduction goals with nature-based strategies.</p>
									</div>
									<ul className="btn-group">
										<li>
											<a href="#" target="" className="btn  ">Read BCG’s story</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Call to action */}
				<section className="cta">
					<div className="container">
						<div className="cta-box">
							<div className="img">
								<img alt="cta-img-1536x553-1-65c37264b3dcf"
										 data-src="/images/cta-img-1536x553-1-65c37264b3dcf.jpg"
										 className="attachment-large-1600 lazyload"
										 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript><img src="/images/cta-img-1536x553-1-65c37264b3dcf.jpg"
															 className="attachment-large-1600"
															 alt="cta-img-1536x553-1-65c37264b3dcf"/>
								</noscript>
							</div>
							<div className="cta-background-dots-animation"></div>
							<div className="cta-txt">
								<h2>Build your nature strategy</h2>
									<p>Chat with our experts to design a portfolio that meets your needs</p>
								<ul className="btn-group">
									<li>
										<a href="get-started/index.html" target="" className="btn  ">Get Started</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Article list */}
				<section className="article-list">
					<div className="container">
						<div className="header">
							<h2>Featured resources</h2>
							<div className="btn-wrap">
								<a href="#" className="btn btn-secondary">See more resources</a>
							</div>
						</div>
						<div className="featured-article-slider swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<a href="blog/2023-carbon-market-trends/index.html" className="card card-resources">
										<div className="img">
											<picture>
												<source media="(max-width: 743px)"
																srcSet="/images/alex-diaz-rjycnt2hewy.jpg"/>
												<img alt="alex-diaz-rjycnt2hewy-unsplash-65c4dc17c0492-1-65c5f4281a32f"
														 data-src="/images/alex-diaz-rjycnt2hewy.jpg"
														 className="attachment-medium_large lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/alex-diaz-rjycnt2hewy.jpg"
													className="attachment-medium_large"
													alt="alex-diaz-rjycnt2hewy-unsplash-65c4dc17c0492-1-65c5f4281a32f"/>
												</noscript>
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
									<a href="blog/4-ways-dynamic-baselines-can-transform-carbon-crediting/index.html"
										 className="card card-resources">
										<div className="img">
											<picture>
												<source media="(max-width: 743px)"
																srcSet="/images/Corredoresdevida-00048-scaled-1-768x431.jpg"/>
												<img alt="Corredoresdevida-00048-scaled"
														 data-src="/images/Corredoresdevida-00048-scaled-1-768x431.jpg"
														 className="attachment-medium_large lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/Corredoresdevida-00048-scaled-1-768x431.jpg"
													className="attachment-medium_large"
													alt="Corredoresdevida-00048-scaled"/></noscript>
											</picture>
										</div>
										<div className="card-content">
											<div className="meta">
												<span className="tag">Technology</span>
												<time dateTime="2022-07-07">07.07.2022</time>
											</div>
											<h6>4 Ways Dynamic Baselines Can Transform Carbon Crediting</h6>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="blog/building-a-future-proof-nature-portfolio/index.html"
										 className="card card-resources">
										<div className="img">
											<picture>
												<source media="(max-width: 743px)"
																srcSet="/images/copy-of-timothy.jpg"/>
												<img
													alt="copy-of-timothy-l-brock-q7duorwjz3i-unsplash-scaled-65c5f52200ef4"
													data-src="/images/copy-of-timothy.jpg"
													className="attachment-medium_large lazyload"
													src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img src="/images/copy-of-timothy.jpg"
																			 className="attachment-medium_large"
																			 alt="copy-of-timothy-l-brock-q7duorwjz3i-unsplash-scaled-65c5f52200ef4"/>
												</noscript>
											</picture>
										</div>
										<div className="card-content">
											<div className="meta">
												<span className="tag">Article</span>
												<time dateTime="2023-09-25">25.09.2023</time>
											</div>
											<h6>Building a future-proof nature portfolio</h6>
										</div>
									</a>
								</div>
								<div className="swiper-slide">
									<a href="#" className="card card-resources">
										<div className="img">
											<picture>
												<source media="(max-width: 743px)"
																srcSet="/images/copy-of-junel-mujar.jpg"/>
												<img alt="copy-of-junel-mujar-fr3aggtpzuu-unsplash-scaled-65c5f55d16504"
														 data-src="/images/copy-of-junel-mujar.jpg"
														 className="attachment-medium_large lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img src="/images/copy-of-junel-mujar.jpg"
																			 className="attachment-medium_large"
																			 alt="copy-of-junel-mujar-fr3aggtpzuu-unsplash-scaled-65c5f55d16504"/>
												</noscript>
											</picture>
										</div>
										<div className="card-content">
											<div className="meta">
												<span className="tag">Technology</span>
												<time dateTime="2023-06-21">21.06.2023</time>
											</div>
											<h6>How Ocean Pulse Finds the Highest Quality Forest Carbon Projects</h6>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
			<div id="enterprise-vetting-form" className="modal modal--universal">
				<div className="modal-inner">
					<div className="container">
						<div className="modal-box contact-us-content">
							<a href="#" className="close">
								<img width="16" alt="" data-src="/images/icon-cross.svg"
										 className="lazyload"
										 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img width="16" alt=""
											 data-src="/images/icon-cross.svg"
											 className="lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img width="16" alt=""
												 data-src="/images/icon-cross.svg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img width="16" alt=""
													 data-src="/images/icon-cross.svg"
													 className="lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript>
												<img width="16" alt=""
														 data-src="/images/icon-cross.svg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/icon-cross.svg"
													width="16" alt=""/></noscript>
											</noscript>
										</noscript>
									</noscript>
								</noscript>
							</a>
							<div className="col-r">
								<div className="contact-us-form">
									<div className="header">
										<h6>Contact our team to start investing in nature</h6>
										<p>Our experts are here to help you invest in tech-verified projects or start
											your
											own project from the ground. Tell us a little about your needs below to be
											directed to the appropriate team.</p>
									</div>
									<Script>
										{`window.addEventListener("load", function() {
\t\t\t\t\t\t\t\t\t\t\tif (hbspt) {
\t\t\t\t\t\t\t\t\t\t\tvar form_options = {
\t\t\t\t\t\t\t\t\t\t\tonFormReady: function(e) {
\t\t\t\t\t\t\t\t\t\t\t$('.hs-input').on('input', function() {
\t\t\t\t\t\t\t\t\t\t\tif (!this.value) {
\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').removeClass('has-value')
\t\t\t\t\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').addClass('has-value')
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});
\t\t\t\t\t\t\t\t\t\t},
\t\t\t\t\t\t\t\t\t\t\tonBeforeValidationInit: function() {},
\t\t\t\t\t\t\t\t\t\t\tonBeforeFormInit: function() {},
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t\thbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"61215ce7-ce82-4260-ba97-3ef8c97c83b1","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\\/>","messageClass":"ui red pointing below label"}}));
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});`}
									</Script>
								</div>
								<div className="success-msg" style={{display: "none"}}>
									<p>Thank you for your interest in Ocean Pulse! Our team will follow up soon.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="supply-partner-form" className="modal modal--universal">
				<div className="modal-inner">
					<div className="container">
						<div className="modal-box contact-us-content">
							<a href="#" className="close">
								<img width="16" alt="" data-src="/images/icon-cross.svg"
										 className="lazyload"
										 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img width="16" alt=""
											 data-src="/images/icon-cross.svg"
											 className="lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img width="16" alt=""
												 data-src="/images/icon-cross.svg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img width="16" alt=""
													 data-src="/images/icon-cross.svg"
													 className="lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript>
												<img width="16" alt=""
														 data-src="/images/icon-cross.svg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/icon-cross.svg"
													width="16" alt=""/></noscript>
											</noscript>
										</noscript>
									</noscript>
								</noscript>
							</a>
							<div className="col-r">
								<div className="contact-us-form">
									<div className="header">
										<h6>Contact Our Team</h6>
										<p></p>
									</div>
									<Script>
										{`window.addEventListener("load", function() {
\t\t\t\t\t\t\t\t\t\t\tif (hbspt) {
\t\t\t\t\t\t\t\t\t\t\tvar form_options = {
\t\t\t\t\t\t\t\t\t\t\tonFormReady: function(e) {
\t\t\t\t\t\t\t\t\t\t\t$('.hs-input').on('input', function() {
\t\t\t\t\t\t\t\t\t\t\tif (!this.value) {
\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').removeClass('has-value')
\t\t\t\t\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').addClass('has-value')
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});
\t\t\t\t\t\t\t\t\t\t},
\t\t\t\t\t\t\t\t\t\t\tonBeforeValidationInit: function() {},
\t\t\t\t\t\t\t\t\t\t\tonBeforeFormInit: function() {},
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t\thbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"c6745501-5bfc-43bf-ae9a-fd51844ddf8d","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\\/>","messageClass":"ui red pointing below label"}}));
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});`
										}
									</Script>
								</div>
								<div className="success-msg" style={{display: "none"}}>
									<p>Thank you for your interest in Ocean Pulse! Our team will follow up soon.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="product_demo_eval" className="modal modal--universal">
				<div className="modal-inner">
					<div className="container">
						<div className="modal-box contact-us-content">
							<a href="#" className="close">
								<img width="16" alt="" data-src="/images/icon-cross.svg"
										 className="lazyload"
										 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img width="16" alt=""
											 data-src="/images/icon-cross.svg"
											 className="lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img width="16" alt=""
												 data-src="/images/icon-cross.svg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img width="16" alt=""
													 data-src="/images/icon-cross.svg"
													 className="lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript>
												<img width="16" alt=""
														 data-src="/images/icon-cross.svg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/icon-cross.svg"
													width="16" alt=""/></noscript>
											</noscript>
										</noscript>
									</noscript>
								</noscript>
							</a>
							<div className="col-r">
								<div className="contact-us-form">
									<div className="header">
										<h6>Explore how Ocean Pulse's project evaluation reports provide tech-enabled
											insights to evaluate project quality.</h6>
										<p></p>
									</div>
									<Script>
										{`window.addEventListener("load", function() {
\t\t\t\t\t\t\t\t\t\t\tif (hbspt) {
\t\t\t\t\t\t\t\t\t\t\tvar form_options = {
\t\t\t\t\t\t\t\t\t\t\tonFormReady: function(e) {
\t\t\t\t\t\t\t\t\t\t\t$('.hs-input').on('input', function() {
\t\t\t\t\t\t\t\t\t\t\tif (!this.value) {
\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').removeClass('has-value')
\t\t\t\t\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').addClass('has-value')
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});
\t\t\t\t\t\t\t\t\t\t},
\t\t\t\t\t\t\t\t\t\t\tonBeforeValidationInit: function() {},
\t\t\t\t\t\t\t\t\t\t\tonBeforeFormInit: function() {},
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t\thbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"e958e662-3171-47ca-93df-d7a4cd1e3723","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\\/>","messageClass":"ui red pointing below label"}}));
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});`
										}
									</Script>
								</div>
								<div className="success-msg" style={{display: "none"}}>
									<p>Thank you for your interest in Ocean Pulse! Our team will follow up soon.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="product_demo_monitoring" className="modal modal--universal">
				<div className="modal-inner">
					<div className="container">
						<div className="modal-box contact-us-content">
							<a href="#" className="close">
								<img width="16" alt="" data-src="/images/icon-cross.svg"
										 className="lazyload"
										 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								<noscript>
									<img width="16" alt=""
											 data-src="/images/icon-cross.svg"
											 className="lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img width="16" alt=""
												 data-src="/images/icon-cross.svg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img width="16" alt=""
													 data-src="/images/icon-cross.svg"
													 className="lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript>
												<img width="16" alt=""
														 data-src="/images/icon-cross.svg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript><img
													src="/images/icon-cross.svg"
													width="16" alt=""/></noscript>
											</noscript>
										</noscript>
									</noscript>
								</noscript>
							</a>
							<div className="col-r">
								<div className="contact-us-form">
									<div className="header">
										<h6>Explore how Ocean Pulse's Carbon Monitoring product can give you ongoing
											insight into your project's climate impact.</h6>
										<p></p>
									</div>
								</div>
								<div className="success-msg" style={{display: "none"}}>
									<p>Thank you for your interest in Ocean Pulse! Our team will follow up soon.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="enterprise-form" className="modal modal--universal">
					<div className="modal-inner">
						<div className="container">
							<div className="modal-box contact-us-content">
								<a href="#" className="close">
									<img width="16" alt="" data-src="/images/icon-cross.svg"
											 className="lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									<noscript>
										<img width="16" alt=""
												 data-src="/images/icon-cross.svg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
										<noscript>
											<img width="16" alt=""
													 data-src="/images/icon-cross.svg"
													 className="lazyload"
													 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
											<noscript>
												<img width="16" alt=""
														 data-src="/images/icon-cross.svg"
														 className="lazyload"
														 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
												<noscript>
													<img width="16" alt=""
															 data-src="/images/icon-cross.svg"
															 className="lazyload"
															 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
													<noscript><img
														src="/images/icon-cross.svg"
														width="16" alt=""/></noscript>
												</noscript>
											</noscript>
										</noscript>
									</noscript>
								</a>
								<div className="col-r">
									<div className="contact-us-form">
										<div className="header">
											<h6>Contact our team to start investing in nature</h6>
											<p>Our experts are here to help you invest in tech-verified projects or start
												your
												own project from the ground up to reach your climate impact goals.</p>
										</div>
									</div>
									<div className="success-msg" style={{display: "none"}}>
										<p>Thank you for your interest in Ocean Pulse! Our team will follow up soon.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			<script type="text/javascript" src="../js.hsforms.net/forms/current.js" id="base-theme-hsforms-js"></script>
			<script type="text/javascript" id="hs-script-loader" async defer
							src="../js.hs-scripts.com/21158180.js"></script>
		</>
	);
}
