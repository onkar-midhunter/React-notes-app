import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'


import Bin from './Pages/Bin/BIn'


import Archive from './Pages/Archieve/Archieve'
import Important from './Pages/Important/Important'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/bin' element={<Bin/>} />
      <Route path="/important" element={<Important/>}/>
    </Routes>
   
  )
}

export default App
