import { useState,memo } from "react";
function Counter(){
    const [count,setCount]=useState(0);


    return <div>
        <CurrentCounter count={count}/>
        <Increase setCount={setCount}/><br/>
        <Decrease setCount={setCount}/>
    </div>
}


function CurrentCounter({count}){
 


    return <div>
    {count}
    
    </div>
}


const Increase=memo(function({setCount}){
    return <>

    <button onClick={()=>setCount(c=>c+1)}>Increse</button>
    </>
})
function Decrease({setCount}){
    return <>

    <button onClick={()=>setCount(c=>c-1)}>Decrese</button>
    </>
}
/**
 * here you will see that when state updates all the child component will re-render but when we wrap the 
 * the function in memo then the function who is not subscribed to that props will re-render
 */

export default Counter