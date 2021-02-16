const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());  //req.body

//ROUTES

//CREATE DETAILS
app.post("/info", async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const newInfo = await pool.query(
      "INSERT INTO info(name, email) VALUES($1, $2) RETURNING *",
      [req.body.name, req.body.email]
    );
    res.json(newInfo)
  } catch (err) {
    console.error(err.message);
  }
})


//GET DETAILS

//DELETE DETAILS

app.listen(3001, () => {
  console.log("Server has started on port 3000")
});