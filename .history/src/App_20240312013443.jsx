import  { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import io from "socket.io-client";
const socket = io.connect("http://localhost:4000");
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
   
    <Outlet/>
   
    </div>
  )
}

export default App
