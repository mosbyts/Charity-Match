import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class CharityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charities: null
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:3000/api/charities', {
        headers: {
          Authorization: 'Bearer ' + await this.props.auth.getAccessToken()
        }
      });
      const data = await response.json();
      this.setState({ charities: data.charities });
    } catch (err) {
      // handle error as needed
    }
  }

  render() {
    if (!this.state.charities) return <div>Loading..</div>;
    const items = this.state.charities.map(charity =>
      <li key={charity}>{charity}</li>
    );
    return <ul>{items}</ul>;
  }
});