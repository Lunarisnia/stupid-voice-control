const router = require("express").Router();

const basicRoute = require("./command.route");

router.use(basicRoute);

module.exports = router;
