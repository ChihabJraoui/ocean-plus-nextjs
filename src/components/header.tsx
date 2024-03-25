import React from "react";
import Link from "next/link";

export default function Header() {
	return (
		<header id="header">
			<div className="container">

				<div className="logo visible-md">
					<Link href="/">
						<img alt="Ocean Pulse"
								 width="162"
								 className="attachment-large lazyload"
								 src="/images/header-logo-pachama.svg" />
					</Link>
				</div>

				<a href="#" className="nav-opener"><i className="icon-menu"></i></a>

				<div className="nav-panel">
					<ul id="nav">
						<li>
							<Link href="/enterprise">Invest in nature</Link>
						</li>
						<li>
							<Link href="/partner" className="">Develop a project</Link>
						</li>
						<li>
							<Link href="/explore" className="">Explore projects</Link>
						</li>
						{/*<li>
							<Link href="/technology" className="">Resources</Link>
						</li>*/}
						<li className="dropdown-menu">
							<a href="#" data-more className="dropdown-opener">About</a>
							<ul className="dropdown-content ">
								<li className="compact">
									<Link href="/about" className="">Our mission<i className="icon-arrow"></i></Link>
								</li>
								<li className="compact">
									<Link href="/technology" className="">Our tech<i className="icon-arrow"></i></Link>
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
							<Link href="/get-started" className="btn">Get started</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}