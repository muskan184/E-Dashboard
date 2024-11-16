const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hey i am muskan");
});
app.listen(3000);
