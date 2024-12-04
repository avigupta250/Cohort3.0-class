// console.log("hii")
import { WebSocketServer } from "ws"


const wss=new WebSocketServer({port:8080});

// event Handler
wss.on("connection",function(socket){

    setInterval(()=>{
        socket.send("Hii connected")
    },500)
   
    socket.on("message",(e)=>{
        console.log(e.toString())
    })

})