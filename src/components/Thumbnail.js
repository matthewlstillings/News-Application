import React from "react";

const Thumbnail = (props) => {
  return (
    <div className="trendItem" key={props.ENITY_ID}>
      <a href="/trend">
        <p className="date">{props.POST_DATE_FORMAT}</p>
        <p className="title">{props.DISPLAY_NAME}</p>
        <p className="format">{props.EXTRA3}</p>
      </a>
    </div>
  );
};
