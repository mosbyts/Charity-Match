import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import "./style.css"
import HTS2SLogo from './HTS2S_Logo.jpg'
import RTLogo from "./rebuildingTogetherLogo.png"
import STCLogo from "./STCLogo.png"

const Home = () => (
  <div>
    <div class="parallax"></div>
    <div className="topPicks">
    <h2 className="ui center aligned header">Editor's Top Picks</h2>
    <Grid relaxed verticalAlingn='middle' columns={3}>
      <Grid.Row>
        <Grid.Column>
          <a href="www.toosmart2start.com"><Image src={HTS2SLogo} className="charityLogo" /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="www.rebuildingtogether.org"><Image src={RTLogo} className="charityLogo" /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="www.savethechildren.org"><Image src={STCLogo} className="charityLogo" /></a>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' className="charityLogo" /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' className="charityLogo" /></a>
        </Grid.Column>
        <Grid.Column>
          <a href="CHARITY LINK"><Image src='CHARITY LOGO' className="charityLogo" /></a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
   </div>
)

export default Home;
