import React from 'react'

export default function Logo1({styless,image}) {
  return (
    <div className={`${styless}`} >
        <img className=' w-full' src={image} alt="logo" />
     </div>
  )
}
