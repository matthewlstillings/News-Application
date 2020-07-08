import React, { useState, useEffect } from "react";
import { singleFilter } from "../helpers/filterFunction";

const FeaturedSection = (props) => {
	const [features, setFeatures] = useState([]);
	const [inView, setInView] = useState(2);
	useEffect(() => {
		setFeatures(
			singleFilter("Featured from Sanctuary", props.resources).slice(0, inView),
		);
	}, [props.resources, inView]);
	useEffect(() => {
		setInView(2);
	}, []);
	const handleInViewIncrement = (e) => {
		setInView((prevView) => {
			return prevView + 2;
		});
	};
	return (
		<section className="thumbnail_section features_section" id="featured">
			<div className="contain">
				<h3 className="section-title">Featured From Sanctuary</h3>
				<div className="grid features_grid">
					{features.map((feature, index) => (
						<div
							className={
								index % 2 === 0
									? "features_thumbnail"
									: "features_thumbnail reverse"
							}
							key={feature.ENITY_ID}
						>
							<ce oet={`sbd3167_${feature.ENITY_ID}`}>
								<a href={`${feature.HREF}`} target="_blank">
									<div
										className="image"
										style={{
											backgroundImage: `url(${feature.HREF2})`,
										}}
									></div>
									<div className="info">
										<p className="date">
											{feature.POST_DATE_FORMAT.replace(/\//g, ".")}
										</p>
										<p className="article-title">{feature.DISPLAY_NAME}</p>
										<p className="summary">{feature.SHORT_DESC}</p>
										<p className="callout">Learn More</p>
									</div>
								</a>
							</ce>
						</div>
					))}
				</div>
				{features.length > inView && (
					<button onClick={handleInViewIncrement} className="view_more_btn">
						Load More
					</button>
				)}
			</div>
		</section>
	);
};

export default FeaturedSection;
