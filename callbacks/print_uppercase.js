const httpFunc = require('../http-functions');

const { getHTML } = httpFunc;

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html',
};

function printUpper(html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpper);
