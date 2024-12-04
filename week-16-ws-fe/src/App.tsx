import { useEffect, useRef, useState } from 'react'

import './App.css'
import { useSocket } from './hooks/useScoket';

function App() {


const inputRef=useRef();

// const [socket, setSocket] = useState<WebSocket | null>(null);

const {send}=useSocket({url:'ws://localhost:8080'})

  function sendMessage(){
    // @ts-ignore
  const message=inputRef.current.value;
  send(message);
      
  }

  // useEffect(()=>{
  //   const ws = new WebSocket("ws://localhost:8080");
  //   setSocket(ws);

  //   ws.onmessage = (ev) => {
  //     console.log('Message received:', ev.data);
  //   }
  // },[])

  return (
    <>
     <div>
     
      <input ref={inputRef} type='text' placeholder='Enter Your Message' />
      <button onClick={sendMessage}>Send</button>
     </div>
    </>
  )
}

export default App
