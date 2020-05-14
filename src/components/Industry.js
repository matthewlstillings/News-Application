import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { singleFilter } from "../helpers/filterFunction";

const IndustrySection = (props) => {
  const [industry, setIndustry] = useState([]);
  const [inView, setInView] = useState(6);
  useEffect(() => {
    setIndustry(
      singleFilter("Updates from the Industry", props.resources).slice(
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
    <section className="thumbnail_section industry_section">
      <div className="contain">
        <h3>Industry Updates</h3>
          <div className="grid features_grid">
            {industry.map((thumbnail, index) => (
              <div className={"industry_thumbnail"} key={thumbnail.ENITY_ID}>
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
                      <p className="title">{thumbnail.DISPLAY_NAME}</p>
                      <p className="summary">{thumbnail.SHORT_DESC}</p>
                    </div>
                  </a>
                </ce>
                <p className="callout">Click to read more</p>
              </div>
            ))}
          </div>
        {singleFilter("Updates from the Industry", props.resources).length >=
          inView && (
          <button onClick={handleInViewIncrement} className="view_more_btn">
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default IndustrySection;
