import React from 'react'
import { useEffect,useRef,useState } from 'react';

const usePrev = (value) => {
    const ref=useRef();


    useEffect(()=>{
        console.log('useEffect called')
        ref.current=value;
    },[value])

    console.log('returned prev value')
  return ref.current
}


function UsePrevHook(){
     
const [count,setCount]=useState(0);
const ref=usePrev(count);

  return (
    <>
 <p>count:{count}</p>
 <button onClick={()=>setCount(c=>c+1)}>increase</button>
 <p>Pre value was {ref}</p>
    </>
  )
}
export default UsePrevHook;