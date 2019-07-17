const express = require('express');
const router = express.Router();

const connections = require("./connections");
router.use("/connections", connections);

const profile = require("./profile");
router.use("/profile", profile);

module.exports = router;