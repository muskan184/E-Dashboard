const express = require("express");
const cors = require("cors");
require("./db/config");
const user = require("./db/Users");
const app = express();

app.use(express.json());
app.use(cors());
app.post("/register", async (req, res) => {
  let User = new user(req.body);
  let result = await User.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let User = await user.findOne(req.body).select("-password");
    if (User) {
      res.send(User);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});
app.listen(5000);
