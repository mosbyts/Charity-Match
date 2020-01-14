import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const Homepage = () => (
  <div>
    //PARALLAX IMAGE OF CHILDREN HERE.
    <h2>Popular Charities</h2>
    <Grid relaxed columns={3}>
      <Grid.Row>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /><a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /><a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='/CHARITY LOGO' /><a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /><a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /><a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' /><a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
   </div>
)

export default Homepage;
