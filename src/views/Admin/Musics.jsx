import React from 'react'
import MusicRate from "../../components/Cards/MusicRate";
import Alert from '@mui/material/Alert';

export default function Musics() {
  return (
      <div className="main-content-holder md:p-6 p-4">
            <MusicRate />
            <Alert severity="warning">This page is not optimized ,still under development</Alert>
      </div>
  )
}
