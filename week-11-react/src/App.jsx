import React, { useState } from 'react'

// import useDebounce from './CustomHooks/useDebounce';
import UsePrevHook from "./CustomHooks/usePrev"
import UseDebounce from './CustomHooks/useDebounce'
import { useEffect } from 'react'
import Counter from './Memo'

import CounterApp from './redux/CounterApp'



function App() {




  return (
    <>
  <Counter/>
 
 {/* <CounterApp/> */}
{/* <UseDebounce/> */}
    </>
  )
}

export default App
 