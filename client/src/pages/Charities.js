import React, { Component } from "react";
import { Grid, Segment } from 'semantic-ui-react'
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
    this.getCharities();
  }

  getCharities = () => {
    const userEmail = localStorage.getItem("LoginEmail");

    if (userEmail) {
      console.log("These results are based on your preferences");
      const userPrefs = localStorage.getItem("LoginPrefs");

      API.getCharityMatch(userPrefs)
      .then(res => this.setState({charities: res.data}))
      .finally(() => {this.getGeoCode()});
    } else {
      API.getRandomCharity()
      .then(res => this.setState({charities: res.data}))
      .finally(() => {this.getGeoCode()});
    }
  }

  getGeoCode = () => {
    this.state.charities.slice(0, 10).forEach(charities => { 
      API.getGeocode(charities.mailingAddress.streetAddress1, charities.mailingAddress.city, charities.mailingAddress.stateOrProvince)
      .then(res => this.setState({geocodeLat: [...this.state.geocodeLat, [res.data.results[0].geometry.location.lat]],
                                  geocodeLong: [...this.state.geocodeLong, [res.data.results[0].geometry.location.lng]],
                                  geocode: [...this.state.geocode, [res.data.results[0].geometry.location.lat, res.data.results[0].geometry.location.lng]]}));
    })
  };

  render(){
    return(
      <div>
        <Navbar />
          <div>
            <div className='parallax'></div>
            <h2 className='center aligned popularCharities'>Popular Charities</h2>
            <Grid divided='vertically'>

              <Grid.Row columns={3}>
                <Grid.Column width={2}></Grid.Column>
                <Grid.Column width={12}>   
                {this.state.charities.map((charities, index) => (
                  <Segment raised>
                    <Grid>
                      <Grid.Column width={10}>
                      <h4 className='charityName'>{charities.charityName}</h4>
                      <h5 className='charityTag'>{charities.tagLine}</h5>
                      <p className='charityMission'>{charities.mission}</p>
                      <h6><a className='charityURL' href={charities.websiteURL}>{charities.websiteURL}</a></h6>
                      </Grid.Column>
                      <Grid.Column width={1}></Grid.Column>
                      <Grid.Column width={5}>
                        <CharityMap 
                        lat={this.state.geocodeLat[index]} 
                        long={this.state.geocodeLong[index]} 
                        center={this.state.geocode[index]}
                        />
                      </Grid.Column>
                    </Grid>
                  </Segment>  
                ))},
                </Grid.Column>
                <Grid.Column width={2}></Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        <Footer />
      </div>
    )}
}