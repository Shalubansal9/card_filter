import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mainpage from './Components/Mainpage.js'
const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage/>}/>
        </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
