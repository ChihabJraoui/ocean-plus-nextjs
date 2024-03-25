import React from "react";
import Layout from "@app/components/layout";
import styles from "../../public/sass/get-started.module.scss";
import {InputText} from "primereact/inputtext";
import {RadioButton} from "primereact/radiobutton";
import {Button} from "primereact/button";

export default function GetStartedPage() {
	return (
		<Layout>

			<div className="hero-w-white-bg">
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-lg-offset-1 col-lg-6">
							<h1>Get started.</h1>
								<p>We believe that with technology, we can unlock the full potential of natural systems to address
									climate change and protect life on Earth.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="filter-bar">
				<div className="container">
					<div className="row">
						<div className="col-lg-offset-1 col-lg-14">
							<p className={styles["filter-bar-text"]}>Choose how you’d like to get started:</p>
							<div className="nav-row">
								<nav className="filter-nav">
									<a href="#" className="select-opener" data-select="" data-outside="" data-more="">Invest in nature</a>
									<ul className="list" style={{display: "none"}}>
										<li>
											<a href="#" className="btn form1">Invest in nature</a>
										</li>
										{/*<li>
											<a href="https://portal.pachama.com/en/onboarding"
												 target="_blank" rel="noreferrer" className="btn form2" data-link>Submit a carbon project</a>
										</li>*/}
										<li>
											<a href="#" className="btn form3">General inquires</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="form-container">
				<div className="form form1" style={{display: "none"}}>
					<section className="get-started-section">
						<div className="container">
							<div className="holder">
								<div className="row">
									<div className="col-md-6 col-lg-6 col-lg-offset-1">
										<h2>Invest in nature</h2>
										<div className="txt">
												<p>Our experts are here to help you invest in tech-verified projects or start your own project
													from the ground. Tell us a little about your needs below to be directed to the appropriate
													team.</p>
										</div>
									</div>
									<div className="col-md-10 col-lg-8">
										<div className="tab-wrap">
											<ul className="tab-list">
												{/*<li>
													<a href="#" data-tab="tab1" className="active">
														<span className="desktop">Purchase certified credits</span>
														<span className="mobile">Credits</span>
													</a>
												</li>*/}
												<li>
													<a href="#" data-tab="tab2" className="active">
														<span className="desktop">Invest in a new project</span>
														<span className="mobile">Project</span>
													</a>
												</li>
											</ul>
											<div className="tabcontent">
												<div id="tab1" className="tab active">
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
														hbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"61215ce7-ce82-4260-ba97-3ef8c97c83b1","submitButtonClass":"btn btn-full btn-lg btn-w","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\/>","messageClass":"ui red pointing below label"}}));
													}
													});
													</script>*/}
												</div>
												<div id="tab2" className="tab">
													<form>
														<div className="p-fluid mb-3">
															<InputText type="text" placeholder="First name *"/>
														</div>
														<div className="p-fluid mb-3">
															<InputText type="text" placeholder="Last name *"/>
														</div>
														<div className="p-fluid mb-3">
															<InputText type="email" placeholder="Work email *"/>
														</div>

														<div className="p-fluid mb-4">
															<p className="mb-2">When are you looking for credits?*</p>
															<div className="mb-1">
																<RadioButton inputId="2024_2029" name="credits" value="2024_2029" />
																<label htmlFor="2024_2029" className="ml-2">Credits for 2024-2029</label>
															</div>
															<div>
																<RadioButton inputId="2030_beyond" name="credits" value="2030_beyond" />
																<label htmlFor="2030_beyond" className="ml-2">Credits for 2030 and beyond</label>
															</div>
														</div>

														<div className="p-fluid mb-4">
															<p className="mb-2">How many tons are you looking to invest in?*</p>
															<div className="mb-1">
																<RadioButton inputId="more_than_50k" name="invest" value="more_than_50k" />
																<label htmlFor="more_than_50k" className="ml-2">&gt;50,000 metric tons of CO₂e</label>
															</div>
															<div className="mb-1">
																<RadioButton inputId="25k_50k" name="invest" value="25k_50k" />
																<label htmlFor="25k_50k" className="ml-2">25,000-50,000 metric tons of CO₂e</label>
															</div>
															<div>
																<RadioButton inputId="1k_25k" name="invest" value="1k_25k" />
																<label htmlFor="1k_25k" className="ml-2">1,000-25,000 metric tons of CO₂e</label>
															</div>
														</div>

														<div className="p-fluid">
															<Button label="Submit" />
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div className="form form3" style={{display: "none"}}>
					<section className="get-started-section">
						<div className="container">
							<div className="holder">
								<div className="row">
									<div className="col-md-6 col-lg-6 col-lg-offset-1">
										<h2>General inquires</h2>
										<div className="txt">
												<p>Questions or requests for Pachama? Our team is here to help. Tell us a little about your
													needs to be directed to the appropriate team.</p>
										</div>
									</div>
									<div className="col-md-10 col-lg-8">
										<div className="tab-wrap">
											<div className="tabcontent">
												<div id="tab1" className="tab active">
													<form>
														<div className="p-fluid mb-3">
															<InputText type="text" placeholder="First name *"/>
														</div>
														<div className="p-fluid mb-3">
															<InputText type="text" placeholder="Last name *"/>
														</div>
														<div className="p-fluid mb-3">
															<InputText type="email" placeholder="Work email *"/>
														</div>

														<div className="p-fluid mb-4">
															<p className="mb-2">When are you looking for credits?*</p>
															<div className="mb-1">
																<RadioButton inputId="2024_2029" name="credits" value="2024_2029"/>
																<label htmlFor="2024_2029" className="ml-2">Credits for 2024-2029</label>
															</div>
															<div>
																<RadioButton inputId="2030_beyond" name="credits" value="2030_beyond"/>
																<label htmlFor="2030_beyond" className="ml-2">Credits for 2030 and beyond</label>
															</div>
														</div>

														<div className="p-fluid mb-4">
															<p className="mb-2">How many tons are you looking to invest in?*</p>
															<div className="mb-1">
																<RadioButton inputId="more_than_50k" name="invest" value="more_than_50k"/>
																<label htmlFor="more_than_50k" className="ml-2">&gt;50,000 metric tons of CO₂e</label>
															</div>
															<div className="mb-1">
																<RadioButton inputId="25k_50k" name="invest" value="25k_50k"/>
																<label htmlFor="25k_50k" className="ml-2">25,000-50,000 metric tons of CO₂e</label>
															</div>
															<div>
																<RadioButton inputId="1k_25k" name="invest" value="1k_25k"/>
																<label htmlFor="1k_25k" className="ml-2">1,000-25,000 metric tons of CO₂e</label>
															</div>
														</div>

														<div className="p-fluid">
															<Button label="Submit"/>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</Layout>
	);
}