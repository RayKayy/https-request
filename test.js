const httpFunc = require('./http-functions');

const { getHTML } = httpFunc;

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html',
};

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
