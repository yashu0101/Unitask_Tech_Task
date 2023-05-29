const mongoose = require("mongoose");

//!   Establishing connection
const url = "mongodb+srv://Taskuni:yash123@cluster0.nk4l0cp.mongodb.net/";
//creating a default connection to mongodb
mongoose.connect(url, (err) => {
  if (err) console.log("could not connected to db ", err);
  else console.log("connected to Unitask Technologies db");
});

const conn = mongoose.connection;

conn.on("disconnected", () => {
  console.log("disconnected from Unitask Technologies  db");
});

conn.on("error", (err) => {
  console.log("could not connected to Unitask Technologies  db", err);
});
