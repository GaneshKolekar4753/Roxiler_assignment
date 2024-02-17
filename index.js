import express from 'express'

//define port
const port=4100;
// Create Server
const server = express();
//  Default request handler
server.get("/",(req, res)=>{
res.send('Welcome to E-commerce APIs');
})
// Specify port
server.listen(3200,(err)=>{
    if(err){
        console.log("Server Error",err)
    }
    console.log(`server is up on port ${port}`)
});