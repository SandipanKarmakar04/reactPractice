import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let [counter, setCounter] = useState(0)

  // let counter=15;

  const increaseValue = ()=>{
    counter = counter + 1;
    setCounter(counter )
    console.log("clicked", counter);
  }

  const decreaseValue = ()=>{
    counter = counter - 1;
    setCounter(counter)
    console.log("clicked", counter);
  }

  return (
    <>
     <h1>Basic Counter with React JS</h1>
     <h2>Counter Value: {counter}</h2>
     
     <button onClick={decreaseValue}>Decrese Value</button> &nbsp;
     <button onClick={increaseValue}>Increase Value</button> 
     
     
    </>
  )
}

export default App
