import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'





import Archive from './Pages/Archieve/Archieve'
import Important from './Pages/Important/Important'
import { BinPage } from './Pages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/bin' element={<BinPage/>} />
      <Route path="/important" element={<Important/>}/>
    </Routes>
   
  )
}

export default App
