import React, { Component } from "react";
import { Grid, GridColumn } from 'semantic-ui-react';
import './style.css';

class Footer extends Component {
    render() {
      return (
          <div>
              <footer>
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