const fs = require('fs');


//  this is blocking ,synchronous way
// const textIn=fs.readFileSync('sampleText.txt','utf-8');
// console.log(textIn)

// // const hello ="hello world"
// // console.log(hello)

// const textOut = `this is what you want to know about me ${textIn} \n Created on ${Date.now}`;
// fs.writeFileSync('output.txt', textOut);

// console.log("start")

// fs.readFile('output.txt','utf-8',(err,data)=>{
//     console.log("file created"+data+err)

// })

// console.log("finish")

// async and non blocking code
fs.writeFileSync("start.txt","demo code for async code practice")

fs.readFile("start.txt",'utf-8',(err,data1)=>{
    fs.readFile(data1,'utf-8',(err,data2)=>{
        console.log(data2)
    })
})

console.log("will read file")

