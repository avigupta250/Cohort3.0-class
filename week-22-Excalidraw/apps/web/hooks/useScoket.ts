import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";




export function useSocket(){
    const [loading,setLoading]=useState(true);
    const [socket,setSocket]=useState<WebSocket>();

    useEffect(()=>{
        const ws=new WebSocket(`${WS_URL}?token={eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4NDE0YzBiNC02MzBiLTRmMmEtOTM5MC0yZmJjYTVlZjhhN2UiLCJpYXQiOjE3MzcyODc0ODB9.655MRRpBP3hu_I08wMgbjkK5UfqU3hIoJNvTIZxi7Cw}`);
        ws.onopen=()=>{
            setLoading(false);
            setSocket(ws);
        }
    },[])

    return {
        socket,loading
    }
}