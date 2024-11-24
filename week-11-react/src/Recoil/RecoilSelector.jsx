import { useSetRecoilState,useRecoilValue, RecoilRoot } from "recoil"
import { counterAtom, evenSelector } from "./store/atoms/counter"



function RecoilSelector(){


    return <>
    <RecoilRoot>
    <Buttons/>
    <Counter/>
    <IsEven/>
    </RecoilRoot>

    </>
}


function Buttons(){
const setCount=useSetRecoilState(counterAtom);

    function Increase(){
   setCount(c=>c+2)
    }

    function Decrease(){
setCount(c=>c-1)
    }

    return <>
    <button onClick={Increase}>Increase</button>
    <button onClick={Decrease}>Decresae</button>
    </>
}

function Counter(){

    const count=useRecoilValue(counterAtom)
    return <div>
        {count}
    </div>
}

function IsEven(){
  const isEven=useRecoilValue(evenSelector)
    return <div>
        {
            isEven?"Even":"Odd"
        }
    </div>
}


export default RecoilSelector