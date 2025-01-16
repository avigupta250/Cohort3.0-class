import { WebSocketServer } from "ws";

const wss =new WebSocketServer({port:8000})

wss.on("connection",(socket)=>{
    socket.on('message',(data)=>{
        console.log('recieved data',data);
        socket.send("hii")
    });

    
})