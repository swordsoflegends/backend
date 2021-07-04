var express = require("express");

var router = new express.Router();

router.use("/time", require("./time/time.router"));

module.exports = router;
