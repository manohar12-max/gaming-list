import React, { useEffect } from 'react'

const Banner = ({gameBanner}) => {
   
  return (
    <div className='relative'>
        <div className=" w-full absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent ">
            <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
            <button className='bg-blue-700 text-white rounded-lg'>Get Now</button>
        </div>
    <img className='md:h-[320px] w-full object-cover rounded-xl' src={gameBanner.background_image} alt={gameBanner.name} />
    </div>
  )
}

export default Banner
