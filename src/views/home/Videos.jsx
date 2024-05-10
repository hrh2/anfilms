import React from 'react'
import VideoColumns from '../../components/home/VideoColumns'
import {useParams} from 'react-router-dom'
export default function Videos() {
    const { videoType} =useParams()
  return (
    <div className="main-content-holder !p-4">
        <VideoColumns type={videoType}/>
    </div>
  )
}
