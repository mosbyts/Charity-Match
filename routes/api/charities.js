const router = require("express").Router();
const charityController = require("../../controllers/charityController");

// Matches with "/api/"
router.route("/")
  .get(charityController.findAll)
  .post(charityController.create);

module.exports = router;
