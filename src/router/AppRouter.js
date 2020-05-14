import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Article from "../components/Article";
import Dashboard from "../components/Dashboard";

export const history = createBrowserHistory();

const AppRouter = (props) => {
  const childProps = {
    topics: props.topics,
    //industry: props.industry,
    //dist: props.dist,
    format: props.format,
    resources: props.resources,
  };
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            path="/"
            render={(props) => <Dashboard {...props} childProps={childProps} />}
            exact={true}
          />
          <Route
            path="/article/:id"
            render={(props) => <Article {...props} childProps={childProps} />}
          />
          <Route
            path="*"
            exact={true}
            render={(props) => <Dashboard {...props} childProps={childProps} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
