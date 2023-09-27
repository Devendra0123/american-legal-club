import React from "react";
import { HeroImage } from "../../assets";
import Tooltip from "../ReUsableUI/Tooltip";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[85vh] flex justify-center">
      <img
        src={HeroImage}
        alt="heroImage"
        className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 z-[-1]"
      />
      <div className="w-max absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-primaryRed/10 p-[20px] rounded-[5px]">
        <h1
          style={{
            lineHeight: "1.5",
          }}
          className="text-4xl font-[800]"
        >
          <span className="text-primaryRed">Secure Your Peace of Mind</span>{" "}
          with Legal Support <br />
          That Stands Between You and Your
          <br /> Unsecured Creditors
        </h1>
      </div>

      <div className="absolute bottom-[70px] right-[20px] transform translate-y-[100%]">
        <Tooltip text="At American Legal Club, we offer unparalleled legal support through a network of seasoned attorneys, all at a pre-negotiated, affordable monthly rate. Get peace of mind today!"
        tooltipStyle="w-[350px] bg-primaryBlue/75 text-white text-xl font-bold"
        />
      </div>
    </div>
  );
};

export default HeroSection;
