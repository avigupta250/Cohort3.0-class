// console.log("hii")
import { WebSocketServer } from "ws"


const wss=new WebSocketServer({port:8080});

// event Handler
wss.on("connection",function(socket){

    socket.send("hello ")
   
    socket.on("message",(e)=>{
        console.log(e.toString())
    })

})