import React, { useState } from "react";
import CheckBox from "./CheckBox";
import CheckBoxTopics from "./CheckBoxTopics";

const Filters = (props) => {
  const [dropDown, setDropDown] = useState({
    open: false,
    filters: [],
    filterType: "",
  });
  const [checkedFilters, setCheckedFilters] = useState({
    dist: "",
    format: "",
    industry: "",
    topics: [],
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
  const handleSetFilters = (type, filter) => {
    if (type === "topics") {
      props.handleSetTopics(filter);
    } else if (type === "format") {
      props.handleSetFormat(filter);
    } else if (type === "dist") {
      props.handleSetDist(filter);
    } else if (type === "industry") {
      props.handleSetIndustry(filter);
    }
  };

  const handleClearFilter = () => {
    setDropDown({
      open: false,
      filters: [],
      filterType: "",
    });
    setTags([]);
    setCheckedFilters({ dist: "", format: "", industry: "", topics: [] });
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
        <h2>Insights</h2>
        <div className="filter_dropdown">
          <button
            className={`${
              dropDown.filterType === "topics" && "selected"
            } filter_dropnav`}
            onClick={() => {
              openDropDown("topics", props.topics);
            }}
          >
            Topic
          </button>
          <button
            className={`${
              dropDown.filterType === "format" && "selected"
            } filter_dropnav`}
            onClick={() => {
              openDropDown("format", props.format);
            }}
          >
            Format
          </button>
          {dropDown.open && (
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
          dropDown.filterType === "format" && "opened"
        } dropdown_filter_list topics contain`}
      >
        {props.format.map((topic) => {
          return (
            <label className={`${topic} filter_check`}>
              <CheckBox
                topic={topic}
                handleSetFilters={handleSetFilters}
                filterType={dropDown.filterType}
                checkedFilters={checkedFilters}
                setCheckedFilters={setCheckedFilters}
                type="format"
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
