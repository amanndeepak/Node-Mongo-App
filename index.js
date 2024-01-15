const fs = require('fs');
const http = require('http');
const url = require('url')
//  server 
const server = http.createServer((req,res)=>{
    console.log(req.url)
 const pathName = req.url

    if(pathName == '/overview'){
        res.end("THIS IS OVERVIEW")
    }else if(pathName == '/product'){
        res.end("THIS IS PRODUCTS")
    }else if(pathName == '/mydata'){
        fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8', (err,data)=>{
            const myselfData = JSON.parse(data);
            res.writeHead(200 , {'content-type':'application/json'})
            res.end(data)
        })
       // res.end("API")
    }
    else {
        res.writeHead(404 , { 'Content-type': 'text/html' , 'my-own-header' :'hello world'});
        res.end('<h1>Page not Found ! </h1>');
    }
// res.end("Hello from the server !");
})

server.listen(8000,'127.0.0.1', ()=>
{
    console.log("listing the port on 8000")
}
)
