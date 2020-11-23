'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts STRING s as parameter.
 */

let arr1 = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const getCalculator = (index) => {
  const rest = arr1.indexOf(index) % 26;
  if (rest > 13) {
    return 26 - rest; // 첫번째 거리
  } else {
    return rest; // 첫번째 거리
  }
};

function getTime(s) {
  // Write your code here
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentIdx = arr1.indexOf(s[i]);
    result += getCalculator(s[i]);

    const slicedStart = arr1.slice(currentIdx);
    const slicedEnd = arr1.slice(0, currentIdx);
    arr1 = slicedStart.concat(slicedEnd);

    console.log('result :: ', result);
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = getTime(s);

  ws.write(result + '\n');

  ws.end();
}
