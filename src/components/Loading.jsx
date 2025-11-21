import React from 'react'
import loader from '../../public/loader.gif'
function Loading() {
  return (
    <div className='w-full h-full text-5xl text-white bg-black'>
      <center>
      <img src={loader} className='h-[50vh] w-[50vh] mt-[8%]' alt="" />
      <p>Loading ...</p>
      </center>
    </div>
  )
}

export default Loading