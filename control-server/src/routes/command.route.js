const router = require("express").Router();

const CommandService = require("../services/command.service");
const commandService = new CommandService();

const { command } = require("../controllers/command.controller");

router.post("/", (req, res) => command(req, res, commandService));

module.exports = router;
