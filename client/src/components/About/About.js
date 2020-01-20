import React, {Component} from 'react'
import "./style.css"
import Navbar from "../layout/Navbar/Navbar"
import Footer from "../layout/Footer/Footer"

export default class About extends Component {
    render(){
        return(
            <div>
                <Navbar />
                    <div className="parallax"></div>
                    <div className="aboutDiv">
                        <h2 className=" center aligned aboutUs">About Us</h2>
                        <p className='cmInfo'>Charity Match was created to connect potential volunteers and donors to a non-profit based on the person's interests. To begin, create an account and take our simple four question survey. Once the survey is complete, you'll be matched to your most compatible charities.</p>
                        <br></br>
                        <p className='cmInfo'>Charity Match was founded by web developers <a href='https://www.github.com/mosbyts'>Tianna Mosby</a> and <a href='https://www.github.com/VCUPierre'>Pierre Randall</a> as a final project for the Trilogy Education Full Stack Web Development Bootcamp at the University of Richmond. The two have an extensive history of volunteering with various nonprofits and share the belief that everyone should give their time when they can.</p>
                    </div>
                <Footer />
            </div>
        ) 
    }
}
