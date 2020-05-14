import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Trending from "./Trending";
import Webinar from "./Webinars";
import Featured from "./Featured";
import Industry from "./Industry";
import Awards from "./Awards";
import Recognition from './Recognition';
import PressSection from './Press';
import FilteredResults from "./FilteredResults";

function Dashboard(props) {
  const [openSearch, setOpenSearch] = useState(false);
  const [filters, setFilters] = useState({
    topics: [],
    industry: "",
    dist: "",
    format: "",
  });

  useEffect(() => {
    showToolKit();
  }, []);

  const showToolKit = () => {
    const toolkit = document.querySelector("#toolkit");
    if (toolkit) {
      toolkit.style.display = "block";
    }
  };

  const handleSetOpenResults = () => {
    setOpenSearch(true);
  };
  const clearFilters = () => {
    setFilters({
      topics: [],
      industry: "",
      dist: "",
      format: "",
    });
    setOpenSearch(false);
  };
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

  const handleSetIndustry = (filterItems) => {
    if (filters.industry === filterItems) {
      setFilters({
        ...filters,
        industry: "",
      });
    } else {
      setFilters({
        ...filters,
        industry: filterItems,
      });
    }
    handleSetOpenResults();
  };

  const handleSetDist = (filterItems) => {
    if (filters.dist === filterItems) {
      setFilters({
        ...filters,
        dist: "",
      });
    } else {
      setFilters({
        ...filters,
        dist: filterItems,
      });
    }
    handleSetOpenResults();
  };

  const handleSetFormat = (filterItems) => {
    if (filters.format === filterItems) {
      setFilters({
        ...filters,
        format: "",
      });
    } else {
      setFilters({
        ...filters,
        format: filterItems,
      });
    }
    handleSetOpenResults();
  };

  return (
    <>
      <div className="hero">
        <div className="contain">
          <h1>Welcome to the Advisor Resource Center. </h1>
          <p oet="s2">
            We invite you to explore our new portal with access to relevant resources, tools and timely subject matter expertise from both Sanctuary as well as industry leading sources.
          </p>
          <div className="links">
            <a href="#insights">Insights</a>
            <a href="#news">In the News & Press</a>
            <a href="#awards">Awards</a>
            <a href="#toolkit">End Client Library</a>
          </div>
        </div>
      </div>
      <div className="resource-app">
        <div className="filters_section">
          <Filters
            topics={props.childProps.topics}
            dist={props.childProps.dist}
            format={props.childProps.format}
            industry={props.childProps.industry}
            handleSetTopics={handleSetTopics}
            handleSetIndustry={handleSetIndustry}
            handleSetDist={handleSetDist}
            handleSetFormat={handleSetFormat}
            setOpenSearch={setOpenSearch}
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
            <Webinar resources={props.childProps.resources} />
            <div className="emphasized_text">
              <div className="contain">
                <p>
                  During a crisis, effective communication is vitally important. But the leadership your clients seek requires outstanding communication at all times.
                </p>
              </div>
            </div>
            <Featured resources={props.childProps.resources} />
            <Industry resources={props.childProps.resources} />
            <PressSection resources={props.childProps.resources} />
            <Awards id="awards" resources={props.childProps.resources} />
            <Recognition resources={props.childProps.resources} />
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
