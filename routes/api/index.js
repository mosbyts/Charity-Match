const router = require("express").Router();
// const charityRoutes = require("./charities");
const userRoutes = require("./users")
// Charity routes
// router.use("/charities", charityRoutes);
router.use("/users", userRoutes);

module.exports = router;