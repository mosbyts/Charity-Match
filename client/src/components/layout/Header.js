import React, { Component } from "react";
import { Menu, Image } from 'semantic-ui-react';

class cmHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <img src="LOGO HERE" class="ui circular image" />
        <Menu.Item>Charity Match</Menu.Item>
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

export default cmHeader;