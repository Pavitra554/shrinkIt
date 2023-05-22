import React from 'react'

import {SlLink} from 'react-icons/sl'

const Header = () => {
  return (
      <div className='flex flex-row justify-center items-center gap-2 '>
        <SlLink className='text-5xl  text-white'/>
        <div className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-tl from-[#3ddc84] via-[#00856b] to-[#0b695b]'>
        ShrinkIt
        </div>
    </div>
  )
}

export default Header

