import axios from "axios";

const key = "AIzaSyAiq3dHzxX2onSK1TlFhrZD2DPbFKqZ2M4";

export default {
    getRandomCharity: function(){
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&pageSize=10&rated=true&minRating=3");
    },
    getCharityMatch: function(charityMatch){
        // should we require all the questions to be answered? should we allow a user to just use the random search even if prefs are set.
        // return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&pageSize=10&search=" + charityMatch);
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&pageSize=10&categoryID=" + charityMatch.question1 +"&fundraisingOrgs="+charityMatch.question2+"&scopeOfWork="+ charityMatch.question3 +"&noGovSupport="+ charityMatch.question4);
    },
    getGeocode: function(address,city,state){
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+","+city+","+state+"&key="+key);
    },
    postRegister: function(user){
        return axios.post("api/users/register");
    },
    postLogin: function(user){
        return axios.post("api/users/login", user);
    },
    postPreferences: function(userEmail, pref){
        return axios.post("api/users/setPreferences", {email: userEmail, preferences: pref});
    },
    getPreferences: function(userEmail){
        return axios.get("api/users/getPreferences", {email: userEmail});
    }
};