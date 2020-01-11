import React, { Component } from "react";
import { Grid, GridColumn } from 'semantic-ui-react';
import './style.css';

class Footer extends Component {
    render() {
      return (
          <div>
              <footer>
                <Grid>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Learn More</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Contribute</h2>
                            <ul>
                                <li>Log In</li>
                                <li>Sign Up</li>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Legal</h2>
                            <ul>
                                <li>Privacy</li>
                                <li>Terms and Conditions</li>
                            </ul>
                    </Grid.Column>
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