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
    
    console.log(webinarTrend)
    const industryTrend = filterTrending({format: '', topics: ['Pandemic Impact', 'Trending']}, props.resources);
    const endClientTrend = filterTrending({format: 'End Client Editable', topics: ['Trending']}, props.resources);
    setBigOne(bigTrend[0] ? bigTrend[0] : null);
    setLittleOne(webinarTrend[webinarTrend.length - 1] ? webinarTrend[webinarTrend.length - 1]: null);
    setLittleTwo( ()=> {
        if (industryTrend[0]) {
          return bigTrend[0].DISPLAY_NAME === industryTrend[0].DISPLAY_NAME ? industryTrend[1] : industryTrend[0];
        }
    })
    setLittleThree(endClientTrend[0] ? endClientTrend[0] : null);
  }, [props.resources]);
  const regex = new RegExp('^(?:[a-z]+:)?//', 'i');
  const recordArticleHit = (link, entity_id) => {
        var xmlhttp = new XMLHttpRequest();
        console.log(xmlhttp);
        xmlhttp.open("GET",`/record_view?ENITY_ID=${entity_id}`,true);
        xmlhttp.send();
  }
  return (
    <section className="thumbnail_section trending_section">
      <div className="contain">
          {bigOne && (
              <div className="featured_contain">
                <h3>Industry Update - What's New <span className="unread">{bigOne.SEEN === 0 && ': Unread'}</span></h3>
                <div
                  className="trendItem featured"
                  key={bigOne.ENITY_ID}
                  style={{
                    backgroundImage: `url(${bigOne.HREF2})`,
                  }}
                >
                <ce oet={`sbd3167_${bigOne.ENITY_ID}`}>
                    {
                      regex.test(bigOne.HREF) ? (
                        <a href={bigOne.HREF} target="_blank" onClick={()=> recordArticleHit(bigOne.HREF, bigOne.ENITY_ID)}>
                           <div>
                            <p className="date">{bigOne.POST_DATE_FORMAT} </p>
                            <p className="title">{bigOne.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) : (
                        <a href={bigOne.HREF} target="_blank">
                          <div>
                            <p className="date">{bigOne.POST_DATE_FORMAT} </p>
                            <p className="title">{bigOne.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) 
                    }
                  </ce>
                </div>
              </div>
            )}
          <div className="grid">
            <div>
            <h3>What's New</h3>
            {littleOne && (
              <div className="trendItem">
                <ce oet={`sbd3167_${littleOne.ENITY_ID}`}>
                {
                      regex.test(littleOne.HREF) ? (
                        <a href={littleOne.HREF} target="_blank" onClick={()=> recordArticleHit(littleOne.HREF, littleOne.ENITY_ID)}>
                           <div>
                            <p className="date">Webinar : {littleOne.POST_DATE_FORMAT} <span className="unread">{littleOne.SEEN === 0 && '- Unread'}</span></p>
                            <p className="title">{littleOne.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) : (
                        <a href={littleOne.HREF} target="_blank">
                          <div>
                            <p className="date">Webinar : {littleOne.POST_DATE_FORMAT} <span className="unread">{littleOne.SEEN === 0 && '- Unread'}</span></p>
                            <p className="title">{littleOne.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) 
                    }
                </ce>
              </div>
            )}
            {littleTwo && (
              <div className="trendItem">
              <ce oet={`sbd3167_${littleTwo.ENITY_ID}`}>
              {
                      regex.test(littleTwo.HREF) ? (
                        <a href={littleTwo.HREF} target="_blank" onClick={()=> recordArticleHit(littleTwo.HREF, littleTwo.ENITY_ID)}>
                           <div>
                            <p className="date">Covid-19 : {littleTwo.POST_DATE_FORMAT} <span>{littleTwo.SEEN === 0 && '- Unread'}</span></p>
                            <p className="title">{littleTwo.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) : (
                        <a href={littleTwo.HREF} target="_blank">
                          <div>
                            <p className="date">Covid-19 : {littleTwo.POST_DATE_FORMAT} <span>{littleTwo.SEEN === 0 && '- Unread'}</span></p>
                            <p className="title">{littleTwo.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) 
                    }
                </ce>
              </div>
            )}
            {littleThree && (
              <div className="trendItem">
                <ce oet={`sbd3167_${littleThree.ENITY_ID}`}>
                {
                      regex.test(littleThree.HREF) ? (
                        <a href={littleThree.HREF} target="_blank" onClick={()=> recordArticleHit(littleThree.HREF, littleThree.ENITY_ID)}>
                           <div>
                            <p className="date">End Client Piece : {littleThree.POST_DATE_FORMAT} <span>{littleThree.SEEN === 0 && '- Unread'}</span></p>
                            <p className="title">{littleThree.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) : (
                        <a href={littleThree.HREF} target="_blank">
                          <div>
                            <p className="date">End Client Piece : {littleThree.POST_DATE_FORMAT} <span>{littleThree.SEEN === 0 && '- Unread'}</span></p>
                            <p className="title">{littleThree.DISPLAY_NAME}</p>
                            <p className="callout">View more</p>
                          </div>
                        </a>
                      ) 
                    }
                </ce>
              </div>
            )}
            {!littleOne && (
              <div className="trendItem noLink">
                <a>
                <p className="date">Webinar</p>
                <p className="title">There are no scheduled webinars at this time.</p>
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
