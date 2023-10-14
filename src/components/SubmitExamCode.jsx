import React from "react";
import { InputCodeExam } from "../assets/index";

const SubmitExamCode = () => {
  return (
    <div className="flex justify-center items-center md:mt-16 mt-12">
      <div className={`h-auto md:w-[50%] w-[85%] relative flex items-center justify-between`}>
        <img src={InputCodeExam} className="absolute -z-10" />
        <input className="my-auto text-center h-full w-[60%] bg-transparent sm:text-2xl focus-visible:outline-none -translate-y-2 md:-translate-y-4" placeholder="Nhập mã đề thi" />
        <p className="uppercase font-semibold text-xl text-white w-[22%] text-center hover:cursor-pointer -translate-y-2 md:-translate-y-4">
          <span className="hidden sm:block">Thi ngay</span>
          <span className="block sm:hidden">Vào</span>
        </p>
      </div>
    </div>
  );
};

export default SubmitExamCode;
