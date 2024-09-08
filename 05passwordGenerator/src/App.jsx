import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [lenght,setLenght] = useState(8);
  const [numberAllowed,setNumber] = useState(false);
  const [charAllowed,setChar] = useState(false);
  const [password,setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()_+{}[]|:\"<>,.?/~`";
    for(let i=0;i<lenght;i++){
      pass+=str[Math.floor(Math.random()*str.length)];
      setPassword(pass);
    }
  },[lenght,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select();
     passwordRef.current?.setSelectionRange(0,101);
     window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[lenght,numberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' ref={passwordRef}/>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} className='cursor-pointer' onChange={(e)=>{setLenght(e.target.value)}}/>
        <label >Length: {lenght}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>setNumber((prev)=>!prev)}/>
        <label htmlfor="numberInput">Number</label>
        <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={()=>setChar((prev)=>!prev)}/>
        <label htmlfor="charInput">Characters</label>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
