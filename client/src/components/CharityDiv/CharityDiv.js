import React, { Component } from "react";
import Charities from '../../pages/Charities';
import API from "../../utils/API";

export default class CharityDiv extends Component {
    render(){
        return(
            <div>
                <h4>Charity Names</h4>
                <h5>Charity Missions</h5>
                <p>Charity Infos</p>
            </div>
        )
    }
}