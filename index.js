var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(8081, function () {
  console.log("Ung dung Node.js dang lang nghe tai dia chi:");
});
