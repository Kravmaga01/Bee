const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("method", req.method);
  console.log("url", req.url);
  if (req.url === "/users") {
    return res.end("Hola users");
  } else if (req.url === "/") {
    console.log("inicia lectura");
    fs.readFile("./index.html", (err, file) => {
      console.log(file.toString("utf8"));
      console.log(err);
      return res.end(file);
    });
  }
});

server.listen(3001, () => console.log("Server running on port 3000"));
