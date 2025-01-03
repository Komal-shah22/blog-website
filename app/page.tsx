'use client'
import Bloglist from '@/components/Bloglist/page'
import Header from '@/components/Header/page'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Sidebar from '@/components/Addmincomponents/Sidebar/page'


const Home = () => {
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Header />
      <Sidebar />
      <Bloglist />
    </div>
  )
}

export default Home