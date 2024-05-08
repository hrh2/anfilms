import React from 'react'
import Requests from "../../components/Cards/Requests";
import Alert from '@mui/material/Alert';

export default function Request() {
  return (
      <div className="main-content-holder p-4">
            <Requests />
            <Alert severity="warning">This page is not optimized ,still under development</Alert>
      </div>
  )
}
