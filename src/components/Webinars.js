import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { singleFilter } from "../helpers/filterFunction";

const WebinarSection = (props) => {
  const [webinars, setWebinars] = useState([]);
  const [inView, setInView] = useState(3);

  useEffect(() => {
    setWebinars(
      singleFilter("Webinar", props.resources).slice(
        0,
        inView
      )
    );
  }, [props.resources, inView]);
  useEffect(() => {
    setInView(3);
  }, []);
  const handleInViewIncrement = (e) => {
    setInView((prevView) => {
      return prevView + 3;
    });
  };
  return (
    <section className="thumbnail_section webinar_section">
      <div className="contain">
        <h3>Webinars and Videos</h3>
          <div className="grid webinars_grid">
            {webinars.map((webinar) => (
                
                  /^\d+$/.test(webinar.HREF) ? (
                  <div key={webinar.ENITY_ID} className="webinar_thumbnail">
                    <ce oet={`sbd3167_${webinar.ENITY_ID}`}>
                      <Link to={`/article/${webinar.ENITY_ID}`}>
                        <div className="arrow"></div>
                        <p className="date">{webinar.POST_DATE_FORMAT}</p>
                        <p className="title noOrphan">{webinar.DISPLAY_NAME}</p>
                        <p className="summary">{webinar.SHORT_DESC}</p>
                      </Link>
                    </ce>
                    <p className="callout">Click to learn more</p>
                  </div>
                  ) : (
                  <div key={webinar.ENITY_ID} className="webinar_thumbnail">
                    <ce oet={`sbd3167_${webinar.ENITY_ID}`}>
                      <a target="_blank" href={webinar.HREF}>
                        <div className="arrow"></div>
                        <p className="date">{webinar.POST_DATE_FORMAT}</p>
                        <p className="title noOrphan">{webinar.DISPLAY_NAME}</p>
                        <p className="summary">{webinar.SHORT_DESC}</p>
                      </a>
                    </ce>
                    {
                      new Date(webinar.POST_DATE_FORMAT).getTime() / 1000 >= ((new Date().getTime() / 1000) - 86400) ? (
                        <p className="callout">Click to learn more and register</p>
                      ) : (
                        <p className="callout">Click to learn more</p>
                      )
                    }
                  </div>
                )
                
            ))}
          </div>
        {singleFilter("Webinar", props.resources).length >= inView && (
          <button onClick={handleInViewIncrement} className="view_more_btn">
            View More
          </button>
        )}
      </div>
    </section>
  );
};

export default WebinarSection;
