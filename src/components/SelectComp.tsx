import React from "react";
import styles from "./SelectComp.module.scss";
import {Dropdown} from "primereact/dropdown";

export default function SelectComp({ data, setData }) {

	const [selectedItem, setSelectedItem] = React.useState({ key: "all", label: "All"});

	const options = [{ key: "all", label: "All"}].concat(data.map((item: any) => ({
		key: item.country.countryCode,
		label: item.country.name,
	})));

	const handleSelect = (value) => {
		setSelectedItem(value);
		if (value.key === "all") {
			setData(data);
		} else {
			setData(data.filter((item: any) => item.country.countryCode === value.key));
		}
	};

	return (
		<div className={styles["select-container"]}>

			<p className={styles["filter-by-label"]}>Filter by country:</p>

				<Dropdown value={selectedItem}
									options={options}
									onChange={(e) => handleSelect(e.value)}
									style={{ width: "200px"}} />
		</div>
	);
}
