require("dotenv").config();

const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const server = http.createServer(app);
const port = 9669;
// const api_key = require("./config");

const users = require("./userSchema");
const router = require("./router");
const MONGODB_URI = "mongodb://localhost:27017/aadharmaker"
app.use(cors());
app.use(express.json());
app.use(router);

// Serving Build Files for Production

// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build", "index.html"));
// });

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    server.listen(port);
    console.log("Server Started!");
  })
  .catch((err) => {
    console.log(err);
  });
