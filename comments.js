// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const filePath = path.join(__dirname, parsedUrl.pathname);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('404 Not Found\n');
      res.end();
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
// Run the server
// Run the server using the following command:
// node comments.js
// Open your browser and navigate to http://localhost:3000 to see the output.