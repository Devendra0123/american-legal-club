import React from "react";
import { HeroImage } from "../../assets";
import { aboutSectionContent } from "../../data/sectionData";
import TitleText from "../ReUsableUI/TitleText";

const AboutSection = () => {
  const { desc1, desc2, missionText } = aboutSectionContent;

  return (
    <div className="w-full bg-lightGray px-[20px] py-[50px] rounded-[5px] flex flex-col text-start">
      <div>
        <TitleText
          text1="About"
          text2="American Legal Club"
          lineStyle="w-[170px]"
        />
      </div>

      <div className="w-full flex items-start justify-between gap-[50px] mt-[70px]">
        <div className="w-1/2 flex flex-col gap-[30px]">
          <p>{desc1}</p>
          <p>{desc2}</p>

          <div className="flex flex-col gap-[10px]">
            <h1 className="text-2xl font-[700]">Our Mission:</h1>
            <p>{missionText}</p>
          </div>
        </div>

        <div className="w-1/2">
          <img
            src={HeroImage}
            alt="mainImage"
            className="w-full h-[500px] object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-[20px]">
        <button className="bg-primaryRed text-white px-[15px] py-[6px] rounded-[10px] text-xl">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
