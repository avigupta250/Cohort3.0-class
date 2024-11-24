import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from './counterSlice';


function Increase(){

    const dispatch = useDispatch();
    return (
   <div>
<button onClick={()=>dispatch(increment())}>Increse</button>
   </div>
    )
}

function Decrease(){

    const dispatch = useDispatch();
    return (
   <div>
<button onClick={()=>dispatch(decrement())}>Increse</button>
   </div>
    )
}

function ShowCount(){
    const count = useSelector((state) => state.counter.value);

    return (
        <div>{count}</div>
    )

}
const CounterApp = () => {
  const count = useSelector((state) => state.counter.value);
  

  return (
    <div >
      <h1>Counter App</h1>
     <ShowCount/>
     <Increase/>
     <Decrease/>
    </div>
  );
};

export default CounterApp;
