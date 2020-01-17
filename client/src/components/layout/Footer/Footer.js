import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, GridColumn } from 'semantic-ui-react';
import './style.css';
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Privacy from "../../Privacy/Privacy";
import Terms from "../../Terms/Terms";
import Login from "../../auth/Login";

class Footer extends Component {
    render() {
      return (
          <div>
              <footer>
                <Grid verticalAlign='middle'>
                   <Grid.Column mobile={8} tablet={4} computer={2}></Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Learn More</h2>
                            <ul>
                                <Link to="/about" component={About}><li>About Us</li></Link>
                                <Link to="/contact" component={Contact}><li>Contact Us</li></Link>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Contribute</h2>
                            <ul>
                                <Link to="/donate" component={Login}><li>Donate</li></Link>
                                <Link to="/volunteer" component={Login}><li>Volunteer</li></Link>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Legal</h2>
                            <ul>
                                <Link to="/privacy" component={Privacy}><li>Privacy</li></Link>
                                <Link to="/terms" component={Terms}><li>Terms and Conditions</li></Link>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={4} computer={2}></Grid.Column>
                </Grid>
                  <Grid verticalAlign='middle'>
                      <Grid.Row textAlign='center' columns={1}>
                          <GridColumn>
                            Charity Match © 2020
                          </GridColumn>
                      </Grid.Row>
                  </Grid>
              </footer>
          </div>
      )
    }
}

export default Footer;