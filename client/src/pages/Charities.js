import React, { Component } from "react";
import API from "../utils/API";
import NavBar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";
// import CharityList from "../components/CharityList";
// import ResultsList from "../components/resultList/resultList";

class Charities extends Component {
  // state = {
  //   charityName: "",
  //   tagLine: "",
  //   mission: ""
  // };
  state = {
    charities: []
  }

  // When the component mounts, run function
  componentDidMount() {
    // this.showMatches();
    this.showRandom();
  }

  showRandom = () => {
    API.getRandomCharity().then(res => this.setState({charities: res.data}))
  }
  // showMatches = (charityMatch) => {
  //   API.getCharityMatch;
  //   const charityMatch = [];
  // }

  render() {
    return (
      <div>
        <NavBar />
        {/* <CharityList /> */}
        {/* <ResultsList>
          {this.state.charities.map(charities => (
            <p>{charities.charityName}</p>
          ))}
        </ResultsList> */}
        <div>
          {this.state.charities.map(charities => (
            <p>{charities.charityName}</p>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Charities;