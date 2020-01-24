import React, { Component } from "react";
import { Grid } from 'semantic-ui-react'
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
    window.scrollTo(0 , 0);
    this.showRandom();
  }

  showRandom = () => {
    API.getRandomCharity()
    .then(res => this.setState({charities: res.data}))
    .finally(() => {this.getGeoCode()});
  }

  getGeoCode = () => {
    this.state.charities.slice(0, 10).forEach(charities => { 
      API.getGeocode(charities.mailingAddress.streetAddress1, charities.mailingAddress.city, charities.mailingAddress.stateOrProvince)
      .then(res => this.setState({geocode: [...this.state.geocode, [res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng]]}));
    })
  };

  render(){
    return(
      <div>
        <Navbar />
          <div>
            <h2 className='center aligned popularCharities'>Popular Charities</h2>
            <Grid divided='vertically'>
              <Grid.Row columns={4}>
                <Grid.Column></Grid.Column>
                <Grid.Column>   
              {this.state.charities.map((charities, index) => (
                <div className='charityBlock'>
                  <h4 className='charityName'>{charities.charityName}</h4>
                  {/* <p>{this.state.geocode[index]}</p> */}
                  <h5 className='charityTag'>{charities.tagLine}</h5>
                  <p className='charityMission'>{charities.mission}</p>
                  {/* <CharityMap 
                  lat={this.state.geocode[index]} 
                  long={this.state.geocode[index][1]} 
                  center={this.state.geocode[index]}
                /> */}
                </div>
              ))},
                </Grid.Column>
                <Grid.Column>
              {this.state.geocode.map((codes, index) => (
                <CharityMap 
                  lat={codes[0]} 
                  long={codes[1]} 
                  center={codes}
                />
              ))}
                </Grid.Column>
                <Grid.Column></Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        <Footer />
      </div>
    )}
}