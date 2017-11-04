import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import TopNavigation from "./components/navigation/TopNavigation";
import HeroList from "./components/heroList/HeroList";
import Dashboard from "./components/dashboard/Dashboard";
import HeroDetails from "./components/heroDetails/HeroDetails";

const App = ({ location }) => (
  <div className="ui container">
    <TopNavigation />
    <Route location={location} path="/" exact component={Dashboard} />
    <Route location={location} path="/heroes" exact component={HeroList} />
    <Route
      location={location}
      path="/heroes_detail/:id"
      exact
      component={HeroDetails}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
