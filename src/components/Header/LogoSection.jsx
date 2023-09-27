import React from "react";
import { Logo } from "../../assets";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { siteInfo } from "../../data/siteInfo";

const LogoSection = () => {
  const { address, contact } = siteInfo;
  return (
    <div className="px-[50px] py-[20px] w-full flex items-center justify-between">
      <div>
        <img src={Logo} alt="logo" className="w-[150px] object-contain" />
      </div>

      <div className="flex items-start gap-[50px] mr-[100px]">
        <div className="flex flex-col items-center gap-[10px] max-w-[150px]">
          <MdLocationOn className="text-primaryRed text-[30px]" />
          <p>Address: {address?.address1}</p>
        </div>

        <div className="flex flex-col items-center gap-[10px] max-w-[120px]">
          <BiSolidPhoneCall className="text-primaryBlue text-[30px]" />
          <p>{contact?.constact1}</p>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
