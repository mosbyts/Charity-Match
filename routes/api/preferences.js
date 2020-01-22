const express = require("express");
const router = express.Router();
// const axios = require('axios');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const prefController = require('../../controllers/prefController');

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// // Load User model
// const User = require("../../models/user");

router.route("/preferences")
  .post(usersController.create)

module.exports = router;
