const db = require("../models");
const connection = require("../server");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

// Load User model
const User = require("../models/user");

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        User.findOne({ email: req.body.email}).then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already exists" });
            } else {
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    userName: req.body.userName,
                    password: req.body.password,
                    preferences: req.body.preferences || {}
                });

                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                    });
                });
            } 
        })
        // User.create({
        //     firstName: req.body.firstName,
        //     lastName: req.body.lastName,
        //     email: req.body.email,
        //     userName: req.body.userName,
        //     password: req.body.password,
        //     preferences: req.body.preferences || {}
        // }).then(dbRes => {
        //     console.log("it worked")
        //     res.json(dbRes)
        // });
    },
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        // Find user by email
        User.findOne({ email }).then(user => {
            // Check if user exists
            if (!user) {
                return res.status(404).json({ emailnotfound: "Email not found" });
            }

            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                id: user.id,
                username: user.userName
                };

                // Sign token
                jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                    success: true,
                    token: "Bearer " + token,
                    preferences: user.preferences
                    });
                }
                );
            } else {
                return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
            }
            });
        });
    }  
}