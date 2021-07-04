var { Router } = require("express");
var router = new Router();
var moment = require("moment");

var releaseDate = moment(process.env.RELEASE_DATE, "DD/MM/YYYY HH:mm").unix();

router.get("/release", (req, res) => {
  res.json({
    date: releaseDate,
  });
});

module.exports = router;
