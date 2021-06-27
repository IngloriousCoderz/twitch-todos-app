const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello world!");
});

server.listen(3002, () => {
  console.log("Server listening on port 3002");
});
