import React , {useState, useEffect} from 'react';
import {Slider} from '../HOC/slider';
import { singleFilter } from "../helpers/filterFunction";



const RecognitionSection = (props) => {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        setResources(
            singleFilter("Sanctuary & Advisor Recognition", props.resources)
        );
    }, [props.resources]);
    return (
        <section className="recognition_section features_section thumbnail_section">
            <div className="contain">
            <h3>Sanctuary & Advisor Recognition</h3>
                <Slider>
                {resources.map((thumbnail, index) => (
                    <div
                        className="thumbnail features_thumbnail"
                        key={thumbnail.ENITY_ID}
                    >
                    <ce oet={`sbd3167_${thumbnail.ENITY_ID}`}>
                        <a href={`${thumbnail.HREF}`} target="_blank">
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
                            <p className="callout">Click to read more</p>
                        </div>
                        </a>
                        </ce>
                    </div>
                ))}
                </Slider>
            </div>
        </section>
    )
}

export default RecognitionSection;

