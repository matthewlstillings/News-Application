import React, { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import "./App.scss";
import jsonData from "./output.json";

function App() {
  const [topics, setTopics] = useState([]);
  //const [industry, setIndustry] = useState([]);
  //const [dist, setDist] = useState([]);
  const [format, setFormat] = useState([]);
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/jsonFormatter")
      .then((res) => res.json())
      .then((results) => {
        setResources(results.DATA);
        setTopics(results.GROUP.MAPPINGS);
        //setIndustry(results.GROUP.EXTRA1);
        //setDist(results.GROUP.EXTRA2);
        setIsLoading(false);
        setFormat(results.GROUP.EXTRA3);
      });
      setResources(jsonData.DATA);
      setTopics(jsonData.GROUP.MAPPINGS);
      //setIndustry(results.GROUP.EXTRA1);
      //setDist(results.GROUP.EXTRA2);
      setIsLoading(false);
      setFormat(jsonData.GROUP.EXTRA3);
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
          //industry={industry}
          //dist={dist}
          format={format}
          resources={resources}
        />
      )}
    </>
  );
}

export default App;
