import React from 'react'
import Navbar from '../../page/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
   <nav className='w-11/12 mx-auto py-2'>
    <Navbar></Navbar>
   </nav> 
    <main className='w-11/12 mx-auto mt-5'></main>
    <Outlet></Outlet>
    </div>
  )
}

export default HomeLayout
