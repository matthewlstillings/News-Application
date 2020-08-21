import React, { useState } from "react";
import CheckBox from "./CheckBox";
import CheckBoxTopics from "./CheckBoxTopics";
import FilterInput from "./FilterComponents/FilterInput";

const Filters = (props) => {
	const [dropDown, setDropDown] = useState({
		open: false,
		filters: [],
		filterType: "",
	});
	const [checkedFilters, setCheckedFilters] = useState({
		filterThree: "",
		filterOne: "",
		filterTwo: "",
		topics: [],
		years: "",
	});
	const [tags, setTags] = useState([]);

	const openDropDown = (type, filterItems) => {
		let formattedArr;
		if (type === "topics") {
			formattedArr = filterItems.map((item) => {
				return item.KEY;
			});
		} else {
			formattedArr = filterItems;
		}
		if (dropDown.open && dropDown.filterType === type) {
			setDropDown({
				open: false,
				filters: [],
				filterType: "",
			});
		} else {
			setDropDown({
				open: true,
				filters: formattedArr,
				filterType: type,
			});
		}
	};

	const handleSetFilters = (filter, type) => {
		if (type === "topics") {
			props.handleSetTopics(filter);
		} else {
			props.handleSetFilter(filter, type);
		}
	};

	const handleClearFilter = () => {
		setDropDown({
			open: false,
			filters: [],
			filterType: "",
		});
		setTags([]);
		setCheckedFilters({
			filterThree: "",
			filterOne: "",
			filterTwo: "",
			topics: [],
			years: "",
		});
		props.clearFilters();
	};

	const handleTagRemoval = (tag) => {
		const newArr = tags.slice();

		!newArr.includes(tag)
			? newArr.push(tag)
			: newArr.splice(newArr.indexOf(tag), 1);
		setTags(newArr);
		const newTopics = checkedFilters.topics.slice();

		!newTopics.includes(tag)
			? newTopics.push(tag)
			: newTopics.splice(newTopics.indexOf(tag), 1);
		setCheckedFilters({
			...checkedFilters,
			topics: newTopics,
		});
		handleSetFilters("topics", tag);
	};

	return (
		<div className="filters" id="insights">
			<div className="contain filters">
				<div className="filter_dropdown">
					{props.topics.length > 0 && (
						<button
							className={`${
								dropDown.filterType === "topics" && "selected"
							} filter_dropnav`}
							onClick={() => {
								openDropDown("topics", props.topics);
							}}
						>
							Topics
						</button>
					)}

					{props.filterOne.filterArrayList.length > 0 && (
						<FilterInput
							handleSetFilter={handleSetFilters}
							dropDown={dropDown}
							openDropDown={openDropDown}
							filter={props.filterOne}
							filterType={"filterOne"}
							openSearch={props.openSearch}
						/>
					)}
					{props.filterTwo.filterArrayList.length > 0 && (
						<FilterInput
							handleSetFilter={handleSetFilters}
							dropDown={dropDown}
							openDropDown={openDropDown}
							filter={props.filterTwo}
							filterType={"filterTwo"}
							openSearch={props.openSearch}
						/>
					)}
					{props.filterThree.filterArrayList.length > 0 && (
						<FilterInput
							handleSetFilter={handleSetFilters}
							dropDown={dropDown}
							openDropDown={openDropDown}
							filter={props.filterThree}
							filterType={"filterThree"}
							openSearch={props.openSearch}
						/>
					)}
					{props.years.filterArrayList.length > 0 && (
						<FilterInput
							handleSetFilter={handleSetFilters}
							dropDown={dropDown}
							openDropDown={openDropDown}
							filter={props.years}
							filterType={"years"}
							openSearch={props.openSearch}
						/>
					)}
					{props.textFilter && (
						<input
							type="text"
							placeholder="Search for keywords"
							onChange={(e) => props.handleSetFilter(e.target.value, "text")}
						/>
					)}
          {props.openSearch && (
					   <button
						className="clear-btn view_more_btn "
						onClick={handleClearFilter}
					>
						Clear All
					</button>

			  	)}
				</div>
			</div>
			<div
				className={`${
					dropDown.filterType === "topics" && "opened"
				} dropdown_filter_list topics contain`}
			>
				{props.topics.map((topic) => {
					return (
						<label className={`${topic.KEY} filter_check`}>
							<CheckBoxTopics
								topic={topic.KEY}
								handleSetFilters={handleSetFilters}
								filterType={dropDown.filterType}
								checkedFilters={checkedFilters}
								setCheckedFilters={setCheckedFilters}
								setTags={setTags}
								tags={tags}
								type="topics"
							/>
						</label>
					);
				})}
			</div>
			<div
				className={`${
					dropDown.filterType === "filterOne" && "opened"
				} dropdown_filter_list topics contain`}
			>
				{props.filterThree.filterArrayList.length > 0 &&
					props.filterOne.filterArrayList.map((topic) => {
						return (
							<label className={`${topic} filter_check`}>
								<CheckBox
									topic={topic}
									handleSetFilters={handleSetFilters}
									filterType={dropDown.filterType}
									checkedFilters={checkedFilters}
									setCheckedFilters={setCheckedFilters}
									type="filterOne"
								/>
							</label>
						);
					})}
			</div>
			<div
				className={`${
					dropDown.filterType === "filterTwo" && "opened"
				} dropdown_filter_list topics contain`}
			>
				{props.filterTwo.filterArrayList.length > 0 &&
					props.filterTwo.filterArrayList.map((topic) => {
						return (
							<label className={`${topic} filter_check`}>
								<CheckBox
									topic={topic}
									handleSetFilters={handleSetFilters}
									filterType={dropDown.filterType}
									checkedFilters={checkedFilters}
									setCheckedFilters={setCheckedFilters}
									type="filterTwo"
								/>
							</label>
						);
					})}
			</div>
			<div
				className={`${
					dropDown.filterType === "filterThree" && "opened"
				} dropdown_filter_list topics contain`}
			>
				{props.filterThree.filterArrayList.length > 0 &&
					props.filterThree.filterArrayList.map((topic) => {
						return (
							<label className={`${topic} filter_check`}>
								<CheckBox
									topic={topic}
									handleSetFilters={handleSetFilters}
									filterType={dropDown.filterType}
									checkedFilters={checkedFilters}
									setCheckedFilters={setCheckedFilters}
									type="filterThree"
								/>
							</label>
						);
					})}
			</div>
			<div
				className={`${
					dropDown.filterType === "years" && "opened"
				} dropdown_filter_list topics contain`}
			>
				{props.years.filterArrayList.length > 0 &&
					props.years.filterArrayList.map((topic) => {
						return (
							<label className={`${topic} filter_check`}>
								<CheckBox
									topic={topic}
									handleSetFilters={handleSetFilters}
									filterType={dropDown.filterType}
									checkedFilters={checkedFilters}
									setCheckedFilters={setCheckedFilters}
									type="years"
								/>
							</label>
						);
					})}
			</div>
			{tags.length > 0 && (
				<div>
					<div className="tag_contain contain">
						{tags.map((tag) => (
							<div
								className="tag"
								key={tag}
								onClick={() => handleTagRemoval(tag)}
							>
								<p>{tag}</p>
								<span className="x">X</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Filters;
