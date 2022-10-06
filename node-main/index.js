const express = require("express");
const apiRouter = require('./routes/apiRouter')
const authRouter = require('./routes/authRouter')
const mysql = require("mysql2");
const db = require('./db');

const PORT = process.env.port || 5000
const app = express();

app.use(express.json())
app.use('/auth', authRouter)
app.use('/api', apiRouter)

app.get("/", (req, res) => {
  db.query("SELECT * FROM users", function (err, results) {
    if (err) console.log(err);
    console.log(results);
  });
});

app.listen(PORT, () => console.log(`Server started on PORT : ${PORT}`)

);