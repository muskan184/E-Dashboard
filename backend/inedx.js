const express = require("express");
const cors = require("cors");
require("./db/config");
const user = require("./db/users");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let User = new user(req.body);
  let result = await User.save();
  res.send(req.body);
});
app.listen(3000);
