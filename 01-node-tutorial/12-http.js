const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short  history ')
  } else {
    res.end(`
      <h1>Ooops !</h1>
      <p>We cant seem to find the page you looking for</p>
      <a href="/">back home</a>
    `)
  }

})

server.listen(5000, () => {
  console.log("Server is listening on port 5000")
})

/// WITH ERROR HANDLING

// const http = require('http');

// const server = http.createServer((req, res) => {
//   try {
//     if (req.url === '/') {
//       res.end('Welcome to our home page');
//     } else if (req.url === '/about') {
//       res.end('Here is our short history');
//     } else {
//       res.writeHead(404, { 'Content-Type': 'text/html' });
//       res.end(`
//         <h1>Oops!</h1>
//         <p>We can't seem to find the page you're looking for.</p>
//         <a href="/">Back home</a>
//       `);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error');
//   }
// });

// server.listen(5000, () => {
//   console.log('Server listening on port 5000');
// });