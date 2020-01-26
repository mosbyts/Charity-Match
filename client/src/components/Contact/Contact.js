import React, {Component} from 'react'
import { Container, Grid } from 'semantic-ui-react'
import "./style.css"
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
      return (
          <div>
            <Navbar />
            <div className="parallax3"></div>
            <Container className='contactDiv'>
                <h2 className="center aligned contact">Contact Us</h2>
                    <Grid textAlign='center' columns={3} divided>
                        <Grid.Row>
                        <Grid.Column>
                            <h5 className='contactInfo'>By Phone</h5>
                            <p>1-800-CHA-RITY</p>
                            <p>1-800-242-7489</p>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 className='contactInfo'>Via GitHub</h5>
                            <a href='https://www.github.com/mosbyts'><p>mosbyts</p></a>
                            <a href='https://www.github.com/VCUPierre'><p>VCUPierre</p></a>
                        </Grid.Column>
                        <Grid.Column>
                            <h5 className='contactInfo'>By Email</h5>
                            <p>support@charitymatch.com</p>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </Container>
            <Footer />
          </div>
      )
    }
}
