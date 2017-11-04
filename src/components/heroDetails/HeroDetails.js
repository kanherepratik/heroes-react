import React, { Component } from "react";
import { heroes } from "../../hero";

class HeroDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: {
        name: "",
        id: ""
      },
      prevPath: ""
    };
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    this.setState({ hero: heroes.find(hero => id === hero.id) });
  }
  changeName = event => {
    event.persist();
    this.setState(prevState => ({
      hero: {
        ...prevState.hero,
        name: event.target.value
      }
    }));
  };

  render() {
    const { hero } = this.state;
    return (
      <div>
        {hero && (
          <div>
            <h2>{hero.name} Details !</h2>
            <div>
              <label>id:</label>
              {hero.id}
            </div>
            <div>
              <label>name: </label>
              <input
                type="text"
                placeholder="name"
                value={hero.name}
                onChange={event => this.changeName(event)}
              />
            </div>
            <button onClick={this.props.history.goBack}>Back</button>
          </div>
        )}
      </div>
    );
  }
}

export default HeroDetails;
