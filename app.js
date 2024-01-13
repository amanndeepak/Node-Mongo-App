const fs = require('fs');

const textIn=fs.readFileSync('sampleText.txt','utf-8');
console.log(textIn)

// const hello ="hello world"
// console.log(hello)

const textOut = `this is what you want to know about me ${textIn} \n Created on ${Date.now}`;
fs.writeFileSync('textOut.txt', textOut);