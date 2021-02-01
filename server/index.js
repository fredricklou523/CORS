const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../compiled"));

app.get("/getTime", function (req, res) {
  const origin = req.get("origin");

  res.status(200).send(Date());
});

let port = 1337;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
