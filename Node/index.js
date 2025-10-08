const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(`incomnig request for ${req.url}`);
  console.log(`request method is ${req.method}`);
  res.end("response bejh diya");
});

server.listen(8000, function () {
  console.log(`Server Started at 8000`);
});
