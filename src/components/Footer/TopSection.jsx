import React from "react";
import { Logo } from "../../assets";
import SubscribeForm from "../ReUsableUI/SubscribeForm";
import { footerLinks } from "../../data/footerLinks";

const TopSection = () => {
  return (
    <div className="w-[90%] flex items-center text-white px-[40px]">
      <div>
        <img
          src={Logo}
          alt="logo"
          className="w-[170px] h-[170px] object-contain "
        />
      </div>

      <div className="grow flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-[10px]">
          <h1 className="text-xl font-bold">Subscribe to our newsletter</h1>
          <SubscribeForm />
        </div>

        <ul className="flex items-center gap-[30px]">
          {footerLinks?.length > 0 &&
            footerLinks.map((item, index) => <li key={index} className="text-lg">{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default TopSection;
