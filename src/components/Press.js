import React, { useState, useEffect } from "react";
import { singleFilter } from "../helpers/filterFunction";

const PressSection = (props) => {
  const [press, setPress] = useState([]);
  const [inView, setInView] = useState(6);
  useEffect(() => {
    setPress(
      singleFilter("In The Press", props.resources).slice(
        0,
        inView
      )
    );
  }, [props.resources, inView]);
  useEffect(() => {
    setInView(6);
  }, []);
  const handleInViewIncrement = (e) => {
    setInView((prevView) => {
      return prevView + 6;
    });
  };
  return (
    <section className="thumbnail_section press_section industry_section" id="news">
      <div className="contain">
        <h2>In the News & Press</h2>
        <h3>Sanctuary & Advisors in the press</h3>
          <div className="grid features_grid">
            {press.map((thumbnail, index) => (
              <div className={"industry_thumbnail thumbnail"} key={thumbnail.ENITY_ID}>
                <ce oet={`sbd3167_${thumbnail.ENITY_ID}`}>
                  <a target="_blank" href={thumbnail.HREF}>
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${thumbnail.HREF2})`,
                      }}
                    ></div>
                    <div className="info">
                      <p className="date">{thumbnail.POST_DATE_FORMAT}</p>
                      {thumbnail.AUTHOR.length > 0 && <p className="author">{thumbnail.AUTHOR}</p>}
                      <p className="title">{thumbnail.DISPLAY_NAME}</p>
                      <p className="summary">{thumbnail.SHORT_DESC}</p>
                    </div>
                  </a>
                </ce>
                <p className="callout">Click to read more</p>
              </div>
            ))}
          </div>
        {singleFilter("In The Press", props.resources).length >=
          inView && (
          <button onClick={handleInViewIncrement} className="view_more_btn">
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default PressSection;
