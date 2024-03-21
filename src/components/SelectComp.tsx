import React from "react";
import * as styles from "../../public/sass/explore.module.scss";

export default function SelectComp(props: any) {
	const data = props.data;

	const handleSelect = (event: any) => {
		if (event.target.value === "all") {
			// setSharedData(data);
			props.setSharedData(data);
		} else {
			// setSharedData(
			// 	data.filter((item: any) => item.country.Initials === event.target.value)
			// );
			props.setSharedData(
				data.filter((item: any) => item.country.Initials === event.target.value)
			);
		}
	};

	return (
		<div className={styles["css-uqk96i"]}>
			<p className={"chakra-text " + styles["css-o2ke8n"]}>Filter by:</p>
			<div className={"chakra-stack " + styles["css-6jfr73"]}>
				<div className={styles["css-a8iw49"]}>
					<div className={styles["css-1vicip6"]}>
						<div className={styles["css-0"]}>
							<div role="group" className="chakra-form-control css-1kxonj9">
								<div className="chakra-input__group css-4302v8">
									<select name="" className="select-input" id="select" onChange={handleSelect}>
										<option value="all">COUNTRIES</option>
										{data.map((element: any, index: any) => {
											return (
												<option key={index} value={element.country.Initials}>
													{element.country.Name}
												</option>
											);
										})}
									</select>
								</div>
								<div className="css-1pmxynf"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
