const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
// we used cors() inside express middleware to let browsers allow to different services that are running on different ports to communicate with each other
const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
//rtyetryetye
