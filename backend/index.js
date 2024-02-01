require("dotenv").config();
const { dbConnect } = require("./config/config");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
// const initdb = require("./config/initdb");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
dbConnect();
// initdb();


const message = require("./routes/message");
const category = require("./routes/category");



app.use("/api/message", message);
app.use("/api/category", category);


app.listen(process.env.PORT, () =>
  console.log(`Serve running on port ${process.env.PORT}`)
);
module.exports = app;