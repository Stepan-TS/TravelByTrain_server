import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.end('Hello world!');
})

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})