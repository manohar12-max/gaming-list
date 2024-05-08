import React, { useEffect,useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from "../Components/Banner"
import TrendingGames from '../Components/TrendingGames'
import GamesByGenreId from '../Components/GamesByGenreId'
import { generatePath } from 'react-router-dom'
const Home = () => {

  const [allGameList,setAllGameList]=useState([])
  const [gameListByGenre,setGameListByGenre]=useState([])
  const getAllGameList=()=>{
    GlobalApi.getAllGameList.then(res=> setAllGameList(res.data.results) )
  }
  const getGameListByGenreId=(id) => { 
    console.log(id)
   GlobalApi.getGameListByGenreId(id).then(res=> setGameListByGenre(res.data.results) )
  }
  useEffect(() =>{
    getAllGameList()
    getGameListByGenreId(4) //default

  },[])
  return (
    <div className='grid grid-cols-4 p-8 gap-4'>
      {console.log(gameListByGenre)}
      <div className="hidden md:block">
        <GenreList genreId={(genreId)=>getGameListByGenreId(genreId)} />
        </div>
      <div className="col-span-4  md:col-span-3 px-3">
   {allGameList?.length>0 && gameListByGenre?.length>0 &&   (
    <div>
     <Banner gameBanner={allGameList[0]}/>
     <TrendingGames allGameList={allGameList}/>
     <GamesByGenreId gameListByGenre={gameListByGenre}/>
     </div>
     )}
      </div>
   
    </div>
  )
}

export default Home
