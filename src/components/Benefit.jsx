import React from "react";
import { ContentHeader, ContentFrame } from "../assets/index";
import { contentBenefit } from "../constants";

const Benefit = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="md:w-[70%] w-[90%]">
        <div className="relative">
          <img src={ContentHeader} className="w-full" />
          <p className="absolute uppercase text-white md:text-4xl font-semibold md:top-11 md:left-14 top-1 left-3">Lợi ích dành cho bạn</p>
        </div>
        <div className="flex flex-wrap">
          {contentBenefit.map((content, index) => (
            <div className="md:w-[50%] relative">
              <img src={ContentFrame} className="" />
              <div className="absolute w-full h-full flex top-0 justify-center items-center">
                <p className="md:text-xl text-sm w-[90%]">
                  <span className="font-bold">{ content.titile }</span>
                  { content.desc }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefit;
