const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' })
  //       res.end(content);
  //     })
  // }

  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { 'Content-Type': 'text/html' })
  //       res.end(content);
  //     })
  // }

  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Victor GB', age: 38 },
  //     { name: 'Tyler Durden', age: 40 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = 'text/html';

  // Check ext and set conten type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'text/json';
      break;
    case '.png':
      contentType = 'text/png';
      break;
    case '.jpg':
      contentType = 'text/jpg';
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));