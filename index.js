const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!!!!!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
