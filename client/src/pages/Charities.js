import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharityList from "../components/CharityList";

class Charities extends Component {
  state = {
    charityName: "",
    tagLine: "",
    mission: ""
  };

  // When the component mounts, run function
  componentDidMount() {
    this.showMatches();
  }

  showRandom = () => {
    API.getRandomCharity;
  }
  showMatches = (charityMatch) => {
    API.getCharityMatch;
    const charityMatch = [];
  }

  render() {
    return (
      <div>
        <Header />
        <CharityList />
        <Footer />
      </div>
    );
  }
}

export default Charities;