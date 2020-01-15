import React, { Component } from "react";
import { Grid, GridColumn } from 'semantic-ui-react';
import './style.css';
import About from "../../About/About";

//Need to add routing to each list item.

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
                                <li target={About}>About Us</li>
                                <li target="#">Contact Us</li>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Contribute</h2>
                            <ul>
                                <li target="#">Donate</li>
                                <li target="#">Volunteer</li>
                            </ul>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={4}>
                        <h2>Legal</h2>
                            <ul>
                                <li target="#">Privacy</li>
                                <li target="#">Terms and Conditions</li>
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