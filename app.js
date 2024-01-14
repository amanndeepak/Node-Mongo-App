const fs = require('fs');

const textIn=fs.readFileSync('sampleText.txt','utf-8');
console.log(textIn)

// const hello ="hello world"
// console.log(hello)

const textOut = `this is what you want to know about me ${textIn} \n Created on ${Date.now}`;
fs.writeFileSync('output.txt', textOut);

console.log("start")

fs.readFile('output.txt','utf-8',(err,data)=>{
    console.log("file created"+data+err)

})

console.log("finish")