import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import "./style.css"

const Home = () => (
  <div>
    <div class="parallax"></div>
    <h2 className="ui center aligned header">Popular Charities</h2>
    <Grid relaxed columns={3}>
      <Grid.Row>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='/CHARITY LOGO' /></a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /></a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
   </div>
)

export default Home;
