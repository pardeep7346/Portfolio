import React,{useRef,useEffect} from 'react'
import gsap from "gsap";


const SideBar = ({handleClick}) => {
    const btnRef = useRef()
    useEffect(() => {
     gsap.fromTo(btnRef.current,{y:-50,opacity:0},{y:0,opacity:1,duration:0.5})
    }, [])
    

  return (
    <div className='h-screen bg-amber-500 w-1/4 fixed top-0 right-0 z-10 '>
             <div className='flex justify-end p-2'>
             <img ref={btnRef} src="close.svg" alt="" onClick={handleClick} className='h-10' />
             </div>

    
    </div>
  )
}

export default SideBar
