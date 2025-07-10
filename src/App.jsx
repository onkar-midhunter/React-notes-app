import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
