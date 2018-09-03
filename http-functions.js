const https = require('https');

function getHTML(options, callback) {
  /* Add your code here */
  const buffer = [];
  https.get(options, (res) => {
    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
      buffer.push(chunk);
      console.log('pushed chunk to buffer');
    });
    res.on('end', () => {
      console.log('stream ended');
      const full = buffer.join('');
      callback(full);
    });
  });
}

module.exports = {
  getHTML,
};
