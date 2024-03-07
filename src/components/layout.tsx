import Header from "@app/components/header";
import Footer from "@app/components/footer";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div id="page-loader">
				<img alt="Loading..." data-src="/images/loader.gif" className="lazyload"
						 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
				<noscript><img src="/images/loader.gif" alt="Loading..."/></noscript>
			</div>
			<div id="wrapper">
				<Header/>
				<main>
					{children}
				</main>
				<Footer/>
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
			<Script id="base-theme-script-js" src="/js/appa823.js?id=2c21442761bd58ede18e"/>

			{/*<Script>
				{`
window.addEventListener("load", function() {
if (hbspt) {
var form_options = {
onFormReady: function(e) {
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
\t\t\t\t\t\t\t\t\t\t\thbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"56d264bf-9bcb-4b41-8b5a-b0a847307ff6","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\\/>","messageClass":"ui red pointing below label"}}));
\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t});

				window.addEventListener("load", function() {
\t\t\t\tif (hbspt) {
\t\t\t\tvar form_options = {
\t\t\t\tonFormReady: function(e) {
\t\t\t\t$('.hs-input').on('input', function() {
\t\t\t\tif (!this.value) {
\t\t\t\t$(this).closest('.hs-form-field').removeClass('has-value')
\t\t\t} else {
\t\t\t\t$(this).closest('.hs-form-field').addClass('has-value')
\t\t\t}
\t\t\t});
\t\t\t},
\t\t\t\tonBeforeValidationInit: function() {},
\t\t\t\tonBeforeFormInit: function() {},
\t\t\t}
\t\t\t\thbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"46486b0e-bb54-4953-aa2e-359e341dfe21","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\\/>","messageClass":"ui red pointing below label"}}));
\t\t\t}
\t\t\t});`}
			</Script>*/}
		</>
	);
}