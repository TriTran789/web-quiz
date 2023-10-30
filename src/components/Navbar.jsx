import React from "react";
import { Link } from "react-router-dom";
import { Header, Menu, Close } from "../assets/index";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false)

  const handleLoginClick = () => {
    setModalLogin(true);
    setToggle(false);
  };

  return (
    <>
      <div className="hidden sm:block mt-[40px] px-[10%]">
        <div className="h-[60px] relative">
          <div className="absolute w-full h-full top-2 left-2 bg-black rounded-full" />
          <div className="border-2 border-black absolute w-full h-full rounded-full z-10 bg-white flex justify-around items-center px-12">
            <Link to="/">TRANG CHỦ</Link>
            <a className="hover:cursor-pointer" href="#about">
              GIỚI THIỆU
            </a>
            <div
              className="hover:cursor-pointer"
              onClick={() => setModalLogin(true)}
            >
              ĐĂNG NHẬP
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden flex justify-between items-center">
        <img src={Header} className="w-full" />
        <img src={Menu} className="w-16 mx-2" onClick={() => setToggle(true)} />
        <div
          className={`fixed top-0 right-0 left-0 bottom-0 bg-white/50 z-20 ${
            toggle ? "block" : "hidden"
          }`}
        >
          <ul className="border-black border float-right text-2xl bg-white py-4">
            <div
              className="flex justify-end mb-2 mr-6"
              onClick={() => setToggle(false)}
            >
              <img src={Close} className="w-8" />
            </div>
            <Link
              to="/"
              className="block px-6 py-2 border-[#ccc] border"
              onClick={() => setToggle(false)}
            >
              TRANG CHỦ
            </Link>
            <li
              className="px-6 py-2 border-[#ccc] border hover:cursor-pointer"
              onClick={() => setToggle(false)}
            >
              <a href="#about">GIỚI THIỆU</a>
            </li>
            <li
              className="px-6 py-2 border-[#ccc] border hover:cursor-pointer"
              onClick={handleLoginClick}
            >
              ĐĂNG NHẬP
            </li>
          </ul>
        </div>
      </div>

      {/* Login Modal */}
      <div
        onClick={() => setModalLogin(false)}
        className={`${
          modalLogin ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-white/50 z-20`}
      >
        <div className="w-full h-full flex justify-center items-center">
          <div onClick={(event) => event.stopPropagation()} className="xl:w-[50%] lg:w-[55%] md:w-[70%] w-[80%] h-[50vh] bg-white border-2 border-[#0068FF] rounded-3xl flex flex-col items-center relative">
            <div className="absolute w-full h-full bg-black z-[-10] mt-2 rounded-3xl ml-4"></div>
            <div className="flex justify-center items-center font-bold my-6 text-2xl text-gradient">
              Đăng nhập
            </div>
            <div className="w-full">
              <div className="flex justify-center items-center leading-10 text-xl mt-3">
                <p className="w-[25%] max-md:hidden">Tên đăng nhập:</p>
                <input className="border rounded-md border-[#0068FF] w-[55%] max-md:w-[80%] px-4" placeholder="Tên đăng nhập" />
              </div>
              <div className="flex justify-center items-center leading-10 text-xl mt-3">
                <p className="w-[25%] max-md:hidden">Nhập mật khẩu:</p>
                <input className="border rounded-md border-[#0068FF] w-[55%] max-md:w-[80%] px-4" placeholder="Mật khẩu" type="password" />
              </div>
            </div>
            <button className="mt-8 bg-gradient-to-r from-[#0068FF] to-[#02C166] py-2 px-4 rounded-full text-white mb-8">Đăng nhập</button>
            <div className="flex w-full justify-between items-center px-4">
              <div>Đăng ký ngay</div>
              <div>Quên mật khẩu?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
