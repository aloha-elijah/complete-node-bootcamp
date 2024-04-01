const fs = require("fs");
const http = require("http");
const url = require("url");

//////////

// Blocking, synchorous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `hello world this is me: ${textIn}. \nCreate on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("compelete");

// Non-blocking, asynchorous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// console.log("will read this");

//Server

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log(pathName);
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the Overview");
  } else if (pathName === "/product") {
    res.end("this is the product");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
