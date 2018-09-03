const httpFunc = require('../http-functions');

const DICT = {
  a: '4',
  e: '3',
  l: '1',
  o: '0',
  s: '5',
  t: '7',
  ck: 'x',
  er: '0r',
  you: 'j00',
};

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html',
};

const { getHTML } = httpFunc;

function printLeet(html) {
  const arr = html.split('');
  const result = [];
  let word;
  for (let i = 0; i < arr.length; i++) {
    const nextThree = arr[i] + arr[i + 1] + arr[i + 2];
    const nextTwo = arr[i] + arr[i + 1];
    word = arr[i];
    if (nextThree === 'you') {
      word = DICT.you;
      i += 2;
    } else if (DICT[nextTwo] !== undefined) {
      word = DICT[nextTwo];
      i += 1;
    } else if (DICT[arr[i]] !== undefined) {
      word = DICT[arr[i]];
    }
    result.push(word);
  }
  console.log(result.join(''));
}

getHTML(requestOptions, printLeet);
