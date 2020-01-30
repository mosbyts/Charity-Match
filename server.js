//Necessary dependencies---------------------------------------------------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
// var db = require("./models/index.js");
const cors = require("cors");
const router = require("./routes/api");

app.use(cors());
//Necessary dependencies---------------------------------------------------------

// Bodyparser middleware---------------------------------------------------------
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// Bodyparser middleware---------------------------------------------------------

// Passport middleware and config------------------------------------------------
app.use(passport.initialize());
require("./config/passport")(passport);
// Passport middleware and config------------------------------------------------

// Serve Static Build file in Production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use(express.static(path.join(__dirname,"./client/build")));

app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

const db = require("./config/keys").mongoURI;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Charity_Match");
mongoose.connect(
  db, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false } 
).then(()=> console.log("connected to mongodb"))
.catch(err => console.log(err));

app.use("/api", router);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
