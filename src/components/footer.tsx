import Script from "next/script";

export default function Footer () {
	return (
		<>
			<footer id="footer">
				<div className="container">
					<div className="footer-cta">
						<h2>Build your nature strategy with Ocean Pulse</h2>
						<ul className="btn-group">
							<li>
								<a href="/get-started" target="" className="btn  ">Get Started</a>
							</li>
						</ul>
					</div>
					<hr/>
					<div className="footer-m">
						<div className="row">
							<div className="col-lg-4">
								<div className="footer-logo">
									<a href="/">
										<img alt="Ocean Pulse"
												 className="attachment-large lazyload"
												 src="/images/logo-white.svg"/>
									</a>
								</div>
							</div>
							<div className="col-lg-12">
								<div className="row">
									<div className="col-md-9 col-lg-10">
										<div className="footer-navs" data-accordion>
											<div className="col">
												<span className="label active" data-more>COMPANY</span>
												<ul className="footer-nav">
													<li><a href="#" className="">Our mission</a></li>
													<li><a href="/technology" className="">Our tech</a>
													</li>
													<li><a href="#" className="">Careers</a></li>
													<li><a href="/get-started" className="">Contact</a>
													</li>
												</ul>
											</div>
											<div className="col">
												<span className="label" data-more>SOLUTIONS</span>
												<ul className="footer-nav">
													<li><a href="/enterprise" className="">Invest in
														nature</a></li>
													<li><a href="/partner" className="">Develop a
														project</a></li>
													<li><a href="/project" className="">Explore
														projects</a></li>
													<li><a href="/faq" className="">FAQs</a></li>
												</ul>
											</div>
											<div className="col">
												<span className="label" data-more>RESOURCES</span>
												<ul className="footer-nav">
													<li><a href="#" className="">Blog</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-7 col-lg-6">
										<div className="subscribe-form-wrap">
											<div className="form-intro">
												<h3>Subscribe to our newsletter</h3>
												<p>Stay updated with Ocean Pulse's news and guides, zero spam,
													promise.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-b">
						<div className="row">
							<div className="w-full col-sm-12 col-md-5 col-lg-4">
								<div className="copyright">Copyright © 2024 Ocean Pulse, Inc.</div>
							</div>
							<div className="col-sm-8 col-md-6 col-lg-7">
								<ul className="/terms-conditions">
									<li><a href="/terms" className="">Terms of use</a></li>
									<li><a href="/privacy" className="">Privacy policy</a></li>
									<li><a href="/copyright-intellectual-property"
												 className="">Copyright</a></li>
								</ul>
							</div>
							<div className="col-sm-8 col-md-5 col-lg-5">
								<div className="social-networks-wrap">
									<ul className="social-networks">
										<li>
											<a href="https://twitter.com" className="icon-x-c"><span
												className="sr-only">x</span></a>
										</li>
										<li>
											<a href="https://www.linkedin.com"
												 className="icon-linkedin-c"><span
												className="sr-only">linkedin</span></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<Script>
				{`window.addEventListener("load", function() {
\t\t\t\t\t\t\t\t\t\t\t\tif (hbspt) {
\t\t\t\t\t\t\t\t\t\t\t\tvar form_options = {
\t\t\t\t\t\t\t\t\t\t\t\tonFormReady: function(e) {
\t\t\t\t\t\t\t\t\t\t\t\t$('.hs-input').on('input', function() {
\t\t\t\t\t\t\t\t\t\t\t\tif (!this.value) {
\t\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').removeClass('has-value')
\t\t\t\t\t\t\t\t\t\t\t} else {
\t\t\t\t\t\t\t\t\t\t\t\t$(this).closest('.hs-form-field').addClass('has-value')
\t\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t\t});
\t\t\t\t\t\t\t\t\t\t\t},
\t\t\t\t\t\t\t\t\t\t\t\tonBeforeValidationInit: function() {},
\t\t\t\t\t\t\t\t\t\t\t\tonBeforeFormInit: function() {},
\t\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t\t\thbspt.forms.create($.extend(true, form_options, {"portalId":"21158180","formId":"514e9b25-5907-43be-b309-2349ad71e64e","submitButtonClass":"btn btn-full","validationOptions":{"grouped":true,"inputEvent":"keyup","message":"<div\\/>","messageClass":"ui red pointing below label"}}));
\t\t\t\t\t\t\t\t\t\t\t}
\t\t\t\t\t\t\t\t\t\t\t});`}
			</Script>
		</>
	);
}