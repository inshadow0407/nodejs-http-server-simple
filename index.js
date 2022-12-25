import  http, { request } from "http";
import fs from "fs"; 
let employees = fs.readFileSync("./employees.json", "utf-8", (err, data)=>data)
let server = http.createServer((request,response)=>{
    if(request.method=="GET"){
        response.writeHead(200, {"Content-Type": "application/json"})
        let data =JSON.parse(employees)
        response.write(JSON.stringify(data))
        response.end()
  
    }
})
server.listen(3000, ()=>{
    console.log("Server is running ...")
}) 

