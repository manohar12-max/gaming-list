import React, { useContext, useEffect } from 'react'
import logo from "../assets/logo.png"
import { HiMoon,HiSun, HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Header = () => {
    const [mode,setMode]=useState(true)
    const {theme,setTheme}=useContext(ThemeContext)
    useEffect(()=>{
    
    },[theme,setTheme])
  return (
    <div className='flex items-center px-3'>
      <img src={logo} width={60} height={60}/>
      <div className='flex bg-slate-200 p-2 w-full items-center rounded-full mx-5'>
        <HiOutlineMagnifyingGlass/>
        <input className='bg-transparent outline-none ' type="text" placeholder='Search Games'/>
      </div>
      <div className="">
        {
            theme=="dark"?
            <HiSun className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>{setTheme("light");localStorage.setItem("theme","light") }}/>
            :
            <HiMoon className='text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>{setTheme("dark");localStorage.setItem("theme","dark")}}/>
        }
      </div>
    </div>
  )
}

export default Header
