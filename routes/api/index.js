const router = require("express").Router();
// const charityRoutes = require("./charities");
const userRoutes = require("./users")
// const prefRoutes = require("./preferences")
// Charity routes
// router.use("/charities", charityRoutes);
router.use("/users", userRoutes);

module.exports = router;