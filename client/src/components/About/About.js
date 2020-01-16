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
                        <h2 className="ui center aligned header">About Us</h2>
                        <h5>Charity Match was created to connect potential volunteers and donors to a non-profit based on the person's interests. To begin, create an account and take our simple four question survey. Once the survey is complete, you'll be matched to your most compatible charities. Charity Match was founded by web developers Tianna Mosby and Pierre Randall as a final project for the Trilogy Education Full Stack Web Development Bootcamp. The two have a history of volunteering with various nonprofits and believe everyone should give their time when they can.</h5>
                    </div>
                <Footer />
            </div>
        ) 
    }
}
