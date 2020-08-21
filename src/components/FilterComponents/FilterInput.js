import React, { useState } from "react";

export default (props) => {
	const [value, setValue] = useState("");
	const setSelectValue = (e) => {
		props.handleSetFilter(e.target.value, props.filterType);
		setValue(e.target.value);
	};
	return props.filter.inputType === "checkboxes" ? (
		<button
			className={`${
				props.dropDown.filterType === props.filter.filterName && "selected"
			} filter_dropnav`}
			onClick={() => {
				props.openDropDown(props.filterType, props.filter.filterArrayList);
			}}
		>
			{props.filter.filterName}
		</button>
	) : (
		<select onChange={setSelectValue} value={props.openSearch ? value : ""}>
			<option value="">{props.filter.filterName}</option>
			{props.filter.filterArrayList.map((text) => (
				<option key={text} value={text}>
					{text}
				</option>
			))}   
		</select>
	);
};
