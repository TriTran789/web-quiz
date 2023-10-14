import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu, Close } from '../assets/index'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='hidden sm:block mt-[40px] px-[10%]'>
          <div className='h-[60px] relative'>
              <div className='absolute w-full h-full top-2 left-2 bg-black rounded-full' />
              <div className='border-2 border-black absolute w-full h-full rounded-full z-10 bg-white flex justify-around items-center px-12'>
                <Link to='/'>TRANG CHỦ</Link>
                <a className='hover:cursor-pointer'>GIỚI THIỆU</a>
                <div className='hover:cursor-pointer'>ĐĂNG NHẬP</div>
              </div>
          </div>
      </div>

      <div className='sm:hidden flex justify-between items-center'>
        <img src={Header} className='w-full' />
        <div>
          <div className='mx-2 relative'>
            <img 
            src={toggle ? Close : Menu}
            onClick={() => setToggle((prev) => !prev)}
            className='w-16'
            />
            <div className={`${toggle ? 'flex' : 'hidden'} absolute flex-col w-24 right-0 z-10 justify-center items-center mt-4`}>
              <div>TRANG CHỦ</div>
              <div>GIỚI THIỆU</div>
              <div>ĐĂNG NHẬP</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

