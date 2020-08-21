import React, { useState } from "react";
import Filters from "./Filters";
import Trending from "./Trending";
import Featured from "./Featured";
import FilteredResults from "./FilteredResults";
import ThumbnailSectionBasic from "./ThumbnailContainerBasic";

function Dashboard(props) {
	//If filter is applied, open filtered results
	const [openSearch, setOpenSearch] = useState(false);
	// State for filters, if any of the filters are applied the search results will open
	const [filters, setFilters] = useState({
		topics: [], //Array to add mapping_ids to.
		filterOne: "", //Currently uses EXTRA1 field, only one filter at a time is allowed here.
		filterTwo: "", //Currently uses EXTRA2 field, only one filter at a time is allowed here.
		filterThree: "", //Currently uses EXTRA3 field, only one filter at a time is allowed here.
		years: "",
		text: "",
	});

	//Function to open search results
	const handleSetOpenResults = () => {
		setOpenSearch(true);
	};

	//Clears Filters
	const clearFilters = () => {
		setFilters({
			topics: [],
			filterOne: "",
			filterTwo: "",
			filterThree: "",
			years: "",
			text: "",
		});
		setOpenSearch(false);
	};

	//Function for setting topics/mapping_ids filter
	const handleSetTopics = (filterItem) => {
		const newArr = filters.topics.slice();

		!newArr.includes(filterItem)
			? newArr.push(filterItem)
			: newArr.splice(newArr.indexOf(filterItem), 1);
		setFilters({
			...filters,
			topics: newArr,
		});

		handleSetOpenResults();
	};

	//Function for setting EXTRA/Text/Year Filters
	const handleSetFilter = (filterItem, filterProp) => {
		if (filters[filterProp] === filterItem) {
			setFilters({
				...filters,
				[filterProp]: "",
			});
		} else {
			setFilters({
				...filters,
				[filterProp]: filterItem,
			});
		}
		handleSetOpenResults();
	};

	return (
		<>
			<div className="resource-app">
				<div className="filters_section">
					<Filters
						topics={props.childProps.topics}
						filterOne={props.childProps.filterOne}
						filterTwo={props.childProps.filterTwo}
						filterThree={props.childProps.filterThree}
						years={props.childProps.years}
						textFilter={props.childProps.textFilter}
						handleSetTopics={handleSetTopics}
						handleSetFilter={handleSetFilter}
						setOpenSearch={setOpenSearch}
						openSearch={openSearch}
						clearFilters={clearFilters}
					/>
				</div>

				{openSearch ? (
					<FilteredResults
						resources={props.childProps.resources}
						filters={filters}
					/>
				) : (
					<div>
						<Trending id="insights" resources={props.childProps.resources} />
						<ThumbnailSectionBasic
							resources={props.childProps.resources}
							filter="In The Press"
							inView={6}
							increment={3}
							title="In the press"
							id="press_section"
						/>
						<ThumbnailSectionBasic
							resources={props.childProps.resources}
							filter="Webinar"
							inView={3}
							increment={3}
							title="WEBINARS, VIDEOS & PODCASTS"
							id="webinars_section"
						/>
						<Featured resources={props.childProps.resources} />

						<section className="press_wrapper" id="news">
							<ThumbnailSectionBasic
								resources={props.childProps.resources}
								filter="Updates from the Industry"
								inView={6}
								increment={3}
								title="Updates from the Industry"
								id="industry_section"
							/>
						</section>
					</div>
				)}
			</div>
		</>
	);
}

export default Dashboard;
