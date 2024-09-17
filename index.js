// console.log("jai siya ram")
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const path = require('path')
app.get('/',function(req, res){
    const options={
        root:path.join(__dirname),
    }
    const  fileName='index.html'
    res.sendFile(fileName,options)
})
//use socket
io.on('connection',function(socket){
    console.log('A User Connected')
    socket.on('disconnect',function(){
        console.log("A user Disconected")
    })
});
http.listen("8080",()=>{
    console.log("http://localhost:8080 connected" )
})