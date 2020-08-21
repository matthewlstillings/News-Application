import React, { useState } from "react";

export default (props) => {
	const [checked, setChecked] = useState(true);
	const handleCheckChildElement = (e) => {
		props.handleSetFilters(props.topic, props.type);
		setChecked(!checked);
		if (props.type === "filterOne") {
			if (props.checkedFilters[props.type] === props.topic) {
				props.setCheckedFilters({
					...props.checkedFilters,
					filterOne: "",
				});
			} else {
				props.setCheckedFilters({
					...props.checkedFilters,
					filterOne: props.topic,
				});
			}
		}
		if (props.type === "filterTwo") {
			if (props.checkedFilters[props.type] === props.topic) {
				props.setCheckedFilters({
					...props.checkedFilters,
					filterTwo: "",
				});
			} else {
				props.setCheckedFilters({
					...props.checkedFilters,
					filterTwo: props.topic,
				});
			}
		}
		if (props.type === "filterThree") {
			if (props.checkedFilters[props.type] === props.topic) {
				props.setCheckedFilters({
					...props.checkedFilters,
					filterThree: "",
				});
			} else {
				props.setCheckedFilters({
					...props.checkedFilters,
					filterThree: props.topic,
				});
			}
		}
		if (props.type === "years") {
			if (props.checkedFilters[props.type] === props.topic) {
				props.setCheckedFilters({
					...props.checkedFilters,
					years: "",
				});
			} else {
				props.setCheckedFilters({
					...props.checkedFilters,
					years: props.topic,
				});
			}
		}
	};
	return (
		<div>
			<div
				className={`${
					props.checkedFilters[props.type] === props.topic && "checked"
				} checkbox`}
			></div>
			<p
				className={
					props.checkedFilters[props.type] === props.topic && "checked"
				}
			>
				{props.topic}
			</p>
			<input
				key={props.topic}
				onClick={handleCheckChildElement}
				type="checkbox"
				value={props.topic}
				className="filter_check"
			/>
		</div>
	);
};
