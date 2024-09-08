import {useState} from 'react'
import './App.css'

function App() {
const [color, setColor] = useState("olive")

  return (

      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button className='outline-none px-4 bg-red-700 py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("red")}>Red</button>
            <button className='outline-none px-4 bg-green-700 py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("green")}>green</button>
            <button className='outline-none px-4 bg-blue-700 py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("blue")}>blue</button>
            <button className='outline-none px-4 bg-black py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("black")}>black</button>
            <button className='outline-none px-4 bg-orange-500 py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("orange")}>orange</button>
            <button className='outline-none px-4 bg-yellow-400 py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("yellow")}>yellow</button>
            <button className='outline-none px-4 bg-pink-400 py-1 rounded-full text-white shodow-lg' onClick={()=>setColor("pink")}>pink</button>
          </div>
        </div>
      </div>
   
  )
}

export default App
