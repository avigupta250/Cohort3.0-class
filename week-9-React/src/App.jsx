import { useEffect, useState } from 'react'

import './App.css'






export default function App(){



  return (
    <div>
      {/* <Counter/>
       */}
       
    </div>
  )
}


function Counter(){
  const [count,setCount]=useState(0);



  useEffect(()=>{

    console.log("Mount");


    return ()=>{
      console.log("Inside the unmount")
    }

  },[count])


  return (
    <div>
      {count}
     <button onClick={()=>setCount(count+1)}></button>
    </div>
  )
}

// export default function App(){
//   // const [count, setCount] = useState(0)
  

//   const [visible,setVisible]=useState(true);

//   useEffect(()=>{
//     setInterval(()=>{
//       setVisible(visible=>!visible)
//   },5000)
//   },[])
 


//   console.log('Counter ')
 
//   return (
//     <>
//     { visible&& <Counter/>}
//     </>
//   )
// }

// function Counter(){
//   const [count,setCount]=useState(0);
   
//   useEffect(()=>{
//     console.log("Mounting")
//   const clock=  setInterval(()=>{
//          setCount(count=>count+1)
//     },1000)
    

//     return ()=>{
//       console.log("Unmounting")
//       clearInterval(clock)
//     }
//   },[])


//   return (
//     <div>
//       {count}
//     </div>
//   )

// }
