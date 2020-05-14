import React, { useState, useEffect } from "react";
import { singleFilter } from "../helpers/filterFunction";

const AwardsSection = (props) => {
  const [awards, setawards] = useState([]);
  const [inView, setInView] = useState(6);
  useEffect(() => {
    const newArr = singleFilter("Awards & Rankings", props.resources)
      .filter((item) => {
        return (
          new Date(item.POST_DATE_FORMAT).getTime() / 1000 >
          ((new Date().getTime() / 1000) - 500)
        );
      })
      .reverse()
      .slice(0, inView);
    setawards(newArr);
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
    <section
      id="awards"
      className="thumbnail_section awards_section industry_section"
    >
      <div className="contain">
        <h2>Awards</h2>
        <h3>Upcoming Awards & Registration</h3>
          <div className="grid features_grid">
            {awards.map((thumbnail, index) => (
              <div
                className={"awards_thumbnail industry_thumbnail"}
                key={thumbnail.ENITY_ID}
              >
                <ce oet={`sbd3167_${thumbnail.ENITY_ID}`}>
                  <a href={thumbnail.HREF} target="_blank">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${thumbnail.HREF2})`,
                      }}
                    ></div>
                    <div className="info">
                      <p className="title">{thumbnail.DISPLAY_NAME}</p>
                      <p className="summary">{thumbnail.SHORT_DESC}</p>
                    </div>
                  </a>
                </ce>
                <p className="callout">Click here</p>
              </div>
            ))}
          </div>
        {singleFilter("Awards & Rankings", props.resources).length >= inView && (
          <button onClick={handleInViewIncrement} className="view_more_btn">
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default AwardsSection;
