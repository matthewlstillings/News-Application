import React, { useState, useEffect } from "react";
import { singleFilter } from "../helpers/filterFunction";

const TrendingSection = (props) => {
	const [bigOne, setBigOne] = useState(null);
	const [littleOne, setLittleOne] = useState(null);
	const [littleTwo, setLittleTwo] = useState(null);
	const [littleThree, setLittleThree] = useState(null);

	useEffect(() => {
		const getTrending = singleFilter("Big Feature", props.resources);
		const getGetFirst = singleFilter("Slot One", props.resources);
		const getWebinar = singleFilter("Slot Two", props.resources);
		const getPress = singleFilter("Slot Three", props.resources);

		setBigOne(getTrending[0]);
		setLittleOne(getGetFirst[0]);
		setLittleTwo(getWebinar[0]);
		setLittleThree(getPress[0]);
	}, [props.resources]);

	return (
		<section className="thumbnail_section trending_section" id="whats-new">
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
							<div class="cover"></div>
							<ce oet={`sbd3167_${bigOne.ENITY_ID}`}>
								<a href={bigOne.HREF} target="_blank">
									<div>
										<p className="article-title">{bigOne.DISPLAY_NAME}</p>
										<p className="date">
											{bigOne.POST_DATE_FORMAT.replace(/\//g, ".")}
										</p>
									</div>
								</a>
							</ce>
						</div>
					</div>
				)}
				<div className="grid">
					<div>
						{littleOne && (
							<div className="trendItem">
								<ce oet={`sbd3167_${littleOne.ENITY_ID}`}>
									<a href={littleOne.HREF} target="_blank">
										<div>
											<p className="trending-title">{littleOne.DISPLAY_NAME}</p>
											<p className="date">
												{littleOne.POST_DATE_FORMAT.replace(/\//g, ".")}
											</p>
										</div>
									</a>
								</ce>
							</div>
						)}
						{littleTwo && (
							<div className="trendItem">
								<ce oet={`sbd3167_${littleTwo.ENITY_ID}`}>
									<a href={littleTwo.HREF} target="_blank">
										<div>
											<p className="trending-title">
												{littleTwo.DISPLAY_NAME}
											</p>
											<p className="date">
												{littleTwo.POST_DATE_FORMAT.replace(/\//g, ".")}
											</p>
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
											<p className="date">
												{" "}
												{littleThree.POST_DATE_FORMAT.replace(/\//g, ".")}
											</p>
										</div>
									</a>
								</ce>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrendingSection;
