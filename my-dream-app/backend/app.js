const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log("Mongo DB Connected"))
  .catch(err => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 5000;
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = require("socket.io").listen(SOCKET_PORT);

io.on("connection", socket => {
  console.log("user connected");
  socket.on("new-message", message => {
    io.emit("emit-message", message);
  });
});
