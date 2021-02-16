const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());  //req.body

//ROUTES

//CREATE INFO
app.post("/info", async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const newInfo = await pool.query(
      "INSERT INTO info (name, email) VALUES($1, $2) RETURNING *",
       [name, email]
    );
    res.json(newInfo,row[0])
  } catch (err) {
    console.error(err.message);
  }
})


//GET ALL INFO
app.get("/info/:id", async(req,res) => {
  try {
    const allInfo = await pool.query("SELECT * FROM info");
    res.json(allInfo.rows)
  } catch (error) {
    console.error(err.message)
  }
})

// GET AN INNFO
app.get("/todos/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM info WHERE info_id = $1",[id])
    res.json(info.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

//DELETE INFO
app.delete("/info/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const deleteInfo = await pool.query("DELETE FROM info WHERE info_id = $1", [id]
    );
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(3001, () => {
  console.log("Server has started on port 3000")
});