import React from 'react'
import VideoColumns from '../../components/home/LandingVideoColumns'
import { Box } from '@mui/material'
import HomeNavBar from '../../components/Navbar/HomeBar'
import HomebgFrame from '../../components/home/HomebgFrame'

export default function MainHome() {
  return (
<Box>
  <div className='p-6'>
    <HomeNavBar/>
  </div>
  <HomebgFrame/>
  <VideoColumns/>
</Box>
)
}
