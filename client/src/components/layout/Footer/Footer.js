import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Divider, Grid, GridColumn } from 'semantic-ui-react';
import './style.css';
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Privacy from "../../Privacy/Privacy";
import Terms from "../../Terms/Terms";
import Dashboard from "../../dashboard/Dashboard";
import Survey from "../../Survey/Survey";
import Agreement from "../../Agreement/Agreement";
import Login from "../../auth/Login";

class Footer extends Component {
    render() {
      return (
          <div>
              <footer>
                <Divider hidden />
                <Grid container columns='equal' verticalAlign='middle'>
                   <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={4}>
                        <br></br>
                        <h2>Learn More</h2>
                            <ul>
                                <Link to="/about" component={About}><li>About Us</li></Link>
                                <Link to="/contact" component={Contact}><li>Contact Us</li></Link>
                                <Link to="/survey" component={Survey}><li>Take The Survey</li></Link>
                            </ul>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <br></br>
                        <h2>Contribute</h2>
                            <ul>
                                <Link to="/donate" component={Dashboard}><li>Donate</li></Link>
                                <Link to="/volunteer" component={Dashboard}><li>Volunteer</li></Link>
                                <Link to="/charities"><li>View Charities</li></Link>
                            </ul>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <br></br>
                        <h2>Legal</h2>
                            <ul>
                                <Link to="/privacy" component={Privacy}><li>Privacy</li></Link>
                                <Link to="/terms" component={Terms}><li>Terms and Conditions</li></Link>
                                <Link to="/agreement" component={Agreement}><li>User Agreement</li></Link>
                            </ul>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid>
                  <Grid verticalAlign='middle'>
                      <Grid.Row></Grid.Row>
                      <Grid.Row textAlign='center' columns={1}>
                          <GridColumn>
                            <p>Charity Match © 2020</p>
                          </GridColumn>
                      </Grid.Row>
                  </Grid>
              </footer>
          </div>
      )
    }
}

export default Footer;