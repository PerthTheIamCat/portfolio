import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="bg-green-500">count = {count}</h1>
        <button className='bg-gray-500 rounded-md m-5 p-2 hover:bg-black hover:text-white transition-all duration-150 active:bg-green-500' onClick={() => {setCount(count+1)}} >count++</button>
      </div>
    </>
  )
}

export default App
