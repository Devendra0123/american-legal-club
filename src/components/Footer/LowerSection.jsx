import React from "react";
import { languageOptions } from "../../data/languageOptions";
import { siteInfo } from "../../data/siteInfo";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import {BsDot} from "react-icons/bs";

const LowerSection = () => {
  const { copyRightText } = siteInfo;
  return (
    <div className="w-[85%] flex items-center justify-between text-white px-[50px]">
      <select className="text-black rounded-lg p-[5px] text-[13px] outline-none">
        {languageOptions?.length > 0 &&
          languageOptions.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
      </select>

      <div className="flex items-center opacity-75">
        <p>{copyRightText}</p>
        <ul className="flex items-center gap-[20px] ml-[30px]">
          <li className="flex items-center"><BsDot /> Privacy</li>
          <li className="flex items-center"><BsDot />Terms</li>
          <li className="flex items-center"><BsDot />Sitemap</li>
        </ul>
      </div>

      <div className="flex items-center gap-[20px] text-2xl">
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </div>
    </div>
  );
};

export default LowerSection;
