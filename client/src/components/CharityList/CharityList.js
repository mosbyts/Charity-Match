import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import API from "../../utils/API";
import Charities from '../../pages/Charities';

export default class CharityList extends Component {
  state = {
    charities: []
  }

  componentDidMount() {
    this.showRandom();
  }

  showRandom = () => {
    API.getRandomCharity().then(res => this.setState({charityData: res.data}))
  }


  render() {
    return(
        <div>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={7}>
                <Charities />
              </Grid.Column>
              <Grid.Column width={1}></Grid.Column>
              <Grid.Column width={4}>
                <Image src="https://prodevsblog.com/uploads/blog_image/news_24_1.png" size='big'></Image>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
};
