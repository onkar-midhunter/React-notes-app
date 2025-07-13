import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Archieve from './Pages/Archieve/Archieve'

import Bin from './Pages/Bin/BIn'
import { Navbar } from './Component/Navbar/Navbar'
import Sidebar from './Component/SideBar/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archieve/>}/>
      <Route path='/bin' element={<Bin/>} />
    </Routes>
   
  )
}

export default App
