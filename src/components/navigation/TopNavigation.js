import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class TopNavigation extends Component {
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <NavLink to="/" exact activeClassName="active" className="Item">
            Dashboard
          </NavLink>
          <NavLink to="/heroes" activeClassName="active" className="Item">
            Heroes
          </NavLink>
        </Menu>
      </div>
    );
  }
}

export default TopNavigation;
