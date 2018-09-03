const httpFunc = require('../http-functions');

const { getHTML } = httpFunc;

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html',
};

function printReverse(html) {

  const arr = html.split('');
  const result = arr.reverse().join('');
  console.log(result);
}

getHTML(requestOptions, printReverse);
