import React, { Component } from "react";
import { heroes } from "../../hero";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    let topHeroes = heroes.slice(1, 5);
    return (
      <Grid>
        <Grid.Row columns={4}>
          {topHeroes.map(hero => (
            <Link to={`/heroes_detail/${hero.id}`} key={hero.id}>
              <Grid.Column className="module">{hero.name}</Grid.Column>
            </Link>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
