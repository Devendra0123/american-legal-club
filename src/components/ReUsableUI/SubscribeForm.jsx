import React from "react";
import { CiMail } from "react-icons/ci";

const SubscribeForm = () => {
  return (
    <div className="bg-white flex items-center overflow-hidden rounded-[25px]">
      <div className="flex items-center gap-[5px] px-[10px]">
        <CiMail className="text-slate-500 font-bold text-lg" />
        <input
          type="email"
          placeholder="input your email"
          className="bg-transparent"
        />
      </div>
      <button className="bg-primaryRed text-lg text-white py-[6px] px-[15px] rounded-r-[25px]">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeForm;
