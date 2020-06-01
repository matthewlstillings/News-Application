import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Trending from "./Trending";
import Featured from "./Featured";
import FilteredResults from "./FilteredResults";
import ThumbnailSectionBasic from './ThumbnailContainerBasic';

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
            <ThumbnailSectionBasic 
              resources={props.childProps.resources} 
              filter='In The Press'
              inView={6} 
              increment={3} 
              title="In the press"
              id="press_section"
            />
            <ThumbnailSectionBasic 
              resources={props.childProps.resources} 
              filter='Webinar'
              inView={3} 
              increment={3} 
              title="Webinars & Videos"
              id="webinars_section"
            />
            <Featured resources={props.childProps.resources} />
            
            <section className="press_wrapper" id="news">
            <ThumbnailSectionBasic 
              resources={props.childProps.resources} 
              filter='Updates from the Industry'
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
