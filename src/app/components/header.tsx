export default function Header() {
	return (
		<>
			<header id="header">
				<div className="container">
					<div className="logo visible-md">
						<a href="index.html">
							<img alt="Ocean Pulse" width="162"
									 data-src="wp-content/uploads/2024/01/header-logo-pachama.svg"
									 className="attachment-large lazyload"
									 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
							<noscript><img src="/images/header-logo-pachama.svg"
														 className="attachment-large" alt="Ocean Pulse" width="162"/></noscript>
						</a>
					</div>
					<a href="#" className="nav-opener"><i className="icon-menu"></i></a>
					<div className="nav-panel">
						<ul id="nav">
							<li><a href="enterprise/index.html" className="">Invest in nature</a></li>
							<li><a href="partner/index.html" className="">Develop a project</a></li>
							<li><a href="../project/index.html" className="">Explore projects</a></li>
							<li><a href="technology/index.html" className="">Resources</a></li>
							<li className="dropdown-menu">
								<a href="#" data-more className="dropdown-opener">About</a>
								<ul className="dropdown-content ">
									<li className="compact">
										<a href="#" className="">Our mission<i className="icon-arrow"></i></a>
									</li>
									<li className="compact">
										<a href="technology/index.html" className="">Our tech<i className="icon-arrow"></i></a>
									</li>
									<li className="compact">
										<a href="#" className="">Careers<i className="icon-arrow"></i></a>
									</li>
								</ul>
							</li>
						</ul>
						<ul className="btns">
							<li className="dropdown-menu">
								<a href="#" data-more className="btn btn-text">Sign In</a>
								<ul className="dropdown-content default">
									<li className="compact"><a href="#" className="current">For Companies</a></li>
									<li className="compact"><a href="#" className="current">For Supply Partners</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="get-started/index.html" className="btn ">Get started</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		</>
)
}