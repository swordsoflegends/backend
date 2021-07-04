require("dotenv").config();
const isDev = (process.env.NODE_ENV || "dev") == "dev";
var express = require("express");
var cors = require("cors");

var app = express();
app.use(
  cors({
    origin: isDev ? "*" : ["https://swordsoflegends.eu"],
  })
);
app.use(require("./routes"));

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
