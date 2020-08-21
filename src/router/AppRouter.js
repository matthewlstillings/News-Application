import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Article from "../components/Article";
import Dashboard from "../components/Dashboard";

export const history = createBrowserHistory();

const AppRouter = (props) => {
	///Build the child props object
	const childProps = {
		topics: props.topics,
		years: props.years,
		filterThree: props.filterThree,
		filterTwo: props.filterTwo,
		filterOne: props.filterOne,
		resources: props.resources,
		textFilter: props.textFilter,
	};
	//May switch to different format, additional page may not be needed.
	return (
		
		<Router history={history}>
			<div>
				<Switch>
					<Route
						path="/"
						render={(props) => <Dashboard {...props} childProps={childProps} />}
						exact={true}
					/>
					{/*For individual document pages. Do not use currently except on Advisor Resource Center or if application belongs to home page, will need to be updated for redirects.*/}
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
