import { motion } from 'framer-motion'
import React, { useState } from 'react'



const Navbar = () => {


  const [tab,setTab] = useState(1)
    
  const tabs = [{tab:1},{tab:2},{tab:3}]

  return (
    <ul className='flex text-[20px] list-none gap-6'>
      {tabs.map((selected) => {

       return( <li onClick={() => setTab(selected.tab)} className='relative w-[50px] flex justify-center hover:cursor-pointer'>
            <p className=''>{selected.tab}</p>
            {tab == selected.tab ? <motion.div className='bg-red-400 rounded-xl absolute w-[100%] h-[100%] bottom-0 z-[-1]' layoutId='bg'/>: null}
            </li>)
      })}
    </ul>
  )
}

export default Navbar