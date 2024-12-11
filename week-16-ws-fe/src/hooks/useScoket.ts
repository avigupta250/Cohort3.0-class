import { useEffect, useState } from "react";




export function useSocket({url}:any){

    const [socket,setSocket]=useState<WebSocket|null>(null);
    const [messages, setMessage] = useState<string[]>(["hii"])

console.log(url)
    useEffect(()=>{
        const ws=new WebSocket(url);
        setSocket(ws);

        ws.onmessage = (ev) => {
                console.log('Message received:', ev.data);
              }

        return ()=>{

            socket?.close();
            console.log("Unmmounting ")
        }
    },[])

    const send=(data:any)=>{
        socket?.send(data);
        setMessage(data);
    }


    return {socket,send,messages}
}