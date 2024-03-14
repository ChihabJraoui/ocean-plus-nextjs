import React, {CSSProperties} from "react";
import Layout from "@app/components/layout";
import Link from "next/link";
import LogoSlider from "@app/components/LogoSlider";

const timelineBlockStyle1 = {
	"--pointer-color": "#84e1ff",
} as CSSProperties;

const timelineBlockStyle2 = {
	"--pointer-color": "#8af289",
	"--step-color-mobile": "#84e1ff",
} as CSSProperties;

const timelineBlockStyle3 = {
	"--pointer-color": "#73a9f5",
	"--step-color-mobile": "#eadf54",
	"--secondary-color": "#eadf54",
} as CSSProperties;

const timelineBlockStyle4 = {
	"--pointer-color": "#fd753b",
	"--step-color-mobile": "#e789ff",
	"--secondary-color": "#e789ff",
} as CSSProperties;

export default function AboutPage() {
	return (
		<Layout>
			<section className="hero-home">
				<div className="container">
					<div className="row">
						<div className="col-sm-8">
							<h1 className="h1-huge">RESTORE NATURE AT CLIMATE SCALE</h1>
						</div>
						<div className="col-sm-8 col-md-6 col-md-offset-2">
							<p>We believe that technology can unleash the full potential of natural systems to solve climate
								change and protect life on earth.</p>
							<ul className="btn-group">
								<li>
									<a href="../#" target="" className="btn  ">Join Us</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="hero-mission">
				<div className="section-heading">
					<div className="container">
						<div className="holder">
							<ul className="btn-group">
							</ul>
						</div>
					</div>
				</div>
				<div className="mission-slider swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="copy-of-29062023-6c-0284-scaled-65c4d999ec6e9"
											 className="attachment-medium_large lazyload"
											 src="/images/copy-of-29062023-6c-0284-scaled-65c4d999ec6e9-768x512.webp"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="copy-of-dsc-0703-scaled-65c4d9c1d7e35"
											 className="attachment-medium_large lazyload"
											 src="/images/copy-of-dsc-0703-scaled-65c4d9c1d7e35-768x512.webp"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="tim-schmidbauer-rzkc5jwsivu-unsplash-scaled-65c4d9e49140b"
											 className="attachment-medium_large lazyload"
											 src="/images/tim-schmidbauer-rzkc5jwsivu-unsplash-scaled-65c4d9e49140b-768x934.webp"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="dsc-2936-1-65c4da2b11f57"
											 className="attachment-medium_large lazyload"
											 src="/images/dsc-2936-1-65c4da2b11f57-768x512.webp"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="chuttersnap-eod5ve4d-g4-unsplash-scaled-65c4da67182d8"
											 className="attachment-medium_large lazyload"
											 src="/images/chuttersnap-eod5ve4d-g4-unsplash-scaled-65c4da67182d8-768x511.webp"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="our-mission-carousel-4"
											 className="attachment-medium_large lazyload"
											 src="/images/our-mission-carousel-4.jpg"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="copy-of-dsc-0734-1-65c4daa1568ab"
											 className="attachment-medium_large lazyload"
											 src="/images/copy-of-dsc-0734-1-65c4daa1568ab-768x512.webp"/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="copy-of-01072023-dji-0594-scaled-65c4dae0bffec"
											 data-src="/images/copy-of-01072023-dji-0594-scaled-65c4dae0bffec-768x512.webp"
											 className="attachment-medium_large lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="pexels-vietnam-photographer-17816484-scaled-65c4db163892f"
											 data-src="/images/pexels-vietnam-photographer-17816484-scaled-65c4db163892f-768x952.webp"
											 className="attachment-medium_large lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="our-mission-carousel-7-65c9fb1eec26a"
											 data-src="/images/our-mission-carousel-7-65c9fb1eec26a.webp"
											 className="attachment-medium_large lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								</div>
							</figure>
						</div>
						<div className="swiper-slide">
							<figure>
								<div className="slide-img">
									<img alt="copy-of-27062023-dji-0336-hdr-scaled-65c4db4a44c4f"
											 data-src="/images/copy-of-27062023-dji-0336-hdr-scaled-65c4db4a44c4f-768x512.webp"
											 className="attachment-medium_large lazyload"
											 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</section>

			<div id="new-vision-for-nature" className="section-heading has-bg ">
				<div className="container">
					<div className="holder">
						<h2>New vision for nature</h2>
						<p><span style={{fontWeight: 400}}>Artificial intelligence and geospatial data enable us to
							understand, intervene and monitor nature with unprecedented insight. It&#8217;s time to see carbon in action.</span>
						</p>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>

			<section className="hover-reveal-component" data-image="/images/heatmap-1600x900.webp"
							 data-heatmap="/images/heatmap-1-min-1-65c6444a8d1b5.webp">
				<div className="hover-reveal-component--waypoint"
						 id="65db441544e3b-0"
						 data-value="40K"
						 data-value-superscript="hectares"
						 data-text="PLANTED"
						 data-animation="radial"
						 data-x="18.8"
						 data-y="62"
						 data-id="65db441544e3b-0"
				>
					<div className="hover-reveal-component--waypoint--content">
						<div className="hover-reveal-component--waypoint--left">
							<div className="hover-reveal-component--waypoint--svg">
								<img src="/images/circle.svg" alt=""/>
							</div>
						</div>
						<div className="hover-reveal-component--waypoint--right">
							<strong>40K<sup>hectares</sup></strong>
							<span>PLANTED</span>
						</div>
					</div>
				</div>
				<div className="hover-reveal-component--waypoint"
						 id="65db441544e3b-1"
						 data-value="12M"
						 data-value-superscript="metric tons of CO2"
						 data-text="SEQUESTERED"
						 data-animation="curve"
						 data-x="35.4"
						 data-y="34"
						 data-id="65db441544e3b-1"
				>
					<div className="hover-reveal-component--waypoint--content">
						<div className="hover-reveal-component--waypoint--left">
							<div className="hover-reveal-component--waypoint--svg">
								<img src="/images/svg-curve-line.svg" alt=""/>
							</div>
						</div>
						<div className="hover-reveal-component--waypoint--right">
							<strong>12M<sup>metric tons of CO2</sup></strong>
							<span>SEQUESTERED</span>
						</div>
					</div>
				</div>
				<div className="hover-reveal-component--waypoint"
						 id="65db441544e3b-2"
						 data-value="50,000"
						 data-value-superscript=""
						 data-text="PEOPLE PROTECTED FROM STORM SURGE"
						 data-animation="rings"
						 data-x="53"
						 data-y="82"
						 data-id="65db441544e3b-2"
				>
					<div className="hover-reveal-component--waypoint--content">
						<div className="hover-reveal-component--waypoint--left">
							<div className="hover-reveal-component--waypoint--svg">
								<img src="/images/svg-rings.svg" alt="" />
							</div>
						</div>
						<div className="hover-reveal-component--waypoint--right">
							<strong>50,000</strong>
							<span>PEOPLE PROTECTED FROM STORM SURGE</span>
						</div>
					</div>
				</div>
				<div className="hover-reveal-component--waypoint"
						 id="65db441544e3b-3"
						 data-value="3"
						 data-value-superscript=""
						 data-text="THREATENED SPECIES RECORDED"
						 data-animation="chart"
						 data-x="61"
						 data-y="33.3"
						 data-id="65db441544e3b-3"
				>
					<div className="hover-reveal-component--waypoint--content">
						<div className="hover-reveal-component--waypoint--left">
							<div className="hover-reveal-component--waypoint--svg">
								<svg xmlns="http://www.w3.org/2000/svg" width="38" height="41" viewBox="0 0 38 41" fill="none">
									<path d="M0 26C0 23.7909 1.79086 22 4 22C6.20914 22 8 23.7909 8 26V41H0V26Z" fill="#C0C9C9"/>
									<path d="M15 18C15 15.7909 16.7909 14 19 14C21.2091 14 23 15.7909 23 18V41H15V18Z" fill="#C0C9C9"/>
									<path d="M30 4C30 1.79086 31.7909 0 34 0C36.2091 0 38 1.79086 38 4V41H30V4Z" fill="#25b8ff"/>
								</svg>
							</div>
						</div>
						<div className="hover-reveal-component--waypoint--right">
							<strong>3</strong>
							<span>THREATENED SPECIES RECORDED</span>
						</div>
					</div>
				</div>
				<div className="hover-reveal-component--waypoint"
						 id="65db441544e3b-4"
						 data-value="200"
						 data-value-superscript=""
						 data-text="LOCAL JOBS CREATED"
						 data-animation="segment"
						 data-x="73"
						 data-y="43.5"
						 data-id="65db441544e3b-4"
				>
					<div className="hover-reveal-component--waypoint--content">
						<div className="hover-reveal-component--waypoint--left">
							<div className="hover-reveal-component--waypoint--svg">
								{/*<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
										 viewBox="0 0 47 47" xml:space="preserve">
                           <g className="svg-animation-segment">
                              <path fill="#6BA6FF" d="M47,23.5c0-4-1-7.9-2.9-11.3c-1.9-3.5-4.7-6.4-8-8.5l-5,7.9c2,1.3,3.7,3,4.8,5.1c1.1,2.1,1.7,4.4,1.7,6.8
                                 H47z"/>
														 <circle opacity="1.000000e-02" fill="none" stroke="#FFFFFF" stroke-width="0.1"
																		 stroke-miterlimit="10" cx="23.5" cy="23.5" r="23.5"/>
                           </g>
									<g className="svg-animation-segment">
                              <path fill="#FF7324" d="M28.9,46.4c5.3-1.2,10-4.3,13.3-8.6c3.3-4.3,5-9.6,4.8-15l-9.4,0.3c0.1,3.3-0.9,6.4-2.9,9s-4.8,4.4-8,5.1
                                 L28.9,46.4z"/>
										<circle opacity="1.000000e-02" fill="none" stroke="#FFFFFF" stroke-width="0.1"
														stroke-miterlimit="10" cx="23.5" cy="23.5" r="23.5"/>
                           </g>
									<g className="svg-animation-segment">
                              <path fill="#EE88FF" d="M1.6,32c1.3,3.4,3.4,6.4,6,8.9c2.7,2.4,5.9,4.2,9.4,5.2c3.5,1,7.1,1.2,10.7,0.5c3.6-0.6,6.9-2.1,9.8-4.3
                                 l-5.6-7.5c-1.7,1.3-3.8,2.2-5.9,2.6c-2.1,0.4-4.3,0.3-6.4-0.3c-2.1-0.6-4-1.7-5.6-3.1c-1.6-1.5-2.8-3.3-3.6-5.3L1.6,32z"/>
										<circle opacity="1.000000e-02" fill="none" stroke="#FFFFFF" stroke-width="0.1"
														stroke-miterlimit="10" cx="23.5" cy="23.5" r="23.5"/>
                           </g>
									<g className="svg-animation-segment">
                              <path fill="#C0C9C9" d="M1.8,14.4c-1.2,2.8-1.8,5.9-1.8,9c0,3.1,0.6,6.1,1.8,9l8.7-3.6c-0.7-1.7-1.1-3.5-1.1-5.4
                                 c0-1.9,0.4-3.7,1.1-5.4L1.8,14.4z"/>
										<circle opacity="1.000000e-02" fill="none" stroke="#FFFFFF" stroke-width="0.1"
														stroke-miterlimit="10" cx="23.5" cy="23.5" r="23.5"/>
                           </g>
									<g className="svg-animation-segment">
                              <path fill="#6D7E7B" d="M36.1,3.7c-2.9-1.9-6.3-3.1-9.7-3.5c-3.5-0.4-7-0.1-10.3,1c-3.3,1.1-6.3,2.9-8.8,5.3s-4.5,5.4-5.7,8.6
                                 l8.8,3.3c0.7-2,1.9-3.7,3.4-5.2s3.3-2.5,5.3-3.2c2-0.7,4.1-0.9,6.2-0.6c2.1,0.3,4.1,1,5.8,2.1L36.1,3.7z"/>
										<circle opacity="1.000000e-02" fill="none" stroke="#FFFFFF" stroke-width="0.1"
														stroke-miterlimit="10" cx="23.5" cy="23.5" r="23.5"/>
                           </g>
                        </svg>*/}
							</div>
						</div>
						<div className="hover-reveal-component--waypoint--right">
							<strong>200</strong>
							<span>LOCAL JOBS CREATED</span>
						</div>
					</div>
				</div>
			</section>

			<section className="timeline-section--component timeline-section story-timeline">
				<div className="timeline-section--backgrounds-wrapper">
					<div className="timeline-section--backgrounds">
						<div className="timeline-section--background timeline-section--spacer"></div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="copy-of-lingchor-ldy1k7rklea-unsplash-scaled-65c9fb8c37b75"
									 className="attachment-full lazyload"
									 src="/images/copy-of-lingchor-ldy1k7rklea-unsplash-scaled-65c9fb8c37b75.webp"/>
						</div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="copy-of-josh-withers-un-w3z4d0pw-unsplash-scaled-65c9fbba19dda"
									 data-src="/images/copy-of-josh-withers-un-w3z4d0pw-unsplash-scaled-65c9fbba19dda.webp"
									 className="attachment-full lazyload"
									 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
						</div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="copy-of-qingbao-meng-01-igfr7hd4-unsplash-1-scaled-65c9f6bcd6450"
									 data-src="/images/copy-of-qingbao-meng-01-igfr7hd4-unsplash-1-scaled-65c9f6bcd6450.webp"
									 className="attachment-full lazyload"
									 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
						</div>
					</div>
				</div>

				<div className="timeline-block timeline-section--first-step timeline-section--step"
						 style={timelineBlockStyle1}>
					<div className="container">
						<div className="txt">
							<h1>Our story</h1>
							<ul className="btn-group">
							</ul>
						</div>
						<div className="timeline-section--pointer"></div>
					</div>
				</div>

				<div className="timeline-block layout-mobile-change timeline-section--step step-1"
						 style={timelineBlockStyle2}>
					<div className="img">
						<img alt="copy-of-lingchor-ldy1k7rklea-unsplash-scaled-65c9fb8c37b75"
								 data-src="/images/copy-of-lingchor-ldy1k7rklea-unsplash-scaled-65c9fb8c37b75-1600x1060.webp"
								 className="attachment-large-1600 lazyload"
								 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="inner-box">
								<span className="label">ORIGINS</span>
								<h3>Inspired by the Amazon, born in the Redwoods</h3>
								<p>Pachama’s founders were born and raised in South America where they witnessed the devastating
									deforestation of the mighty Amazon rainforest, prompting them to action. As technologists, they moved
									to Silicon Valley and, from a cabin in the mighty Redwood forests, Pachama was born to bridge
									accelerating technologies with the urgent need for conservation and restoration funding to address
									climate change and biodiversity loss.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-block layout-mobile-change timeline-section--step step-2"
						 style={timelineBlockStyle3}>
					<div className="img">
						<img alt="copy-of-josh-withers-un-w3z4d0pw-unsplash-scaled-65c9fbba19dda"
								 data-src="/images/copy-of-josh-withers-un-w3z4d0pw-unsplash-scaled-65c9fbba19dda-1600x1199.webp"
								 className="attachment-large-1600 lazyload"
								 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="timeline-section--point"></div>
							<div className="inner-box">
								<span className="label">GROWTH</span>
								<h3>Restoring millions of hectares </h3>
								<p>Pachama&apos;s mission swiftly attracted talented engineers, scientists and investors from around the
									world, who felt called to invest their time and money in the cause. In the subsequent years, Pachama
									helped fund projects that restored more than 10K hectares and conserved more than 2M hectares of
									native forest around the world, equipping dozens of Fortune 500 companies with the insights needed to
									confidently invest in nature. Today, Pachama continues to advance its technology platform and
									ecosystem to catalyze a new generation of nature-based carbon projects, helping carbon markets
									evolve.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-block layout-mobile-change timeline-section--step step-3"
						 style={timelineBlockStyle4}>
					<div className="img">
						<img alt="copy-of-qingbao-meng-01-igfr7hd4-unsplash-1-scaled-65c9f6bcd6450"
								 data-src="/images/copy-of-qingbao-meng-01-igfr7hd4-unsplash-1-scaled-65c9f6bcd6450-1600x953.webp"
								 className="attachment-large-1600 lazyload"
								 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="timeline-section--point"></div>
							<div className="inner-box">
								<span className="label">FUTURE</span>
								<h3>Cultivating a natural renaissance</h3>
								<p>We envision a world in which a flourishing nature, new technologies and human collaboration unite our
									economies and our ecologies. Where businesses have an inherent positive impact on the Earth’s
									biosphere and atmosphere, of which they are a part. Pachama is committed to continue investing with
									conviction in the innovations needed to restore nature at climate scale, helping businesses invest in
									nature with trust.</p>
							</div>
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

			<div className="logo-slider-section">
				<div className="container">
					<h2 className="lg">Recognized by respected institutions</h2>
				</div>
				<LogoSlider/>
			</div>

			<hr className="separator"/>

			<div id="our-statement-of-intent" className="section-heading  ">
				<div className="container">
					<div className="holder">
						<h2>Our statement of intent</h2>
						<p>Now is the moment to reimagine the relationship between business and nature. To harness technology to
							shift our perspective and restore integrity and confidence in nature.</p>
						<p>It&#8217;s time to see carbon in action.</p>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>

			<div className="video-w-links">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-lg-14 holder">
							<div className="video-col">
								<div className="video-frame video-thumb">
									<a href="#" className="play-video watch-video" data-type="youtube"
										 data-source="U7J72kytfmg?si=VIedHQx_P1OPQfDF">
										<img alt="scanning layer"
												 className="attachment-large lazyload"
												 src="/images/scanning-layer-1024x535.png"/>
										<span className="btn-play"><i className="icon-play"></i><span>Play Video</span></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr className="separator"/>

			<section className="team-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-lg-14">
							<div className="heading">
								<h2>The team: A force of nature</h2>
								<p><span style={{fontWeight: 400}}>Pachama’s team is made up of a global collective
										of brilliant engineers, scientists, creatives and business professionals with
										remarkable purpose, tenacity, excellence and integrity. With backgrounds ranging
										from NASA, Google, The Nature Conservancy, SpaceX, Microsoft, Tesla, Airbnb
										, among others, our team combines outstanding experiences in science, technology and
										operational excellence.</span>
								</p>
							</div>
							<div className="tabset">
								<ul>
									<li className="active"><a data-filter="Leadership" href="#">Leadership</a></li>
									<li><a data-filter="Scientists" href="#">Scientists</a></li>
									<li><a data-filter="Project Operations" href="#">Project Operations</a></li>
									<li><a data-filter="AI and Software" href="#">AI and Software</a></li>
									<li><a data-filter="Business" href="#">Business</a></li>
									<li><a data-filter="Creatives" href="#">Creatives</a></li>
									<li><a data-filter="Board" href="#">Board</a></li>
									<li><a data-filter="All" href="#">All</a></li>
								</ul>
							</div>
							<div className="member-list tabs active" data-category="Leadership">
								<div className="member-card">
									<div className="img">
										<img alt="Diego Saez Gil"
												 className="lazyload"
												 src="/images/Pachama-DiegoSaezGil-001-2-scaled-e1707512092753-768x549.jpg" />
									</div>
									<strong className="name">Diego Saez Gil</strong>
									<span className="role">Co-Founder & CEO</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Renu Gupta"
												 data-src="/images/Renu_Gupta-scaled-e1707362956409-768x768.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Renu Gupta</strong>
									<span className="role">SVP of Revenue</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Dick Cameron"
												 data-src="/images/Dick_Cameron-scaled-1-768x512.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Dick Cameron</strong>
									<span className="role">VP of Science</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Hannah Schlesinger"
												 data-src="/images/Hannah-Schlesinger-scaled-1-e1706621886999-768x564.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Hannah Schlesinger</strong>
									<span className="role">VP of Strategy and Operations</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Tomas Aftalion"
												 className="lazyload"
												 src="/images/admin-ajax.png" />
									</div>
									<strong className="name">Tomas Aftalion</strong>
									<span className="role">Co-founder & Head of X</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Chrystal Henke Ball"
												 data-src="/images/Chrystal-Henke-Ball-768x429.jpg" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Chrystal Henke Ball</strong>
									<span className="role">VP of Engineering</span>
								</div>
							</div>
							<div className="member-list tabs " data-category="Scientists">
								<div className="member-card">
									<div className="img">
										<img alt="Carlos Silva"
												 data-src="/images/Carlos_Silva-scaled-e1707363102139-768x768.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Carlos Silva</strong>
									<span className="role">Research & Development </span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Rachel Engstrand" data-src="/images/avatar-rachel.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Rachel Engstrand</strong>
									<span className="role">Applied Science</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Liang (Alan) Xu" data-src="/images/Liang-Alan-Xu-768x773.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Liang (Alan) Xu</strong>
									<span className="role">Remote Sensing</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Max Yancho" data-src="/images/Max_Yancho-scaled-1-768x512.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Max Yancho</strong>
									<span className="role">Applied Science</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Chloe Papalazarou"
												 data-src="/images/Chloe_Papalazarou-768x1024.jpeg" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Chloe Papalazarou</strong>
									<span className="role">Applied Science</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Will Merritt" data-src="/images/Will_Merritt-768x851.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Will Merritt</strong>
									<span className="role">Applied Science</span>
								</div>
							</div>
							<div className="member-list tabs " data-category="Project Operations">
								<div className="member-card">
									<div className="img">
										<img alt="Gabe Chapin" data-src="/images/Gabe_Chapin-768x576.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Gabe Chapin</strong>
									<span className="role">Carbon Project Operations</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Andrea Castillo" data-src="/images/andrea-1.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Andrea Castillo</strong>
									<span className="role">Carbon Development</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Rodrigo Wanderley" data-src="/images/avatar-rodrigo.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Rodrigo Wanderley</strong>
									<span className="role">Carbon Development</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Jo Jensen" data-src="/images/Jo_Jensen_2024-768x1024.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Jo Jensen</strong>
									<span className="role">Forest Science</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Hannah Schlesinger"
												 data-src="/images/Hannah-Schlesinger-scaled-1-e1706621886999-768x564.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Hannah Schlesinger</strong>
									<span className="role">VP of Strategy and Operations</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Leo Santiago"
												 data-src="/images/Leo_Santiago-scaled-1-e1706622149712-768x623.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Leo Santiago</strong>
									<span className="role">Carbon Project Success</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Sophia Wood" data-src="/images/Sophia-Wood-768x501.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Sophia Wood</strong>
									<span className="role">Carbon Project Success</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Catherine Charnov" data-src="/images/catherine-charnov.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Catherine Charnov</strong>
									<span className="role">Carbon Development</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Natalie Urban"
												 data-src="/images/Natalie_Urban-e1708069123452-768x504.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Natalie Urban</strong>
									<span className="role">Carbon Development</span>
								</div>
							</div>
							<div className="member-list tabs " data-category="AI and Software">
								<div className="member-card">
									<div className="img">
										<img alt="Manisha Naidu" data-src="/images/Manisha-Naidu-1-768x1365.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Manisha Naidu</strong>
									<span className="role">Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Heidi Hurst" data-src="/images/avatar-heidi.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Heidi Hurst</strong>
									<span className="role">Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Harley Alexander" data-src="/images/avatar-harley.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Harley Alexander</strong>
									<span className="role">Software</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Ailin Yu" data-src="/images/avatar-ailin-768x483.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Ailin Yu</strong>
									<span className="role">Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Jeffrey Seifried"
												 data-src="/images/Jeffrey-Seifried-768x576.jpg" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Jeffrey Seifried</strong>
									<span className="role">Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Marie Hoeger" data-src="/images/avatar-marie.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Marie Hoeger</strong>
									<span className="role">Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Dan Smith"
												 data-src="/images/dan_smith_headshot-scaled-1-768x512.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Dan Smith</strong>
									<span className="role">Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Katy Evans" data-src="/images/Katy_Evans-768x512.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Katy Evans</strong>
									<span className="role">Director of Engineering</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Parker Irving" data-src="/images/avatar-parker.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Parker Irving</strong>
									<span className="role">Software</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Lindsey Nield" data-src="/images/Lindsey_Nield-768x512.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Lindsey Nield</strong>
									<span className="role">Machine Learning</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Andrew Campbell" data-src="/images/Andrew_Campbell-768x512.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Andrew Campbell</strong>
									<span className="role">Software</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Kevin Mehlbrech"
												 data-src="/images/Kevin_Mehlbrech-scaled-1-768x619.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Kevin Mehlbrech</strong>
									<span className="role">Engineering</span>
								</div>
							</div>
							<div className="member-list tabs " data-category="Business">
								<div className="member-card">
									<div className="img">
										<img alt="Tyler Johnson" data-src="/images/avatar-tyler.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Tyler Johnson</strong>
									<span className="role">Revenue Operations</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Nick Harrison"
												 data-src="/images/Nick-Harrison-headshot-scaled-1-e1706622192706-768x651.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Nick Harrison</strong>
									<span className="role">Sales</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Allison Handunge" data-src="/images/avatar-allison.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Allison Handunge</strong>
									<span className="role">Carbon Solutions</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Rustom Birdie" data-src="/images/Rustom_Birdie-768x512.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Rustom Birdie</strong>
									<span className="role">Sales</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Kelly Rytel" data-src="/images/Kelly-Rytel-768x518.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Kelly Rytel</strong>
									<span className="role">Carbon Solutions</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Michael Wang" data-src="/images/Home-Headshot-768x432.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Michael Wang</strong>
									<span className="role">VP of Finance</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Jamie Durfee" data-src="/images/Jamie_Durfee-768x445.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Jamie Durfee</strong>
									<span className="role">Recruiting</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Matt Beck" data-src="/images/Matt-Beck.jpg-768x824.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Matt Beck</strong>
									<span className="role">Revenue Operations</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Anna Zapalowska"
												 data-src="/images/Anna-Zap-Headshot-1-768x1024.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Anna Zapalowska</strong>
									<span className="role">Business Development</span>
								</div>
							</div>
							<div className="member-list tabs " data-category="Creatives">
								<div className="member-card">
									<div className="img">
										<img alt="Alejandro Vizio" data-src="/images/Alejandro-Vizio-768x431.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Alejandro Vizio</strong>
									<span className="role">Design</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Addie Johnson" data-src="/images/avatar-addie.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Addie Johnson</strong>
									<span className="role">Marketing</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Adam Blau" data-src="/images/Adam_Blau.jpeg" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Adam Blau</strong>
									<span className="role">Product</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Andrea Sassenrath" data-src="/images/andrea.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Andrea Sassenrath</strong>
									<span className="role">Product</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Felix Dorrek"
												 data-src="/images/Felix_Dorrek_2-scaled-1-768x519.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Felix Dorrek</strong>
									<span className="role">Product</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Cait Harding" data-src="/images/avatar-cait.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
									</div>
									<strong className="name">Cait Harding</strong>
									<span className="role">Sr Director of Marketing</span>
								</div>
							</div>
							<div className="btn-hold">
								<a href="../#" className="btn">Join the team</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cta">
				<div className="container">
					<div className="cta-box">
						<div className="img">
							<img alt="Join the force of nature were hiring bg"
									 className="attachment-large-1600 lazyload"
									 src="/images/Join-the-force-of-nature-were-hiring-bg.png"/>
						</div>
						<div className="cta-background-dots-animation"></div>
						<div className="cta-txt">
							<h2>Join the force of nature. </h2>
							<ul className="btn-group">
								<li>
									<a href="../#" target="" className="btn  ">See open roles</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<div id="our-backers" className="section-heading  ">
				<div className="container">
					<div className="holder">
						<h2>Our backers</h2>
						<p>Pachama is backed by some of the world&#8217;s most innovative investors and founders, deeply
							committed to addressing climate change and protecting life on Earth.</p>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>

			<div className="logo-slider-section">
				<LogoSlider />
			</div>

			<section className="team-section no-intro-filter">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-lg-14">
							<div className="member-list">
								<div className="member-card">
									<div className="img">
										<img alt="Biz Stone"
												 className="lazyload"
												 src="/images/Group-9-768x768.png"/>
									</div>
									<strong className="name">Biz Stone</strong>
									<span className="role">Co-Founder of Twitter</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Rose Marcario"
												 className="lazyload"
												 src="/images/Rose-2-768x766.png"/>
									</div>
									<strong className="name">Rose Marcario</strong>
									<span className="role">Former CEO of Patagonia</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Ellen DeGeneres"
												 className="lazyload"
												 src="/images/Ellen-Headshot-Polka-Dot-Collar-768x767.png"/>
									</div>
									<strong className="name">Ellen DeGeneres</strong>
									<span className="role">Comedian and Former Talk Show Host</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Serena Williams"
												 className="lazyload"
												 src="/images/Serena-Tile-768x768.png"/>
									</div>
									<strong className="name">Serena Williams</strong>
									<span className="role">Former Professional Tennis Player and Entrepreneur</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Ryan Graves" data-src="/images/Saltwater-Ryan-768x764.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Ryan Graves</strong>
									<span className="role">Co-Founder of Uber</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Laura Dern" data-src="/images/Laura-dern-bw-768x769.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Laura Dern</strong>
									<span className="role">Actress and Activist</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Paul Graham" data-src="/images/paul.jpeg" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Paul Graham</strong>
									<span className="role">Y Combinator Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Portia De Rossi" data-src="/images/Portia-bw.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Portia De Rossi</strong>
									<span className="role">Former Actress and Founder of General Public</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Tobi Lutke"
												 data-src="/images/Tobi-lutke-1-e1707272375119-768x768.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Tobi Lutke</strong>
									<span className="role">Shopify Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Manu Ginobili" data-src="/images/Manu-1-768x432.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Manu Ginobili</strong>
									<span className="role">Investor and Professional Basketball Player</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Alexis Ohanian"
												 data-src="/images/alexis-ohanian600x600-1-768x768.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Alexis Ohanian</strong>
									<span className="role">776 Founder & Reddit Co-Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Lenny Rachitsky" data-src="/images/Lenny-.jpeg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Lenny Rachitsky</strong>
									<span className="role">Author and Thought Leader</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Azeem Azhar" data-src="/images/Azeem-1-1.png" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Azeem Azhar</strong>
									<span className="role">Exponential View Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Joe Gebbia"
												 data-src="/images/Joe-Gebbia-1-e1707274484958-768x768.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Joe Gebbia</strong>
									<span className="role">Airbnb Co-Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Chris Sacca"
												 data-src="/images/Chris-Sacca-1-e1707272526980-768x768.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Chris Sacca</strong>
									<span className="role">Lowercase Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Marcos Galperin"
												 data-src="/images/Marcos-galperin-2-1-768x768.png" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Marcos Galperin</strong>
									<span className="role">Mercado Libre Co-Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Claire Hughes Johnson"
												 data-src="/images/Claire-Hughes-Johnson-min.jpg" className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Claire Hughes Johnson</strong>
									<span className="role">Stripe Corporate Officer and Advisor</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Seth Goldman" data-src="/images/Seth-Goldman-min.jpg"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Seth Goldman</strong>
									<span className="role">Honest Tea Co-Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Shana Fisher"
												 data-src="/images/shanafisher-1-e1707272405914-768x768.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Shana Fisher</strong>
									<span className="role">Third Kind Founder</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Ram Shriram" data-src="/images/ram-shriram-1.png"
												 className="lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<strong className="name">Ram Shriram</strong>
									<span className="role">Founder of Sherpalo Ventures</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Tim O&#8217;Reilly" className="lazyload"
												 src="/images/Tim-o-reilly-1-768x771.png"/>
									</div>
									<strong className="name">Tim O&#8217;Reilly</strong>
									<span className="role">O&apos;Reilly Media Founder and CEO</span>
								</div>
								<div className="member-card">
									<div className="img">
										<img alt="Sahil Lavingia"
												 className="lazyload"
												 src="/images/sahil-1-768x758.png"/>
									</div>
									<strong className="name">Sahil Lavingia</strong>
									<span className="role">Gumroad Founder</span>
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
							<img alt="desktop-3-1-65c9fcb705433"
									 className="attachment-large-1600 lazyload"
									 src="/images/desktop-3-1-65c9fcb705433.webp"/>
						</div>
						<div className="cta-background-dots-animation"></div>
						<div className="cta-txt">
							<h2>Join the mission.Partner with Pachama.</h2>
							<ul className="btn-group">
								<li>
									<Link href="/get-started" target="" className="btn  ">Contact Us</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="article-list">
				<div className="container">
					<div className="header">
						<h2>Pachama in the news</h2>
						<div className="btn-wrap">
							<a href="../#" className="btn btn-secondary">See more resources</a>
						</div>
					</div>
				</div>
			</section>

			<section className="why-invest">
				<div className="container">
					<div className="three-cols-slider swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="lidar-paisagens-para-02-1-65c9fd2eee9f6"
												 data-src="/images/lidar-paisagens-para-02-1-65c9fd2eee9f6-768x477.webp"
												 className="attachment-medium_large lazyload"
												 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
									</div>
									<div className="card-content">
										<h3 className="h5">Pachama Launches First AI-Based Forest Tool</h3>
										<p>Pachama&apos;s Evaluation Criteria 2.1 launches the first AI-based tool for evaluating forest
											carbon projects.</p>
										<ul className="btn-group">
											<li>
												<a
													href="https://carbonherald.com/pachama-launches-first-ai-based-forest-project-evaluation-tool/"
													target="_blank" rel="noreferrer" className="btn  ">Read more </a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="alex-diaz-rjycnt2hewy-unsplash-65c9fd69b871e"
												 className="attachment-medium_large lazyload"
												 src="/images/alex-diaz-rjycnt2hewy-unsplash-65c9fd69b871e.webp"/>
									</div>
									<div className="card-content">
										<h3 className="h5">Pachama Makes Forbes AI 50 List</h3>
										<p>Forbes AI 50 recognizes the most promising privately-held companies building businesses out
											of artificial intelligence. </p>
										<ul className="btn-group">
											<li>
												<a href="https://www.forbes.com/lists/ai50/?sh=7b0c58ff290f" target="_blank" rel="noreferrer"
													 className="btn  ">Read
													more on Forbes</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img
											alt="pachama-avahoula-climate-mitigation-still01-scaled-e1707159718380-768x700-65c9fdebe6296"
											className="attachment-medium_large lazyload"
											src="/images/pachama-avahoula-climate-mitigation-still01-scaled-e1707159718380-768x700-65c9fdebe6296.webp"/>
									</div>
									<div className="card-content">
										<h3 className="h5">Protecting 2M acres in Lower Mississippi</h3>
										<p>Fast Company highlights Pachama Original, Flyway Forests, developed in partnership with Ducks
											Unlimited and PERENfra.</p>
										<ul className="btn-group">
											<li>
												<a rel="noreferrer"
													href="https://www.fastcompany.com/90978355/in-the-mississippi-valley-these-farmers-are-getting-paid-to-restore-3000-acres-of-forest?partner=rss&amp;utm_source=rss&amp;utm_medium=feed&amp;utm_campaign=rss+fastcompany&amp;utm_content=rss"
													target="_blank" className="btn  ">Read more on FastCo</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}