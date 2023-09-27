import React from "react";
import { siteInfo } from "../../data/siteInfo";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter
} from "react-icons/ai";

const FollowSection = () => {
  const { emailId } = siteInfo;
  return (
    <div className="text-white bg-primaryBlue w-full px-[50px] py-[10px] flex items-center justify-between">
      {/* web page url */}
      <div>
        <a href={`mailto:${emailId}`}>{emailId}</a>
      </div>
      {/* Social Media Link */}
      <div className="flex items-center gap-[20px] text-2xl">
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </div>
    </div>
  );
};

export default FollowSection;
