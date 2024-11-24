import React, { useState } from 'react'

// import useDebounce from './CustomHooks/useDebounce';
import UsePrevHook from "./CustomHooks/usePrev"
import UseDebounce from './CustomHooks/useDebounce'
import { useEffect } from 'react'
import Counter from './Memo'

import CounterApp from './redux/CounterApp'
import Recoil from './Recoil/recoil'
import RecoilSelector from './Recoil/RecoilSelector'



function App() {




  return (
    <>
    <RecoilSelector/>
    {/* <Recoil/> */}
  {/* <Counter/> */}
 
 {/* <CounterApp/> */}
{/* <UseDebounce/> */}
    </>
  )
}

export default App
 