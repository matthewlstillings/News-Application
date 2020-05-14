import React, { useState, useEffect } from "react";
import { searchFilter } from "../helpers/filterFunction";
import Fade from "react-reveal/Fade";

const FilteredResults = (props) => {
  const [results, setResults] = useState([]);
  const [inView, setInView] = useState(10);
  useEffect(() => {
    setResults(searchFilter(props.filters, props.resources).slice(0, inView));
  }, [props.resources, inView, props.filters]);
  useEffect(() => {
    setInView(10);
  }, []);
  const handleInViewIncrement = (e) => {
    setInView((prevView) => {
      return prevView + 10;
    });
  };
  return (
    <section className="thumbnail_section results_section">
      <div className="contain">
        <div className="grid result_grid">
          {results ? (
            results.map((thumbnail, index) => (
                <div className={"result_thumbnail"} key={thumbnail.ENITY_ID}>
                  <ce oet={`sbd3167_${thumbnail.ENITY_ID}`}>
                  <a
                    target="_blank"
                    href={`${
                      thumbnail.EXTRA3 === "Video"
                        ? "/article/" + thumbnail.ENITY_ID
                        : thumbnail.HREF
                    }`}
                  >
                    <div
                      class="image"
                      style={{
                        backgroundImage: `url(${thumbnail.HREF2})`,
                      }}
                    ></div>
                    <div class="info">
                      <p class="date">{thumbnail.POST_DATE_FORMAT}</p>
                      <p class="title">{thumbnail.DISPLAY_NAME}</p>
                      <p class="summary">{thumbnail.SHORT_DESC}</p>
                      <div class="tags">
                        <p>{thumbnail.EXTRA3}</p>
                        {
                          thumbnail.MAPPING_IDS && (
                             thumbnail.MAPPING_IDS.map((tag) => {
                                  return (
                                    <p>
                                      <span> | </span>
                                      {tag.NAME}
                                    </p>
                                  );
                            })
                          )
                         }
                      </div>
                    </div>
                  </a>
                  </ce>
                </div>
            ))
          ) : (
            <div>
              <h2>Sorry, no resources found.</h2>
            </div>
          )}
          {results.length >= inView && (
            <button onClick={handleInViewIncrement} className="view_more_btn">
              View More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilteredResults;
