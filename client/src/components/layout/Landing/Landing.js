import React, { Component } from "react";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from "../../Home/Home";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  };
};
