import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  //let counter =0;
  const addvalue =()=>{
    counter++;
    setCounter(counter);
    console.log(counter);
  }
  const Subtractvalue=()=>{
    if(counter<=0)
      {
        setCounter(0);
        console.log(counter);
      }
      else{
        counter--;
        setCounter(counter);
        console.log(counter);
      }
   
  
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addvalue}>Add value</button>
    <br></br>
    <button onClick={Subtractvalue}>Subtract value</button>
    </>
  )
}

export default App
