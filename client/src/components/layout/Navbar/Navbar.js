import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
import { Button, Divider, Grid, Image } from 'semantic-ui-react';
=======
import { Button, Grid, Image, Icon } from 'semantic-ui-react';
>>>>>>> Stashed changes
import Logo from "./ntLogo.png";
import "./style.css";
import Login from "../../auth/Login";

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
      <Link to="/">
        <Grid verticalAlign='top'>
          <Grid.Row>
            <Grid.Column width={2}>
              <Image src={ Logo } size='small' className="ui circular image" alt="Charity Match Logo" />
            </Grid.Column>
            <Grid.Column width={4}>
              <h1 className="padding">Charity Match</h1>
            </Grid.Column>
            <Grid.Column width={8}></Grid.Column>
            <Grid.Column width={2}  className="padding">
              <Button><Link to='/dashboard' component={Login}>Log In</Link></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Link>
    </div>
    );
  }
}

export default Navbar;