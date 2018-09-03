const https = require('https');

function getAndPrintHTML() {
  const buffer = [];

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html',
  };

  /* Add your code here */
  https.get(requestOptions, (res) => {
    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
      buffer.push(chunk);
      console.log('pushed chunk to buffer');
    });
    res.on('end', () => {
      console.log('stream ended');
      console.log(buffer.join(''));
    });
  });
}

getAndPrintHTML();
