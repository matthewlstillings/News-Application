import React from "react";
import CheckBox from "./CheckBox";

export default (props) => {
  return (
    <div className="dropdown_filter_list">
      {props.dropDown.filters.map((topic) => {
        return (
          <label className={`${topic} filter_check`}>
            <CheckBox
              topic={topic}
              handleSetFilters={props.handleSetFilters}
              filterType={props.dropDown.filterType}
            />
          </label>
        );
      })}
    </div>
  );
};
