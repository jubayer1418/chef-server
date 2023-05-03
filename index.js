const express = require("express");
const app = express();
const port = 5000;
const chef = require("./data/chef.json");
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/chef", (req, res) => {
  res.send(chef);
  //   console.log(chef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
