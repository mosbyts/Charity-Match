import React, { Component } from "react";
import API from "../utils/API";
import Footer from "../components/layout/Footer/Footer";
// import CharityList from "../components/CharityList";
import CharityMap from '../components/Map/map';
//import ResultsList from "../components/resultList/resultList";
import Navbar from "../components/layout/Navbar/Navbar";

export default class Charities extends Component {

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

  render(){
    return(
      <div>
        <Navbar />
          {/* {this.state.charities.map((charities, index) => (
            <Container textAlign='center'>   
            <ResultsList>
              <h4>{charities.charityName}</h4>
              <h5>{charities.tagLine}</h5>
              <p>{charities.mission}</p>
          ))}, */}
          {this.state.geocode.map((codes, index) => (
            <CharityMap 
              lat={codes[0]} 
              long={codes[1]} 
              center={codes}
            />
          ))}
            {/* </ResultsList>
            </Container> */}
          )
        <Footer />
      </div>
    )}
}