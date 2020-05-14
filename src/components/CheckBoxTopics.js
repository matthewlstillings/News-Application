import React, { useState } from "react";

export default (props) => {
  const [checked, setChecked] = useState(true);
  const handleCheckChildElement = (e) => {
    setChecked(!checked);
    props.handleSetFilters(props.type, props.topic);


    const newTags = props.tags.slice();
    !newTags.includes(props.topic)
      ? newTags.push(props.topic)
      : newTags.splice(newTags.indexOf(props.topic), 1);
     props.setTags(
         newTags
     )


    const newArr = props.checkedFilters.topics.slice();
    !newArr.includes(props.topic)
      ? newArr.push(props.topic)
      : newArr.splice(newArr.indexOf(props.topic), 1);
     props.setCheckedFilters({
        ...props.checkedFilters, 
        topics: newArr
      })
  };
  return (
    <div>
      <div className={`${props.checkedFilters.topics.includes(props.topic) && "checked"} checkbox`}></div>
      <p className={props.checkedFilters.topics.includes(props.topic)  && "checked"}>{props.topic}</p>
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


