const express = require("express");
const app = express();
const PORT = 3000;
module.exports = employee
const { employee } = require("./prisma/");

app.get ("/", (req, res) => {
  res.send("This is the Employee List API.")
})


app.get ("/employees", (req, res) => {
  res.send(employees);
});

app.listen (PORT, () => {
  console.log(`Listening on port ${PORT}`)
})