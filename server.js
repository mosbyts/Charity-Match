//Necessary dependencies---------------------------------------------------------
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const mysql = require('mysql');
// var db = require("./models/index.js");
// const multer = require("multer");
const cors = require("cors");
const router = require("./routes/api");

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

// //Allows user to upload images using Multer & CORS-------------------------------
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname)
//   }
// });

// const upload = multer({ storage })

app.use(cors());

// app.post('/upload', upload.single('image'), (req, res) =>{
//   if(req.file)
//     res.json({
//      imageUrl: `images/uploads/${req.file.filename}`
//     });
//    else
//      res.status("409").json("No Files to Upload."); 
// });
//Allows user to upload images using Multer & CORS-------------------------------

// Routes------------------------------------------------------------------------
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// app.get('/secure', authenticationRequired, (req, res) => {
//   res.json(req.jwt);
// });
const db = require("./config/keys").mongoURI;
// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds141937.mlab.com:41937/heroku_8m74wkcq");
if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));
}

mongoose.connect(
  db, {useNewUrlParser: true}
).then(()=> console.log("connected to mongodb"))
.catch(err => console.log(err));

app.use("/api", router);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
  