import {CSSProperties} from "react";

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

	return (
		<div className="css-knybk">
			<span style={spanStyle}>
				<img src={data?.image}
						 decoding="async"
						 data-nimg="fill"
						 className="css-1nf0x2k"
						 style={imgStyle}
						 sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw" />
			</span>
			<div className="css-qwl8h7">
				<div className="css-wh3fb4">
					<div className="css-1tsbzs">
						<div className="css-b74377">
							<p className="chakra-text css-cimxt8">{data?.category}</p>
							<h5 className="chakra-heading css-1j0nf7q">{data?.title}</h5>
							<p className="chakra-text css-1m942b8">
								<img className="chakra-icon css-mblvt0" alt="BR" width="24" height="24"
										 src={data?.locationFlag} />{data?.location}</p>
						</div>
					</div>
					<div className="css-zwhd7k"><button type="button" className="chakra-button css-mwecow" role="button" fontcolor="gray.100">Support now</button></div>
				</div>
			</div>
		</div>
	);
}