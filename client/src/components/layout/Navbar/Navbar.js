import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Image, Icon, Menu } from 'semantic-ui-react';
import Logo from "./ntLogo.png";
import "./style.css";
import Login from "../../auth/Login";
import About from '../../About/About';
import Contact from "../../Contact/Contact";
import Dashboard from "../../dashboard/Dashboard";

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    <div className="navbar">
        <Link to="/">
          <Grid verticalAlign='top'>
            <Grid.Row>
              <Grid.Column width={2}>
                <Image src={Logo} size='small' className="ui circular image" alt="Charity Match Logo" />
              </Grid.Column>
              <Grid.Column width={4}>
                <h1 className="charityMatch">Charity Match</h1>
              </Grid.Column>
              <Grid.Column width={7}>
                <div className="menuBtns">
                <Menu secondary>
                  <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={this.handleItemClick}
                  >
                    <Link to='/about' component={About}>About Us</Link>
                  </Menu.Item>
                  <Menu.Item
                    name='discover'
                    active={activeItem === 'discover'}
                    onClick={this.handleItemClick}
                  >
                    <Link to='/dashboard' component={Dashboard}>Discover</Link>
                  </Menu.Item>
                  <Menu.Item
                    name='contact'
                    active={activeItem === 'contact'}
                    onClick={this.handleItemClick}
                  >
                    <Link to='/contact' component={Contact}>Contact Us</Link>
                  </Menu.Item>
                </Menu>
                </div>
              </Grid.Column>
              <Grid.Column width={1} className="icon">
                <Icon name='user circle' size='big' className="floatRight"></Icon>
              </Grid.Column>
              <Grid.Column width={2}  className="loginBtn">
                <Button><Link to='/dashboard' component={Login}>My Dashboard</Link></Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Link>
    </div>
    );
  }
}