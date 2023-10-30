import React from "react";
import { RegisterBtn } from "../assets";
import { useSelector, useDispatch } from "react-redux";
import { setState } from "../slice/registerSlice";

const Register = () => {
  const state = useSelector((state) => state.register.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="md:mt-16 mt-8 flex justify-end">
        <img
          src={RegisterBtn}
          className="md:h-24 h-16 mr-4 hover:cursor-pointer"
          onClick={() => dispatch(setState(true))}
        />
      </div>

      {/* Register modal */}
      <div
        className={`${
          state ? "block" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 bg-white/50 z-20 flex justify-center items-center`}
        onClick={() => dispatch(setState(false))}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="xl:w-[50%] lg:w-[55%] md:w-[70%] w-[80%] bg-white border-2 border-[#0068FF] rounded-3xl flex flex-col items-center relative"
        >
          <div className="absolute w-full h-full bg-black z-[-10] mt-2 rounded-3xl ml-4" />
          <div className="flex justify-center items-center font-bold my-6 text-2xl text-gradient">
            Đăng ký
          </div>
          <div className="w-full">
            <div className="flex justify-center items-center leading-10 text-xl mt-3">
              <p className="w-[25%] max-md:hidden">Tên đăng nhập:</p>
              <input
                className="border rounded-md border-[#0068FF] w-[55%] max-md:w-[80%] px-4"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div className="flex justify-center items-center leading-10 text-xl mt-3">
              <p className="w-[25%] max-md:hidden">Địa chỉ mail:</p>
              <input
                className="border rounded-md border-[#0068FF] w-[55%] max-md:w-[80%] px-4"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="flex justify-center items-center leading-10 text-xl mt-3">
              <p className="w-[25%] max-md:hidden">Nhập mật khẩu:</p>
              <input
                className="border rounded-md border-[#0068FF] w-[55%] max-md:w-[80%] px-4"
                placeholder="Mật khẩu"
                type="password"
              />
            </div>
            <div className="flex justify-center items-center leading-10 text-xl mt-3">
              <p className="w-[25%] max-md:hidden">Nhập lại mật khẩu:</p>
              <input
                className="border rounded-md border-[#0068FF] w-[55%] max-md:w-[80%] px-4"
                placeholder="Nhập lại Mật khẩu"
                type="password"
              />
            </div>
          </div>
          <button className="mt-8 bg-gradient-to-r from-[#0068FF] to-[#02C166] py-2 px-4 rounded-full text-white mb-8">Đăng ký</button>
        </div>
      </div>
    </>
  );
};

export default Register;
