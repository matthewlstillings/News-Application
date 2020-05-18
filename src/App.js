import React, { useState, useEffect } from "react";
import AppRouter from "./router/AppRouter";
import "./App.scss";
import jsonData from "./output.json";

const data = jsonData;

function App() {
  const [topics, setTopics] = useState([]);
  const [format, setFormat] = useState([]);
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("/jsonFormatter")
      .then((res) => res.json())
      .then((results) => {
        setResources(results.DATA);
        setTopics(results.GROUP.MAPPINGS);
        setIsLoading(false);
        setFormat(results.GROUP.EXTRA3);
      });
      if (data) {
        setResources(data.DATA);
        setTopics(data.GROUP.MAPPINGS);
        setIsLoading(false);
        setFormat(data.GROUP.EXTRA3);
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
          format={format}
          resources={resources}
        />
      )}
    </>
  );
}

export default App;
