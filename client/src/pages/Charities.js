import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'
import API from "../utils/API";
import { Container, Divider } from 'semantic-ui-react'
import NavBar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
// import CharityList from "../components/CharityList";
import CharityMap from '../components/Map/map';
import ResultsList from "../components/resultList/resultList";

class Charities extends Component {

  state = {
    charities: [], 
    geocode: [],
    geocodeLat: [],
    geocodeLong: []
  }

  // When the component mounts, run function
  componentDidMount() {
    this.showRandom();
  }

  showRandom = () => {
    API.getRandomCharity()
    .then(res => this.setState({charities: res.data}))
    .finally(() => {this.getGeoCode()});
  }

  getGeoCode = () => {
    this.state.charities.slice(0, 10).map(charities => { 
      API.getGeocode(charities.mailingAddress.streetAddress1, charities.mailingAddress.city, charities.mailingAddress.stateOrProvince)
      .then(res => this.setState({geocode: [...this.state.geocode, [res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng]]}));
    })
  };

  render() {
    // this.showRandom();
    if (this.state.fetching) {
      return <div>Loading...</div>
    } else return (
      <div>
        <NavBar />
        {/* <Grid celled>
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
        </Grid> */}
        <Container textAlign='center'>
          <ResultsList>
          {this.state.geocode.map((codes, index) => (
            <div>
              <CharityMap 
                lat={codes[0]} 
                long={codes[1]} 
                center={codes}
                />
              <Divider />
            </div>
          ))}
          </ResultsList>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Charities;