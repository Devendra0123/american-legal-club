import React from "react";
import TitleText from "../ReUsableUI/TitleText";
import { servicesCardData } from "../../data/cardData";
import Card1 from "../Card/Card1";

const ServicesSection = () => {
  return (
    <div className="flex items-center gap-[20px] mt-[-50px]">
      <div>
        <button className="bg-primaryBlue p-[10px] rounded-[4px] text-white text-xl">
          Explore Services
        </button>
      </div>

      <div className="flex flex-col items-center border border-slate-300 shadow-xl rounded-lg p-[20px] bg-white">
        <TitleText text1="Our" text2="Services" lineStyle="w-[100px]" />

        <div className="flex items-center gap-[70px] mt-[50px]">
          {servicesCardData?.length > 0 &&
            servicesCardData.map((item, index) => (
              <Card1
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                cardStyle="w-[300px] h-[400px] bg-gray1"
                titleColor="text-primaryRed"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
