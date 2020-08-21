import React, { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import axios from "axios";
import "./App.scss";
import jsonData from "./output.json";

function App() {
	//If you have fields that will be used as filters set them here. Currently can use EXTRA1, EXTRA2, EXTRA3, and MAPPINGS.
	//This will be updated but if other filters need to used (such as EXTRA1 or EXTRA2 fields) simply follow the same format as (setFormat) the filter function is prepared to accept them.
	//Topics is specfic to tagging MAPPINGS's if it's being used.
	const [topics, setTopics] = useState([]);
	//Will place all possible EXTRA1 values into array.
	const [filterOne, setFilterOne] = useState({
		inputType: "",
		filterName: "",
		filterArrayList: [],
	});
	//Will place all possible EXTRA2 values into array.
	const [filterTwo, setFilterTwo] = useState({
		filterName: "",
		inputType: "",
		filterArrayList: [],
	});
	//Will place all possible EXTRA3 values into array.
	const [filterThree, setFilterThree] = useState({
		filterName: "",
		inputType: "",
		filterArrayList: [],
	});
	const [textFilter, setTextFilter] = useState(false);
	//Resources state is all of the documents
	const [resources, setResources] = useState([]);
	//Set an array of years used to filter by years
	const [years, setYears] = useState({
		filterName: "",
		inputType: "",
		filterArrayList: [],
	});
	//Simple loader while waiting for JSON to parse and render application
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		///////////////////////////////////////////////////////////////////////PRODUCTION CODE///////////////////////////////////////////////////
		if (process.env.NODE_ENV === "production") {
			axios.get("/jsonFormatter").then((res) => {
				const results = res.data;
				setResources(results.DATA); ////DATA is an array of document objects.

				let getYears = []; //Initialize empty array for range of years for which there are documents
				//Iterate through documents to grab all years and push into getYears array
				results.DATA.forEach((obj) => {
					getYears.indexOf(obj.POST_DATE_FORMAT.slice(-4)) === -1 &&
						getYears.push(obj.POST_DATE_FORMAT.slice(-4));
				});
				/////If you dont want to use any of the filters, comment each one from here!!!!/////
				//setYears({
					//inputType: "select",
					//filterName: "years",
					//filterArrayList: getYears,
				//});

				//setTextFilter(true); ////Generate text input that searches through title and summaries. Uncomment to include/leave commented out to explude

				if (results.GROUP.EXTRA3) {
					setFilterThree({
						inputType: "checkboxes",
						filterArrayList: results.GROUP.EXTRA3,
						filterName: results.GROUP.EXTRA3_NAME,
					});
				}

				//if (results.GROUP.EXTRA2) {
					//setFilterTwo({
						//inputType: "checkboxes",
						//filterArrayList: results.GROUP.EXTRA2,
						//filterName: results.GROUP.EXTRA2_NAME,
					//});
				//}

				//if (results.GROUP.EXTRA1) {
					//setFilterOne({
						//inputType: "checkboxes",
						//filterArrayList: results.GROUP.EXTRA1,
						//filterName: results.GROUP.EXTRA1_NAME,
					//});
				//}

				if (results.GROUP.MAPPINGS) {
					setTopics(results.GROUP.MAPPINGS);
				}
				/////If you dont want to use any of the filters, comment each one from above!!!!/////
				setIsLoading(false);
			});
		}
		///////////////////////////////////////////////////////////////////////DEVELOPMENT CODE///////////////////////////////////////////////////
		if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
			const data = jsonData;
			if (data) {
				setResources(data.DATA);

				let getYears = [];
				data.DATA.forEach((obj) => {
					getYears.indexOf(obj.POST_DATE_FORMAT.slice(-4)) === -1 &&
						getYears.push(obj.POST_DATE_FORMAT.slice(-4));
				});

				/////If you dont want to use any of the filters, comment each one from here!!!!/////
				//setYears({
					//inputType: "select",
					//filterName: "Year",
					//filterArrayList: getYears,
				//});
//
				//setTextFilter(true); ////Generate text input that searches through title and summaries. Uncomment to include/leave commented out to explude

				if (data.GROUP.EXTRA3) {
					setFilterThree({
						inputType: "checkboxes",
						filterArrayList: data.GROUP.EXTRA3,
						filterName: data.GROUP.EXTRA3_NAME,
					});
				}

				//if (data.GROUP.EXTRA2) {
					//setFilterTwo({
						//inputType: "checkboxes",
						//filterArrayList: data.GROUP.EXTRA2,
						//filterName: data.GROUP.EXTRA2_NAME,
					//});
				//}

				//if (data.GROUP.EXTRA1) {
					//setFilterOne({
						//inputType: "checkboxes",
						//filterArrayList: data.GROUP.EXTRA1,
						//filterName: data.GROUP.EXTRA1_NAME,
					//});
				//}

				if (data.GROUP.MAPPINGS) {
					setTopics(data.GROUP.MAPPINGS);
				}
				/////If you dont want to use any of the filters, comment each one from above!!!!/////
				setIsLoading(false);
			}
		}
	}, []);
	return (
		<>
			{isLoading ? (
				<div>
					<div class="spinner">
						<div class="bounce1"></div>
						<div class="bounce2"></div>
						<div class="bounce3"></div>
					</div>
				</div>
			) : (
				<AppRouter
					topics={topics}
					filterThree={filterThree}
					filterTwo={filterTwo}
					filterOne={filterOne}
					resources={resources}
					years={years}
					textFilter={textFilter}
				/>
			)}
		</>
	);
}

export default App;
