import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Image, Icon } from 'semantic-ui-react';
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
            <Grid.Column width={7}></Grid.Column>
            <Grid.Column width={1} className="paddingIcon">
              <Icon name='user circle' size='big' className="floatRight"></Icon>
            </Grid.Column>
            <Grid.Column width={2}  className="padding">
              <Button><Link to='/login' component={Login}>Log In</Link></Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Link>
    </div>
    );
  }
}

export default Navbar;