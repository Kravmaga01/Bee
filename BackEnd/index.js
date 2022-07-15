const express = require("express");

const server = express();
server.get("/", (req, res, next) => {
  return res.send("Hola mundo beesooflabs");
});
server.listen(3003, () => console.log("server runnig on port 3000"));
