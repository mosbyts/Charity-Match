import React, { Component } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CharityList from "../../CharityList/CharityList";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CharityList />
        <Footer />
      </div>
    );
  };
};
