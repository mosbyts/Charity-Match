import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react';
import Logo from "./ntLogo.png";
import "./style.css";

class Navbar extends Component {
  render() {
    return (
    <div>
      <Link to="/">
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image src={ Logo } size='small' className="ui circular image" alt="Charity Match Logo" />
            </Grid.Column>
            <Grid.Column width={14}>
                <h2>Charity Match</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Link>
    </div>
    );
  }
}

export default Navbar;