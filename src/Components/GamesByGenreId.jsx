import React, { useEffect } from 'react'

const GamesByGenreId = ({gameListByGenre}) => {
 
  return (
    <div className="mt-6">
         <h2 className='text-[30px] font-bold dark:text-white '>Popular Games</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mt-3 '>
      {
        gameListByGenre.map((item,index)=>(
            <div key={index} className='pb-14 bg-[#76a8f75e] dark:bg-gray-700  p-4 rounded-lg h-full 
            hover:scale-110 transition-all duration-300 cursor-pointer' >
              <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover'/>
              <h2 className='text-[20px] lg:text-sm dark:text-white font-bold m-1 '>{item.name} <span className={`${item?.metacritic && 'p-1  bg-green-300 text-xs rounded-md'}`} >{item.metacritic}</span></h2> 
              <h2 className='text-gray-500 dark:text-white'>⭐{item.rating} 💬{item.reviews_count}  🔥{item.suggestions_count}</h2>
            </div>
        ))
      }
    </div>
    </div>
  )
}

export default GamesByGenreId
