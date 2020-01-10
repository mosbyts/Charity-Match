import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';

export default class CharityList extends Component {
  render() {
    if (!this.state.charities) return <div>Loading..</div>;
    const items = this.state.charities.map(charity =>
      <li key={charity}>{charity}</li>
    );
    return <ul>{items}</ul>;
  }
});