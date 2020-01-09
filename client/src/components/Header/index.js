import React, { Component } from "react";
import { Menu, Header, Image } from 'semantic-ui-react";

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <img src="LOGO" class="ui circular image" />
        <Menu.Item header>Charity Match</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='charities'
          active={activeItem === 'charities'}
          onClick={this.handleItemClick}
        />
      <img src="USER IMAGE" class="ui circular image" />
      </Menu>
    )
  }
}
