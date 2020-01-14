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
    geocodeLat: [],
    geocodeLong: []
  }

  // When the component mounts, run function
  componentDidMount() {
    this.showRandom();
  }

  componentDidUpdate() {
    this.getGeoCode();
  }

  showRandom = () => {
    API.getRandomCharity().then(res => this.setState({charities: res.data}));
  }

  getGeoCode = () => {
    this.state.charities.slice(0, 10).map(charities => {   
      API.getGeocode(charities.mailingAddress.streetAddress1, charities.mailingAddress.city, charities.mailingAddress.stateOrProvince ).then(res => {this.setState({geocodeLat: res.data.results[0].geometry.location.lat, geocodeLong: res.data.results[0].geometry.location.lng})}/*this.setState({geocodeLat: res.results.geometry.location.lat, geocodeLong: res.results.geometry.location.lng})*/);
    })
  };

  // geocode = [37.531817, -77.4279688];

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
        <NavBar />
        <Container textAlign='center'>
          {/* <CharityMap 
            lat={this.geocode[0]} 
            long={this.geocode[1]} 
            center={this.geocode}
          /> */}
          <ResultsList>
            {this.state.charities.slice(0, 10).map((charities, index) => (
              // <p>{charities.charityName}</p>
            // <p>`{charities.mailingAddress.streetAddress1} - {charities.mailingAddress.city} {charities.mailingAddress.stateOrProvince}`</p>
              <CharityMap 
                lat={this.geocodeLat[index]} 
                long={this.geocodeLong[index]} 
                center={[this.geocodeLat[index],this.getcodeLong[index]]}
              />
            ))}
          </ResultsList>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Charities;