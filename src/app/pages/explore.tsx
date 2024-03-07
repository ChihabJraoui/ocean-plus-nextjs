import Script from "next/script";
import Header from "@app/app/components/header";
import Footer from "@app/app/components/footer";

export default function Explore() {
	return (
		<>
			<main>

				<div id="page-loader">
					<img alt="Loading..." data-src="/images/loader.gif" className="lazyload"
							 src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
					<noscript><img src="/images/loader.gif" alt="Loading..."/></noscript>
				</div>

				<div id="wrapper">

					<Header />

					<Footer />
				</div>
			</main>
		</>
	);
}