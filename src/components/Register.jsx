import React from "react";
import { RegisterBtn } from "../assets";

const Register = () => {
  return (
    <>
      <div className="md:mt-16 mt-8 flex justify-end">
        <img
          src={RegisterBtn}
          className="md:h-24 h-16 mr-4 hover:cursor-pointer"
        />
      </div>
    </>
  );
};

export default Register;
