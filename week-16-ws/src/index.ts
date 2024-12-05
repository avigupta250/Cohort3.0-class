// console.log("hii")
import { WebSocketServer,WebSocket } from "ws"

// https://projects.100xdevs.com/tracks/ABEC/ABEC-3 
const wss=new WebSocketServer({port:8080});

// event Handler
interface User{
    socket:WebSocket,
    roomId:string
}
let allSocket:User[]=[];


wss.on("connection",function(socket){

    socket.on('message',(ev)=>{
    //  @ts-ignore
        const parseData=JSON.parse(ev);
        console.log(parseData)

        if(parseData.type==='join'){
            allSocket.push({socket:socket,roomId:parseData.payload.roomId})
        }

        if(parseData.type==='chat'){
            const currentUserRoom=allSocket.find((x)=>x.socket==socket)?.roomId

            for(let i=0;i<allSocket.length;i++){
               
                if(allSocket[i].roomId==currentUserRoom)
                {
                    allSocket[i].socket.send(parseData.payload.message)
                }
            }
        }

    })

    socket.send("hello ")
   
})