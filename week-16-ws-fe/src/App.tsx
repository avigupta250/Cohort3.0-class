import { useEffect, useRef, useState } from 'react'

import './App.css'
import { useSocket } from './hooks/useScoket';

function App() {


const inputRef=useRef();

// const [socket, setSocket] = useState<WebSocket | null>(null);

const {send,messages}=useSocket({
  url:'ws://localhost:8080',

})

  function sendMessage(){
    // @ts-ignore
  const message=inputRef.current.value;
  send(message);
      
  }

  return (
    <>
     <div>
      <div style={{display:"flex", padding:"2px", width:"300px",height:"300px" ,background:"black",color:"black"}}>
        {/* {messages?.map((m,index)=>(
          
          <div style={{background:"white",display:"flex",height:"20px",padding:"2px", margin:"10px",borderRadius:"2px"}} key={index}>{m}</div>
        ))} */}

      </div>
      <div>
      <input ref={inputRef} type='text' placeholder='Enter Your Message' />
      <button onClick={sendMessage}>Send</button>
      </div>
     </div>
    </>
  )
}

export default App
