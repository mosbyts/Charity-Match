import React, { Component } from "react";
import { Grid, Image } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll'
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

export default class NotFound extends Component {
    render(){
        return(
            <div>
                <Navbar />
                    <p>We're sorry we couldn't find the page you're looking for. Could we offer some charity suggestions?</p>
                    <div className="topPicks">
                    <h1 className="center aligned text">Editor's Top Picks</h1>
                    <Grid relaxed verticalAlign='middle' columns={3}>
                        <Grid.Row>
                        <Grid.Column>
                        <ScrollAnimation animateIn='fadeIn'>
                            <a href="https://www.toosmart2start.com"><Image src={HTS2SLogo} className="charityLogo" alt="Henrico Too Smart 2 Start Logo" /></a>
                        </ScrollAnimation>
                        </Grid.Column>
                        <Grid.Column>
                        <ScrollAnimation animateIn='fadeIn' delay={450}>
                            <a href="https://www.rebuildingtogether.org"><Image src={RTLogo} className="charityLogo" alt="Rebuilding Together Logo" /></a>
                        </ScrollAnimation>
                        </Grid.Column>
                        <Grid.Column>
                        <ScrollAnimation animateIn='fadeIn' delay={950}>
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
                        <ScrollAnimation animateIn='fadeIn' delay={450}>
                            <a href="https://feedmore.org/"><Image src={FMLogo} className="charityLogo" alt="Feed More Logo" /></a>
                        </ScrollAnimation>
                        </Grid.Column>
                        <Grid.Column>
                        <ScrollAnimation animateIn='fadeIn' delay={950}>
                            <a href="https://techfortroops.org/"><Image src={TFTLogo} className="charityLogo" alt="Tech For Troops Logo" /></a>
                        </ScrollAnimation>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    </div>
                <Footer />
            </div>
        )
    }
}