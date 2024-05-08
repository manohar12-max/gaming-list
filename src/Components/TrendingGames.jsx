import React from 'react'

const TrendingGames = ({allGameList}) => {
   
  return (
     <div className="mt-2">
        <h2 className='hidden md:flex text-[30px] dark:text-white font-bold'>Trending Games</h2>
    <div className=' hidden md:grid md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4'>
      {allGameList.map((item,index)=> index<4 &&(
        <div key={index} className='bg-[#76a8f75e] rounded-lg cursor-pointer
         hover:scale-110 transition-all duration-300 ease-in-out'>
            <img src={item.background_image} alt="" className='h-[270px] rounded-t-lg object-cover'/>
            <h2 className='dark:text-white font-bold p-2'>{item.name}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TrendingGames
