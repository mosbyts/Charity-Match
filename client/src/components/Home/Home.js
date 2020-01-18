import React from 'react'
import { Link } from "react-router-dom";
import { Button, Card, Container, Grid, Image, Input } from 'semantic-ui-react'
import ScrollAnimation from 'react-animate-on-scroll'
import './style.css'
import HTS2SLogo from './logos/HTS2SLogo.jpg'
import RTLogo from './logos/RTLogo.png'
import STCLogo from './logos/STCLogo.png'
import RMHCLogo from './logos/RMHCLogo.jpg'
import FMLogo from './logos/FMLogo.jpg'
import TFTLogo from './logos/TFTLogo.png'
import donate from './donate.jpg'
import volunteer from './volunteer.png'

const Home = () => (
  <div>
    <div class="parallax"></div>
    <div className="topPicks">
    <h1 className="ui center aligned header">Editor's Top Picks</h1>
    <Grid relaxed verticalAlign='middle' columns={3}>
      <Grid.Row>
        <Grid.Column>
        <ScrollAnimation animateIn='fadeIn'>
          <a href="https://www.toosmart2start.com"><Image src={HTS2SLogo} className="charityLogo" alt="Henrico Too Smart 2 Start Logo" /></a>
        </ScrollAnimation>
        </Grid.Column>
        <Grid.Column>
        <ScrollAnimation animateIn='fadeIn'>
          <a href="https://www.rebuildingtogether.org"><Image src={RTLogo} className="charityLogo" alt="Rebuilding Together Logo" /></a>
        </ScrollAnimation>
        </Grid.Column>
        <Grid.Column>
        <ScrollAnimation animateIn='fadeIn'>
          <a href="https://www.savethechildren.org"><Image src={STCLogo} className="charityLogo" alt="Save The Children Logo" /></a>
        </ScrollAnimation>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        <ScrollAnimation animateIn='fadeIn'>
          <a href="https://www.rmhc.org/"><Image src={RMHCLogo} className="charityLogo" alt="Ronald McDonald House Charities Logo" /></a>
        </ScrollAnimation>
        </Grid.Column>
        <Grid.Column>
        <ScrollAnimation animateIn='fadeIn'>
          <a href="https://feedmore.org/"><Image src={FMLogo} className="charityLogo" alt="Feed More Logo" /></a>
        </ScrollAnimation>
        </Grid.Column>
        <Grid.Column>
        <ScrollAnimation animateIn='fadeIn'>
          <a href="https://techfortroops.org/"><Image src={TFTLogo} className="charityLogo" alt="Tech For Troops Logo" /></a>
        </ScrollAnimation>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </div>
    <Container fluid className="userOptions">
      <Link to='/dashboard'>
        <Card.Group itemsPerRow={2}>
        <Card fluid>
          <Image src={donate} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Donate</Card.Header>
              <Card.Description>
                Give to your charity match.
              </Card.Description>
            </Card.Content>
        </Card>
        <Card fluid>
          <Image src={volunteer} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Volunteer</Card.Header>
              <Card.Description>
                Spend your time the right way.
              </Card.Description>
            </Card.Content>
        </Card>
      </Card.Group>
      </Link>
    </Container>
    <Container textAlign='center' className='newsletter'>
      <Grid columns={1}>
        <Grid.Row>
          <Grid.Column>
            <h1 className="ui center aligned header">Sign Up For Our Newsletter</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <h5>Get the latest info on your favorite charities and hear about our updates.</h5>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input placeholder='Type email address here...' /><Button primary>Sign Up</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Container>
   </div>
)

export default Home;
