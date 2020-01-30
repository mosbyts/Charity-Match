import React, { Component } from "react";
import {Button} from 'semantic-ui-react';
import './style.css'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import Survey from "../Survey/Survey";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <Navbar />
        <div className="parallax6"></div>
          <h2 className="center aligned">Welcome to Charity Match, {user.name.split(" ")[0]}</h2>
            <p className="center aligned">You now have access to tons of charities that suit your interests.</p>
            <Survey />
            <p className="center aligned">We hope you enjoyed Charity Match!</p>
            <Button primary onClick={this.onLogoutClick} className="d-flex">
              Logout
            </Button>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
