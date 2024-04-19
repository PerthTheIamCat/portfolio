import { useState } from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Aboutpage from './Aboutpage'
import Home from './Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
      </Routes>
    </>
  )
}

export default App
