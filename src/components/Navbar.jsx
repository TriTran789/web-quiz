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
        <img 
          src={Menu} 
          className='w-16 mx-2' 
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`absolute top-0 right-0 left-0 bottom-0 bg-white/50 z-20 ${toggle ? 'block' : 'hidden'}`}>
          <ul className='border-black border float-right text-2xl bg-white py-4'>
            <div 
              className='flex justify-end mb-2 mr-6'
              onClick={() => setToggle((prev) => !prev)}
            >
              <img src={Close} className='w-8' />
            </div>
            <Link to='/' className='block px-6 py-2 border-[#ccc] border'>TRANG CHỦ</Link>
            <li className='px-6 py-2 border-[#ccc] border'>GIỚI THIỆU</li>
            <li className='px-6 py-2 border-[#ccc] border'>ĐĂNG NHẬP</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar

