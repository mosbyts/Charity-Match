import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'
import API from "../utils/API";

class Charities extends Component {

  state = {
    charities: []
  }

  // When the component mounts, run function
  componentDidMount() {
    this.showRandom();
  }

  showRandom = () => {
    API.getRandomCharity().then(res => this.setState({charities: res.data}))
  }

  render() {
    if (this.state.fetching) {
      return <div>Loading...</div>
    } else return (
      <div>
        <Grid celled>
          <Grid.Row>
          {this.state.charities.map(charities => (
            <h4>{charities.charityName}</h4>
          ))}
          {this.state.charities.map(charities => (
            <h5>{charities.tagLine}</h5>
          ))}
          {this.state.charities.map(charities => (
            <p>{charities.mission}</p>
          ))}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Charities;