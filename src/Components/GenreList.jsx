import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const GenreList = ({genreId}) => {
    const [genre,setGenre]=useState([])
    const [activeIndex,setActiveIndex]=useState(0)
    const getGenresList=()=>{
      GlobalApi.getGenresList.then(res=> setGenre(res.data.results) )
  }
    useEffect(()=>{
        
        getGenresList()
    },[])
    
  return (
    <div className=''>
     <h2 className='text-[30px] font-bold dark:text-white '>Genres</h2>
     {
      genre.map((item,index)=>(
        <div key={index} className={`flex gap-2 items-center mb-2 cursor-pointer
        hover:bg-gray-300 p-2 rounded-lg group
        hover:dark:bg-gray-600
        ${activeIndex==index && "bg-gray-300 dark:bg-gray-600 font-bold scale-105 "}
         `}
         onClick={()=>{setActiveIndex(index);genreId(item.id)}}>
          <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-in-out duration-300' alt="" />
          <h3 className='dark:text-white group-hover:font-bold group-hover:scale-105 transition-all transition-smooth ease-in-out duration-300'>{item.name}</h3>
        </div>
      ))
     }
    </div>
  )
}

export default GenreList
