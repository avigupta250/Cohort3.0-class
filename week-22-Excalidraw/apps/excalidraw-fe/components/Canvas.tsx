import { InitDraw } from "@/draw";
import { useEffect, useRef } from "react";

export function Canvas({
    roomId,
    socket
}:{
    roomId:string,
    socket:WebSocket
}){
      const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {

            InitDraw(canvasRef.current, roomId,socket)
        }
    }, [canvasRef])
    return <div>
         <canvas width={"1000px"} height={"1000"} ref={canvasRef}></canvas>
        {/* <div className="fixed w-[100vw]    flex gap-2 justify-center items-center top-4 ">
            <button className="bg-gray-600 p-1 px-3 rounded-md">Rect</button>
            <button className="bg-gray-600 p-1 px-3 rounded-md">Circle</button>
        </div> */}
    </div>
}