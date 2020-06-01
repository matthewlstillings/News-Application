import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { singleFilter } from "../helpers/filterFunction";

const ThumbnailSectionBasic = (props) => {
  const [content, setContent] = useState([]);
  const [inView, setInView] = useState();
  useEffect(() => {
    setContent(
      singleFilter(props.filter, props.resources).slice(
        0,
        inView
      )
    );
  }, [props.resources, inView]);
  useEffect(() => {
    setInView(props.inView);
  }, []);
  const handleInViewIncrement = (e) => {
    setInView((prevView) => {
      return prevView + props.increment;
    });
  };
  return (
    <>
    <section className="thumbnail_section" id={props.id}>
      <div className="contain">
          <h3 class="section-title">{props.title}</h3>
          <div className="grid">
            {content.map((thumbnail, index) => (
              <div className="thumbnail" key={thumbnail.ENITY_ID}>
                <ce oet={`sbd3167_${thumbnail.ENITY_ID}`}>
                  {
                    /^\d+$/.test(thumbnail.HREF) ? (
                      <Link to={`/insights_and_news/article/${thumbnail.ENITY_ID}`}>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${thumbnail.HREF2})`,
                          }}
                        ></div>
                        <div className="info">
                          <p className="date">{thumbnail.POST_DATE_FORMAT.replace(/\//g,'.')}</p>
                          <p className="article-title">{thumbnail.DISPLAY_NAME}</p>
                          <p className="summary">{thumbnail.SHORT_DESC}</p>
                        </div>
                      </Link>
                    ) : (
                      <a target="_blank" href={thumbnail.HREF}>
                        <div
                          className="image"
                          style={{
                            backgroundImage: `url(${thumbnail.HREF2})`,
                          }}
                        ></div>
                        <div className="info">
                          <p className="date">{thumbnail.POST_DATE_FORMAT.replace(/\//g,'.')}</p>
                          <p className="article-title">{thumbnail.DISPLAY_NAME}</p>
                          <p className="summary">{thumbnail.SHORT_DESC}</p>
                        </div>
                      </a>
                    )
                  }
                  
                </ce>
                <p className="callout">Click to read more</p>
              </div>
            ))}
          </div>
        {singleFilter(props.filter, props.resources).length >=
          inView && (
          <button onClick={handleInViewIncrement} className="view_more_btn">
            Load More
          </button>
        )}
      </div>
    </section>
    </>
  );
};

export default ThumbnailSectionBasic;
