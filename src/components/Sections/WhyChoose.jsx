import React from "react";
import Layout1 from "../Layout/Layout1";
import { whyChooseCardData } from "../../data/cardData";

const WhyChoose = () => {
  return (
    <div className="bg-lightGray flex flex-col items-center gap-[20px] p-[30px] rounded-lg mt-[50px]">
      <h1 className="text-3xl font-[900]">
        Why Choose American Legal <br />
        Club <span className="text-primaryRed">?</span>
      </h1>

      <div>
        <Layout1 data={whyChooseCardData} />
      </div>
    </div>
  );
};

export default WhyChoose;
