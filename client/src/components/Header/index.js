import React, { Component } from "react";
import { Header, Image } from 'semantic-ui-react";

class Header extends Component {
  render(){
    <div>
      <Header as='h2'>
        <img src="LOGO" class="ui circular image" />
        <h2>Charity Match</h2>
        <img src="USER IMAGE" class="ui circular image" />
      </Header>
    </div>
};

export default Header;
