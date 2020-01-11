import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import Logo from "../layout/Navbar/ntLogo.png"

export default class CharityList extends Component {
  render() {
    return(
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Image src={ Logo } size='small'/>
              </Grid.Column>
              <Grid.Column width={8}>
                <h5>Charity Name</h5>
                <p>Charity Mission</p>
                <p>Charity Info: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
    // if (!this.state.charities) return <div>Loading..</div>;
    // const items = this.state.charities.map(charity =>
    //   <li key={charity}>{charity}</li>
    // );
    // return <ul>{items}</ul>;
  }
};
