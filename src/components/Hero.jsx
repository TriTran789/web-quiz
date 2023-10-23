import React from 'react'
import { HeroImg, Welcome } from '../assets/index'

const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='md:mt-20 mt-14 h-auto md:w-[60%] w-[90%] relative'>
        <img src={HeroImg} />
        <img src={Welcome} className='absolute top-[5%] left-[15%] h-auto w-[70%] z-0'/>
      </div>
    </div>
  )
}

export default Hero