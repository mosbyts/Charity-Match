const db = require("../models");
const connection = require("../server");

module.exports = {
    createUser: function(){
        connection.query("INSERT INTO userData(email, username, firstName, lastName) VALUES (" + email + ", " + username + ", " + firstName + ", " + lastName + ")");
    },
    updateUserData: function(){
        connection.query("INSERT INTO userData(username, charityScore, charityMatch) VALUES(" + username + ", " + charityScore + ", " + charityMatch + ")");
    }
}