import React, { Components } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React {
    render(){
        return(
            <div>
                <Header />
                    <h2>Welcome to Charity Matcher!</h2>
                    <p>Log in or sign up to begin.</p>
                <Footer />
            </div>
        )
    }
}

export default Home;