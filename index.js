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

    //send event to client || message server to client
    setTimeout(function(){
        socket.send("hello guys how are you")
        socket.emit('customEvent',{data:"custom message from server side"})
    },2000)
    
    socket.on('disconnect',function(){
        console.log("A user Disconected")
    })

    //message from client
    socket.on('myCustom',function(data){
        console.log(data.data)
    })
});
http.listen("8080",()=>{
    console.log("http://localhost:8080 connected" )
})