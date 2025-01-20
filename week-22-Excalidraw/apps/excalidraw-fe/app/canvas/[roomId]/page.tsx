"use client"

import { InitDraw } from "@/draw";
import { useEffect, useRef } from "react"

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);


    useEffect(() => {
        if (canvasRef.current) {

            InitDraw(canvasRef.current)
        }
    }, [canvasRef])


    
    return <div className="">
        <canvas width={"1000px"} height={"1000"} ref={canvasRef}></canvas>
    </div>
}