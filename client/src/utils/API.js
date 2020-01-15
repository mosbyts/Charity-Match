import axios from "axios";

const key = "AIzaSyAiq3dHzxX2onSK1TlFhrZD2DPbFKqZ2M4";

export default {
    getRandomCharity: function(){
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&sort=RATING%3AASC");
    },
    getCharityMatch: function(charityMatch){
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&search=" + charityMatch);
    },
    getGeocode: function(address,city,state){
        return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+","+city+","+state+"&key="+key);
    }
};