import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { singleFilter, filterTrending } from "../helpers/filterFunction";

const TrendingSection = (props) => {
  const [bigOne, setBigOne] = useState(null);
  const [littleOne, setLittleOne] = useState(null);
  const [littleTwo, setLittleTwo] = useState(null);
  const [littleThree, setLittleThree] = useState(null);

  useEffect(() => {
    const bigTrend = filterTrending({format: '', topics: ['Updates from the Industry', 'Trending']}, props.resources);
    const webinarTrend = filterTrending({format: 'Webinar', topics: ['Trending']}, props.resources).filter((item) => {
        return (
          new Date(item.POST_DATE_FORMAT).getTime() / 1000 >=
          ((new Date().getTime() / 1000) - 86400)
        );
      })
    const industryTrend = filterTrending({format: '', topics: ['Featured from Sanctuary', 'Trending']}, props.resources);
    const endClientTrend = filterTrending({format: '', topics: ['Trending', 'In The Press']}, props.resources);
    setBigOne(bigTrend[0] ? bigTrend[0] : null);
    setLittleOne(webinarTrend[webinarTrend.length - 1] ? webinarTrend[webinarTrend.length - 1]: null);
    setLittleTwo( ()=> {
        if (industryTrend[0]) {
          return bigTrend[0].DISPLAY_NAME === industryTrend[0].DISPLAY_NAME ? industryTrend[1] : industryTrend[0];
        }
    })
    setLittleThree(endClientTrend[0] ? endClientTrend[0] : null);
  }, [props.resources]);


  return (
    <section className="thumbnail_section trending_section">
      <div className="contain">
                <h3 class="section-title">What's New</h3>
      </div>
      <div className="contain">

          {bigOne && (
              <div className="featured_contain">
                <div
                  className="trendItem featured"
                  key={bigOne.ENITY_ID}
                  style={{
                    backgroundImage: `url(${bigOne.HREF2})`,
                  }}
                >
                <ce oet={`sbd3167_${bigOne.ENITY_ID}`}>
                        <a href={bigOne.HREF} target="_blank">
                          <div>
                            
                            <p className="article-title">{bigOne.DISPLAY_NAME}</p>
                            <p className="date">{bigOne.POST_DATE_FORMAT.replace(/\//g,'.')} | Update from the Industry</p>
                          </div>
                        </a>
                  </ce>
                </div>
              </div>
            )}
          <div className="grid">
            <div>
            
            {littleTwo && (
              <div className="trendItem">
              <ce oet={`sbd3167_${littleTwo.ENITY_ID}`}>
                      <a href={littleTwo.HREF} target="_blank">
                        <div>
                          <p className="trending-title">{littleTwo.DISPLAY_NAME}</p>
                          <p className="date">{littleTwo.POST_DATE_FORMAT.replace(/\//g,'.')} | Featured from sanctuary</p>
                        </div>
                      </a>
                </ce>
              </div>
            )}
            {littleThree && (
              <div className="trendItem">
                <ce oet={`sbd3167_${littleThree.ENITY_ID}`}>
                        <a href={littleThree.HREF} target="_blank">
                          <div>
                            <p className="trending-title">{littleThree.DISPLAY_NAME}</p>
                            <p className="date">{littleTwo.POST_DATE_FORMAT.replace(/\//g,'.')} | In The Press</p>
                          </div>
                        </a>
                </ce>
              </div>
            )}
            {littleOne ? (
              <div className="trendItem">
                <ce oet={`sbd3167_${littleOne.ENITY_ID}`}>
                      <a href={littleOne.HREF} target="_blank">
                          <div>
                          <p className="trending-title">{littleOne.DISPLAY_NAME}</p>
                          <p className="date"> {littleOne.POST_DATE_FORMAT.replace(/\//g,'.')} | Featured from sanctuary</p>
                        </div>
                      </a>
                </ce>
              </div> 
            ) : (
              <div className="trendItem noLink">
                <a>
                  <p className="trending-title">There are no scheduled webinars at this time.</p>                 
                  <p className="date">Webinar</p>
                </a>
              </div>
            )}
            </div>
          </div>
          </div>
    </section>
  );
};

export default TrendingSection;
