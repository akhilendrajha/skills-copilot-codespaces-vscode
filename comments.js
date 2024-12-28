// Create web server
// 1. Create a new file named comments.js
// 2. Create a web server that's listening on port 3000
// 3. Handle the following URL with the given response:
//    - /comments: Return a list of comments
//    - /comment: Return a single comment
// 4. Start the server and verify that it's working using Postman

const http = require('http');

const comments = [
  { id: 1, username: 'alice', content: 'I love cupcakes!' },
  { id: 2, username: 'bob', content: 'Where can I get a cupcake?' },
  { id: 3, username: 'carol', content: 'I like cupcakes too!' },
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else if (req.url === '/comment') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments[0]));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});