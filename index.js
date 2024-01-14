const fs = require('fs');
const http = require('http');



//  server 
const server = http.createServer((req,res)=>{
    console.log(req.data)
    res.end("Hello from the server !");
   
})

server.listen(8000,'127.0.0.1', ()=>
{
    console.log("listing the port on 8000")
}
)