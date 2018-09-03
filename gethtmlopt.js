const https = require('https');

function getAndPrintHTML(requestOptions) {
  /* Add your code here */
  const buffer = [];
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

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html',
};

getAndPrintHTML(requestOptions);
