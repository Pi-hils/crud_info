const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

//ROUTES

//CREATE DETAILS

//GET DETAILS

//DELETE DETAILS

app.listen(3000, () => {
  console.log("Server has started on port 3000")
});