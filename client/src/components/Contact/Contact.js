import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import "./style.css"
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'

export default class Contact extends Component {
    render() {
      return (
          <div>
            <Navbar />
            <div className="parallax"></div>
            <h2 className="ui center aligned header">Contact Us</h2>
                <Grid columns={3} divided>
                    <Grid.Row>
                    <Grid.Column>
                        <h5>By Phone</h5>
                        <p>1-800-CHA-RITY</p>
                        <p>1-800-242-7489</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h5>Via GitHub</h5>
                        <p>mosbyts</p>
                        <p>VCUPierre</p>
                    </Grid.Column>
                    <Grid.Column>
                        <h5>By Email</h5>
                        <p>support@charitymatch.com</p>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            <Footer />
          </div>
      )
    }
}
