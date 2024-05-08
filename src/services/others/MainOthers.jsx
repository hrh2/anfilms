import React from 'react'
import { Outlet } from 'react-router-dom'
import OthersBar from '../../components/Navbar/OthersBar'
import Footer from '../../components/Footer/HomeFooter'
import bgImage from "../../assets/bg.png"

export default function Main() {
  return (
    <div className='bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
      <OthersBar/>
      <div className='md:py-6 p-4' >
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
