const httpFunc = require('../http-functions');

const { getHTML } = httpFunc;

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html',
};

function printLower(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLower);
