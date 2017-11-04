import React from "react";
// import PropTypes from "prop-types";
import { heroes } from "../../hero";
import { Link } from "react-router-dom";
import "./HeroList.css";
// import { Form, Button, Message } from "semantic-ui-react";
// import Validator from "validator";
// import InlineError from "../messages/InlineError";

class HeroList extends React.Component {
  state = {
    heroes: heroes,
    selectedHero: ""
  };

  onSelect(hero) {
    this.setState({ selectedHero: hero });
  }

  render() {
    const { heroes, selectedHero } = this.state;

    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
          {heroes.map(hero => (
            <li key={hero.id} onClick={() => this.onSelect(hero)}>
              <span className="badge">{hero.id}</span>
              {hero.name}
            </li>
          ))}
        </ul>
        {selectedHero && (
          <div>
            <h2>{selectedHero.name} is my hero</h2>
            <Link to={`/heroes_detail/${selectedHero.id}`}>View Details</Link>
          </div>
        )}
      </div>
    );
  }
}

// HeroList.propTypes = {};

export default HeroList;
