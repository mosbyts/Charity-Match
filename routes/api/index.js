const router = require("express").Router();
const charityRoutes = require("./charities");

// Charity routes
router.use("/charities", charityRoutes);

module.exports = router;