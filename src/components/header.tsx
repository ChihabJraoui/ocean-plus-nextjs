export default function Header() {
	return (
		<header id="header">
			<div className="container">

				<div className="logo visible-md">
					<a href="/">
						<img alt="Ocean Pulse" width="162"
								 className="attachment-large lazyload"
								 src="/images/header-logo-pachama.svg" />
						<noscript><img src="/images/header-logo-pachama.svg"
													 className="attachment-large" alt="Ocean Pulse" width="162"/></noscript>
					</a>
				</div>

				<a href="#" className="nav-opener"><i className="icon-menu"></i></a>

				<div className="nav-panel">
					<ul id="nav">
						<li>
							<a href="/enterprise" className="">Invest in nature</a>
						</li>
						<li>
							<a href="/partner" className="">Develop a project</a>
						</li>
						<li>
							<a href="/explore" className="">Explore projects</a>
						</li>
						<li>
							<a href="/technology" className="">Resources</a>
						</li>
						<li className="dropdown-menu">
							<a href="#" data-more className="dropdown-opener">About</a>
							<ul className="dropdown-content ">
								<li className="compact">
									<a href="#" className="">Our mission<i className="icon-arrow"></i></a>
								</li>
								<li className="compact">
									<a href="/technology" className="">Our tech<i className="icon-arrow"></i></a>
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
							<a href="/get-started" className="btn ">Get started</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}