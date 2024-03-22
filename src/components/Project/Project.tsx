import React from "react";
import {CSSProperties} from "react";
import styles from "./Project.module.scss";
import {useRouter} from "next/router";

const spanStyle = {
	boxSizing: "border-box",
	display: "block",
	overflow: "hidden",
	width: "initial",
	height: "initial",
	background: "none",
	opacity: 1,
	border: 0,
	margin: 0,
	padding: 0,
	position: "absolute",
	inset: 0,
} as CSSProperties;

const imgStyle = {
	position: "absolute",
	inset: 0,
	boxSizing: "border-box",
	padding: 0,
	border: "none",
	margin: "auto",
	display: "block",
	width: 0,
	height: 0,
	minWidth: "100%",
	maxWidth: "100%",
	minHeight: "100%",
	maxHeight: "100%",
	objectFit: "cover",
} as CSSProperties;

export default function Project(props) {

	const { data } = props;

	const router = useRouter();

	return (
		<div className={styles["project-card"]}>
			<span style={spanStyle}>
				<img src="/images/faried-anzyari-5vcygqehv0k-unsplash-scaled-65c4c1ce7eae6-1600x900.jpg"
						 decoding="async"
						 data-nimg="fill"
						 className="css-1nf0x2k"
						 style={imgStyle}
						 sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw" />
			</span>

			<div className={styles["css-qwl8h7"]}>
				<div className={styles["css-wh3fb4"]}>
					<div className={styles["css-1tsbzs"]}>
						<div className={styles["css-b74377"]}>
							<p className={"chakra-text " + styles["css-cimxt8"]}></p>
							<h5 className={"chakra-heading " + styles["css-1j0nf7q"]}></h5>
							<p className={"chakra-text " + styles["css-1m942b8"]}>
								<img className={"chakra-icon " + styles["css-mblvt0"]} alt="BR" width="28" height="24"
										 src={`https://cdn.jsdelivr.net/gh/umidbekk/react-flag-kit@1/assets/${data.country.countryCode}.svg`} />{data.country.name} | {data.name}</p>
						</div>
					</div>
					<div className={styles["css-zwhd7k"]}>
						<button type="button"
										role="button"
										className={styles["support-button"]}
										onClick={() => router.push(`./wizard/${data.name}`)}>Support now</button>
					</div>
				</div>
			</div>
		</div>
	);
}