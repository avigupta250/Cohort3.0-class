"use client"

import { WS_URL } from "@/config";
import { InitDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({ roomId }: { roomId: string }) {
  
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NDE0YzBiNC02MzBiLTRmMmEtOTM5MC0yZmJjYTVlZjhhN2UiLCJpYXQiOjE3Mzc4MTM5NjZ9.jfWnDKdy6zKAY7-jBEn7HUnmiI7JmZ8yViHLhwuEsS8`)
        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type:"join_room",
                roomId
            }))
        }
    }, [])
  

    if (!socket) {
        return <div>
            Connecting to server.....
        </div>
    }



    return <div className="">
       <Canvas roomId={roomId} socket={socket}/>
    </div>
}