import React, {CSSProperties} from "react";
import Layout from "@app/components/layout";
import Link from "next/link";
import LogoSlider from "@app/components/LogoSlider";

export default function PartnerPage() {
	return (
		<Layout>
			<section className="page-hero">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-7 col-lg-offset-1">
							<div className="content">
								<div className="inner">
									<h1>Make an income restoring nature.</h1>
									<div className="txt">
										<p>
											<span style={{fontWeight: 400}}>Access intuitive tools to develop carbon projects, get funding, and measure impact.</span>
										</p>
									</div>
									<div className="project-calculator-holder">
										<div className="project-calculator credits-yield-calculator">
											<div id="credits-yield-calculator--map" className="credits-yield-calculator--map"></div>
											<div className="pc-content">
												<div className="holder">
													<div className="credits-yield-calculator--loader">
														<div className="credits-yield-calculator--loader-icon"></div>
													</div>
													<strong className="title">Your reforestation project could remove</strong>
													<h2 className="credits-yield-calculator--title"></h2>
													<p className="credits-yield-calculator--text"></p>
													<div className="slider credits-yield-calculator--slider" data-range-min="50"
															 data-range-max="1000">
														<input type="hidden" name="value" className="credits-yield-calculator--input"/>
														<div className="bar credits-yield-calculator--bar">
															<span className="credits-yield-calculator--bar-progress" style={{width: "100%"}}></span>
														</div>
														<span className="handle credits-yield-calculator--bar-thumb"></span>
													</div>
													<span className="highlight credits-yield-calculator--highlight"></span>
													<ul className="btn-group">
													</ul>
												</div>
											</div>
										</div>
									</div>
									<ul className="btn-group">
										<li>
											<a href="https://portal.pachama.com/analyze" target="" className="btn  ">Submit your project</a>
										</li>
									</ul>
									<div className="link-wrap">
										<Link href="/enterprise" className="link-a">Are you a business looking to invest in
											nature?</Link>
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
								<strong className="txt">Already have a registered carbon project?</strong>
								<ul className="btn-group">
									<li>
										<a href="#supply_partner_verifieds_form" className="btn  btn-secondary" data-modal>sell credits with
											us</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div id="why-work-with-pachama" className="section-heading space is-left-sm ">
				<div className="container">
					<div className="holder">
						<h2>Why work with Pachama</h2>
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
										<img alt="post-how-much-should-a-carbon-credit-cost-65c4d15b3543d"
												 className="attachment-medium_large lazyload"
												 src="/images/post-how-much-should-a-carbon-credit-cost-65c4d15b3543d.webp"/>
									</div>
									<div className="card-content">
										<h3 className="h5">Secure funds for your project</h3>
										<p>Apply for funding to access leading corporates and investors currently financing quality
											projects. <br/></p>
										<ul className="btn-group">
										</ul>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="rectangle-1-65c4d18a1b7e7"
												 className="attachment-medium_large lazyload"
												 src="/images/rectangle-1-65c4d18a1b7e7-768x288.webp"/>
									</div>
									<div className="card-content">
										<h3 className="h5">Easily assess land eligibility and carbon potential </h3>
										<p>Tap into Pachama&apos;s forest expertise via automated technology to identify land with the highest
											potential for carbon financing.<br/></p>
										<ul className="btn-group">
										</ul>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="card card-resources">
									<div className="img">
										<img alt="rectangle-1-7-65c4d2499ea1a"
												 className="attachment-medium_large lazyload"
												 src="/images/rectangle-1-7-65c4d2499ea1a.webp"/>
									</div>
									<div className="card-content">
										<h3 className="h5">Get the highest pricefor your credits</h3>
										<p>Get insight into the characteristics that buyers want to design the highest value projects.<br/>
										</p>
										<ul className="btn-group">
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
					<h2 className="lg">Climate leaders worldwide are investing through Pachama</h2>
				</div>
				<LogoSlider />
			</div>

			<section className="timeline-section--component timeline-section default">
				<div className="timeline-section--backgrounds-wrapper">
					<div className="timeline-section--backgrounds">
						<div className="timeline-section--background timeline-section--spacer"></div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="desktop-1-65c3cf5ba0384"
									 className="attachment-full lazyload"
									 src="/images/desktop-1-65c3cf5ba0384.webp"/>
						</div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="desktop-1-1-65c3cf8db7fe8"
									 className="attachment-full lazyload"
									 src="/images/desktop-1-1-65c3cf8db7fe8.webp"/>
						</div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="desktop-2-1-65c3cfc364dee"
									 className="attachment-full lazyload"
									 src="/images/desktop-2-1-65c3cfc364dee.webp"/>
						</div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="desktop-3-1-65c3d8ac21f10"
									 className="attachment-full lazyload"
									 src="/images/desktop-3-1-65c3d8ac21f10.webp"/>
						</div>
						<div className="timeline-section--background timeline-section--media">
							<img alt="desktop-4-1-65c3d8e3c9f6e"
									 className="attachment-full lazyload"
									 src="/images/desktop-4-1-65c3d8e3c9f6e.webp"/>
						</div>
					</div>
				</div>
				<div className="timeline-block timeline-section--first-step timeline-section--step"
						 style={{"--pointer-color": "#84e1ff"} as CSSProperties}>
					<div className="container">
						<div className="txt">
							<h1>How it works</h1>
							<p>Pachama’s technology tools make forest carbon projects simple, from planting seeds to selling
								credits.</p>
							<ul className="btn-group">
							</ul>
						</div>
						<div className="timeline-section--pointer"></div>
					</div>
				</div>
				<div className="timeline-block layout-default timeline-section--step step-1"
						 style={{"--pointer-color": "#8af289", "--step-color-mobile": "#84e1ff"} as CSSProperties}>
					<div className="img">
						<img alt="desktop-1-65c3cf5ba0384"
								 className="attachment-large-1600 lazyload"
								 src="/images/desktop-1-65c3cf5ba0384-1600x900.webp"/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="inner-box">
								<span className="label">Step 1</span>
								<h3>Screen your project concept</h3>
								<p>Check if your concept qualifies as a reforestation carbon project for free. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-block layout-default timeline-section--step step-2"
						 style={{"--pointer-color": "#73a9f5", "--step-color-mobile": "#eadf54", "--secondary-color": "#eadf54"} as CSSProperties}>
					<div className="img">
						<img alt="desktop-1-1-65c3cf8db7fe8"
								 className="attachment-large-1600 lazyload"
								 src="/images/desktop-1-1-65c3cf8db7fe8-1600x900.webp"/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="timeline-section--point"></div>
							<div className="inner-box">
								<span className="label">Step 2</span>
								<h3> Qualify your project </h3>
								<p>Design project plans informed by buyer insights and apply for financing. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-block layout-default timeline-section--step step-3"
						 style={{"--pointer-color": "#fd753b", "--step-color-mobile": "#e789ff", "--secondary-color": "#e789ff"} as CSSProperties}>
					<div className="img">
						<img alt="desktop-2-1-65c3cfc364dee"
								 className="attachment-large-1600 lazyload"
								 src="/images/desktop-2-1-65c3cfc364dee-1600x900.webp"/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="timeline-section--point"></div>
							<div className="inner-box">
								<span className="label">Step 3</span>
								<h3>Commit to contracts</h3>
								<p>Finalize legal agreements and efficiently navigate the investor due diligence process to secure
									financing. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-block layout-default timeline-section--step step-4"
						 style={{"--pointer-color": "#84e1ff", "--step-color-mobile": "#84e1ff", "--secondary-color": "#F581AE"} as CSSProperties}>
					<div className="img">
						<img alt="desktop-3-1-65c3d8ac21f10"
								 className="attachment-large-1600 lazyload"
								 src="/images/desktop-3-1-65c3d8ac21f10-1600x900.webp"/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="timeline-section--point"></div>
							<div className="inner-box">
								<span className="label">Step 4</span>
								<h3>Execute restoration</h3>
								<p>Secure seedlings, plant trees and monitor progress over time enabled by remote sensing
									technology.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="timeline-block layout-default timeline-section--step step-5"
						 style={{"--pointer-color": "#eadf54", "--step-color-mobile": "#eadf54", "--secondary-color": "#8af289"} as CSSProperties}>
					<div className="img">
						<img alt="desktop-4-1-65c3d8e3c9f6e"
								 className="attachment-large-1600 lazyload"
								 src="/images/desktop-4-1-65c3d8e3c9f6e-1600x900.webp"/>
					</div>
					<div className="container">
						<div className="step-content">
							<div className="timeline-section--point"></div>
							<div className="inner-box">
								<span className="label">Step 5</span>
								<h3>Issue credits and maintain</h3>
								<p>Efficiently register your project, get credits, connect with buyers, monitor project impacts and
									expand. </p>
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

			<hr className="separator" style={{"--mt": "80px"} as CSSProperties} />

			<div className="quote">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-md-8 col-lg-7">
							<div className="quote-img">
								<img alt="meli-case-study-65c9f07330dbb"
										 className="attachment-large lazyload"
										 src="/images/meli-case-study-65c9f07330dbb.webp"/>
							</div>
						</div>
						<div className="col-lg-offset-1 col-md-8 col-lg-6">
							<div className="txt-hold">
								<div className="txt-top">
									<blockquote>
										<p className="check-quote">Mercado Libre is partnering with Pachama to originate a new generation of
											forest projects. </p>
									</blockquote>
									<p><span style={{fontWeight: 400}}>Mercado Libre has partnered with Pachama to
										invest $23.7 million in projects across Brazil and Mexico as part of their
										flagship program, Regenera América.</span></p>
								</div>
								<ul className="btn-group">
									<li>
										<a
											href="../blog/how-mercado-libre-is-catalyzing-environmental-restoration-in-latin-america/index.html"
											target="" className="btn  ">Read case study</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="accordion-section space-xxl">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-lg-offset-1 col-lg-7">
							<div className="text-wrap">
								<h2> Superpower your project with Pachama&apos;s technology</h2>
								<ul data-accordion="one" className="accordion">
									<li className="first">
										<a href="#" data-more className="h5 active">Assess land eligibility </a>
										<div className="slide">
											<p><span style={{fontWeight: 400}}>Get an early assessment of an area&#8217;s
												eligibility for native reforestation carbon project development based on
												factors like land cover, vegetation history, and natural risks. </span></p>
											<ul className="btn-group">
												<li>
													<a href="https://portal.pachama.com/en/onboarding" target="" className="btn  ">Get Started</a>
												</li>
											</ul>
											<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
												<picture className="img">
													<img alt="land-2-65c4d2adbef96"
															 className="attachment-large lazyload"
															 src="/images/land-2-65c4d2adbef96-886x1024.webp"/>
												</picture>
											</div>
										</div>
									</li>
									<li className="rest">
										<a href="#" data-more className="h5 ">Get carbon estimates in seconds </a>
										<div className="slide">
											<p><span style={{fontWeight: 400}}>Easily calculate the carbon potential of your
												project area with visibility into conservative and optimistic estimates based
												on a range of key factors.</span></p>
											<ul className="btn-group">
												<li>
													<a href="https://portal.pachama.com/en/onboarding" target="" className="btn  ">Get Started</a>
												</li>
											</ul>
											<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
												<picture className="img">
													<img alt="credit-2-65c4d2dbaf787"
															 className="attachment-large lazyload"
															 src="/images/credit-2-65c4d2dbaf787-886x1024.webp"/>
												</picture>
											</div>
										</div>
									</li>
									<li className="rest">
										<a href="#" data-more className="h5 ">Analyze profit potential </a>
										<div className="slide">
											<p><span style={{fontWeight: 400}}>Find out if your project will be financially viable
												based on project size, credit yield projections, and anticipated costs. </span></p>
											<ul className="btn-group">
												<li>
													<a href="https://portal.pachama.com/en/onboarding" target="" className="btn  ">Get Started</a>
												</li>
											</ul>
											<div className="img-hold col-lg-offset-1 col-md-8 col-lg-7">
												<picture className="img">
													<img alt="profit-2-65c4d3039241f"
															 className="attachment-large lazyload"
															 src="/images/profit-2-65c4d3039241f-886x1024.webp"/>
												</picture>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="where-pachama-currently-supports-projects" className="section-heading  ">
				<div className="container">
					<div className="holder">
						<h2>Where Pachama currently supports projects</h2>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>
			
			<section className="world-map">
				<img alt="world-map-65c3d931481bb"
						 className="map background lazyload"
						 src="/images/world-map-65c3d931481bb.png"/>
				<span className="country-label" style={{left: "45%", top: "30%"}}>
               <img alt="flag-usa" className="flag lazyload"
										src="/images/flag-usa.jpg"/>
               UNITED STATES
            </span>
				<span className="country-label" style={{left: "39%", top: "50%"}}>
               <img alt="Mask group" className="flag lazyload"
										src="/images/Mask-group.png"/>
               Mexico
            </span>
				<span className="country-label" style={{left: "57%", top: "63%"}}>
               <img alt="flag-brazil-1"
										className="flag lazyload"
										src="/images/flag-brazil-1.png"/>
               Brazil
            </span>
			</section>
			
			<section className="intro-text--centered">
				<div className="container">
					<div className="desc">
						<p>Pachama is supporting reforestation carbon project development in the USA, Mexico, and Brazil with plans
							to expand to additional countries in Latin America this year. </p>
						<ul className="btn-group">
							<li>
								<a href="https://portal.pachama.com/en/onboarding" target="" className="btn  ">Get Started</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			
			<section className="featured-guide featured-guide-reverse">
				<div className="inner">
					<picture className="img">
						<img alt="copy-of-spencer-watson-vzvghfxziz8-unsplash-65c9f11573f8b"
								 className="attachment-large-1600 lazyload"
								 src="/images/copy-of-spencer-watson-vzvghfxziz8-unsplash-65c9f11573f8b.webp"/>
					</picture>
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-md-10 col-lg-8">
								<div className="featured-guide-txt">
									<div className="txt">
										{/*<h1>Build a portfolio of the world’s best forest projects. </h1>*/}
										<h2>“Being able to work with a partner that is so focused on developing technology and building
											trust on the demand side of the carbon market is vital for us.”</h2>
											<p><span style={{fontWeight: 400}}>Toroto is a startup company based in Mexico that designs and implements large-scale nature-based projects. They are heavily focused on community-level relationship building and social benefits for landowners, leaning on Pachama’s technology to scale their climate action.</span>
											</p>
										<ul className="btn-group">
											<li>
												<a href="https://www.youtube.com/watch?v=q0gnJYUhsOY" target="_blank"
													 rel="noreferrer" className="btn">Watch Toroto&apos;s Story</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<article className="image-w-text">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="img">
								<img alt="rectangle-1-11-65c9f143e2b1f"
										 className="attachment-large lazyload"
										 src="/images/rectangle-1-11-65c9f143e2b1f.webp"/>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-7">
							<div className="txt">
								<span className="label">Pachama connections</span>
								<h2>Access funding</h2>
								<p><span style={{fontWeight: 400}}>Climate leaders worldwide are investing in carbon
									credits through Pachama. Apply for funding to access leading corporates and investors
									currently financing quality projects. </span></p>
								<ul className="btn-group">
									<li>
										<a href="https://portal.pachama.com/en/onboarding" target="" className="btn  ">Submit your
											project</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</article>

			<div id="faqs" className="section-heading  ">
				<div className="container">
					<div className="holder">
						<h2>FAQs</h2>
						<ul className="btn-group">
						</ul>
					</div>
				</div>
			</div>

			<section className="faq-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-lg-14">
							<ul data-accordion className="accordion">
								<li>
									<a href="#" data-more className="h4">Who is the reforestation partner portal for?</a>
									<div className="slide">
										<p>Whether you have land and are considering starting your own forest carbon project or an
											established project developer tackling your next effort, you can leverage Pachama&#8217;s
											technology and finance matching to jump-start your next project.</p>
										<p>Currently, Pachama&#8217;s reforestation partner portal is for anyone looking to start a native
											reforestation carbon project in the United States, Mexico, Brazil, or Argentina. We plan to expand
											project types and regions in the future.</p>
									</div>
								</li>
								<li>
									<a href="#" data-more className="h4">What are reforestation carbon projects? </a>
									<div className="slide">
										<p>Reforestation and afforestation projects, part of a category of projects known as ARR
											(Afforestation, Reforestation, and Revegetation), restore degraded land back to forest or create
											forest infrastructure where none existed before. These projects&#8217; credits are carbon removal
											credits because planting trees draws carbon dioxide out of the atmosphere. They differ from other
											nature-based forest carbon projects that focus on avoidance, such as conservation projects, which
											aim to protect existing forests from deforestation, or improved forest management projects, which
											employ advanced techniques to improve the carbon storage potential of an existing working
											forest.</p>
										<p>While Pachama&#8217;s partner portal hopes to support the origination of future conservation
											projects, we currently focus primarily on reforestation carbon projects.</p>
									</div>
								</li>
								<li>
									<a href="#" data-more className="h4">Is it free for developers to use Pachama’s reforestation
										portal?</a>
									<div className="slide">
										<p>Yes! Getting started with Pachama is free for project partners and requires no commitment.
											Pachama enables partners to apply to receive up-front capital in order to cover the costs of
											project implementation.</p>
									</div>
								</li>
								<li>
									<a href="#" data-more className="h4">How does project financing work?</a>
									<div className="slide">
										<p>Pachama is a trusted partner of leading corporates and investors taking climate action through
											investments in nature. Through the reforestation portal, project developers can showcase their
											projects to Pachama&#8217;s network of potential investors and customers.</p>
										<p>Pachama brings transaction expertise to support contract structures that benefit buyers and
											sellers. Pachama supports an up-front investment model, where either corporate off-takers make an
											upfront investment in exchange for 100% of carbon credits generated from a project, or a project
											is backed by investment until credits can be generated and sold.</p>
									</div>
								</li>
								<li>
									<a href="#" data-more className="h4">Why is Pachama interested in supporting reforestation
										projects?</a>
									<div className="slide">
										<p>At Pachama, we&#8217;re convinced that forests are the world&#8217;s most scalable carbon removal
											technology and will play a decisive role in helping prevent the worst effects of climate change.
											In doing so, forests will create sustainable jobs, protect biodiversity and strengthen ecosystem
											services.</p>
										<p>To achieve our goal of driving the conservation and reforestation of forests, Pachama works with
											values-aligned and mission-driven project developers to bring the highest-quality forest carbon
											projects to market.</p>
										<p>Pachama uniquely offers both financing and technology to project developers in order to
											accelerate our shared mission.</p>
										<p>Learn more about Pachama&#8217;s approach to quality reforestation projects <a
											href="../blog/four-key-characteristics-of-quality-reforestation-projects/index.html"
											target="_blank" rel="noopener">here.</a></p>
									</div>
								</li>
								<li>
									<a href="#" data-more className="h4">What registry methodologies does Pachama currently support?</a>
									<div className="slide">
										<p>Pachama currently supports carbon project development under the upcoming new <a
											href="https://registry.verra.org/mymodule/mypage.asp" target="_blank" rel="noreferrer noopener">Verra Carbon
											Standard</a> ARR methodology (for afforestation, reforestation, and revegetation project
											activities with plans to expand in the future.</p>
									</div>
								</li>
							</ul>
							<div className="btn-hold">
								<ul className="btn-group">
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cta">
				<div className="container">
					<div className="cta-box">
						<div className="img">
							<img alt="container-2-65c4d105d4fb4"
									 className="attachment-large-1600 lazyload"
									 src="/images/container-2-65c4d105d4fb4-1600x576.webp"/>
						</div>
						<div className="cta-background-dots-animation"></div>
						<div className="cta-txt">
							<h2>Develop your forest carbon project</h2>
							<p>Access intuitive tools to start carbon projects, secure funding, and measure impact.</p>
							<ul className="btn-group">
								<li>
									<a href="https://portal.pachama.com/en/onboarding" target="" className="btn  ">Get Started</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}