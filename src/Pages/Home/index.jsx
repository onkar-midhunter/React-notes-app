import React, { Fragment } from 'react'
import { Navbar } from '../../Component/Navbar/Navbar'
import Sidebar from '../../Component/SideBar/Sidebar'

function Home() {
  return (
    <Fragment >
      <Navbar/>
      <main className='pl-48 pt-16 flex gap-3 '>
        <Sidebar/>
        <div className='flex flex-col w-[300px] '>
          <input className='bg-white border' placeholder='Enter Title'/>
          <textarea className='bg-white border' placeholder='Enter Text'/>
        </div>
      </main>
    </Fragment>
  )
}

export default Home