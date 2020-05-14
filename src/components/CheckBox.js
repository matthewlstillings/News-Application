import React, { useState } from "react";

export default (props) => {
  const [checked, setChecked] = useState(true);
  const handleCheckChildElement = (e) => {
    props.handleSetFilters(props.type, props.topic);
    setChecked(!checked);
    if (props.type === "dist") {
      if (props.checkedFilters[props.type] === props.topic) {
        props.setCheckedFilters({
          ...props.checkedFilters,
          dist: "",
        });
      } else {
        props.setCheckedFilters({
          ...props.checkedFilters,
          dist: props.topic,
        });
      }
    }
    if (props.type === "industry") {
      if (props.checkedFilters[props.type] === props.topic) {
        props.setCheckedFilters({
          ...props.checkedFilters,
          industry: "",
        });
      } else {
        props.setCheckedFilters({
          ...props.checkedFilters,
          industry: props.topic,
        });
      }
    }
    if (props.type === "format") {
      if (props.checkedFilters[props.type] === props.topic) {
        props.setCheckedFilters({
          ...props.checkedFilters,
          format: "",
        });
      } else {
        props.setCheckedFilters({
          ...props.checkedFilters,
          format: props.topic,
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
