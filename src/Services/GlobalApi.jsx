import axios from "axios"
const key ="0106b7a289a5492dab5c8916bf605f6b"
const axiosCreate=axios.create({
    baseURL:"https://api.rawg.io/api"
})
const getGenresList=axiosCreate.get('/genres?key='+key)
const getAllGameList=axiosCreate.get('/games?key='+key)
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default {getGenresList,getAllGameList,getGameListByGenreId}