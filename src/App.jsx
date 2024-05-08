import Header from "./Components/Header"
import Home from "./pages/Home"
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import { useEffect, useState, } from "react"
import { ThemeContext } from "./Context/ThemeContext.jsx"
import "./App.css"
function App() {
  const [theme,setTheme] = useState('dark')
  useEffect(()=>{
    setTheme(localStorage.getItem("theme") ?localStorage.getItem("theme"):"dark" )
  })
  return(
    <ThemeContext.Provider value={{theme,setTheme}}>
    
    <BrowserRouter>
    <div className={`${theme} ${theme=='dark' && 'bg-[#121212]' }`}>
    <Header/>
    <Routes>
      <Route path="/"  element={<Home/>} />
    </Routes>
    </div>
    </BrowserRouter>
    </ThemeContext.Provider>
 )
}

export default App
