import React from 'react'
import { useState,useRef,useEffect } from 'react'
import SideBar from './SideBar'
import gsap from 'gsap'

const Navbar = () => {
  const btnRef = useRef()
  useEffect(() => {
    gsap.fromTo(btnRef.current,{y:-100,opacity:0},{y:0,opacity:1,duration:1})
  }, [])
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
   <div className='flex justify-end items-center p-2 absolute top-0 right-0  w-full'>
    {open && <SideBar handleClick= {handleClick}/>}
      <img ref={btnRef} src="menu.svg" alt="" onClick={handleClick} className='h-10 ' />
   </div>
  )
}

export default Navbar
