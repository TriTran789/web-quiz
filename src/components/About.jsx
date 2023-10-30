import React from "react";
import { ContentHeader, AboutFrame, Logo } from "../assets";
import { nameMembers } from "../constants";

const About = () => {
  return (
    <div id="about" className="flex justify-center items-center mt-16 mb-16">
      <div className="md:w-[70%] w-[90%]">
        <div className="relative">
          <img src={ContentHeader} className="w-full" />
          <p className="absolute text-white md:text-5xl font-semibold md:top-11 md:left-16 top-1 left-3">
            Về SOS team
          </p>
        </div>
        <div className="relative">
          <img src={AboutFrame} />
          <div className="absolute h-full w-full top-0 md:text-xl text-[40%]">
            <p className="font-semibold ml-[5%] mt-[2%]">
              Chúng tôi những chàng trai của Học viện Kỹ thuật Mật Mã, chúng tôi
              là:
            </p>
            <div className="flex justify-between">
              <ul className="ml-[7%]">
                {nameMembers.map((nameMember, index) => (
                  <li key={nameMember.id}>{nameMember.name}</li>
                ))}
              </ul>
              <img src={Logo} className="w-[40%] mr-[10%] mb-[20%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
