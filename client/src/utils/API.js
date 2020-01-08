import axios from "axios";

export default {
    getRandomCharity: function(){
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&sort=RATING%3AASC");
    },
    getCharityMatch: function(charityMatch){
        return axios.get("https://api.data.charitynavigator.org/v2/Organizations?app_id=46fc4448&app_key=48a6c5df025084b4eaeff36b628adb6e&search=" + charityMatch);
    }
};

