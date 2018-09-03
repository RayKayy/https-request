const https = require('https');

function getAndPrintHTMLChunks() {
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html',
  };

  /* Add your code here */
  https.get(requestOptions, (response) => {
    response.setEncoding('utf-8');

    response.on('data', (data) => {
      console.log(`Chunk data: ${data}`);
    });
    response.on('end', () => {
      console.log('Stream completed');
    });
  });
}

getAndPrintHTMLChunks();

module.exports = {
  getAndPrintHTMLChunks,
};
