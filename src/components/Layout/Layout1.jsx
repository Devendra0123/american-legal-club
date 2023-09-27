import React from "react";
import Card1 from "../Card/Card1";

const Layout1 = ({ data }) => {
  return (
    <div className="flex justify-center items-center gap-[20px]">
      <div className="flex flex-col gap-[30px]">
        <Card1
          icon={data[0]?.icon}
          title={data[0]?.title}
          description={data[0]?.description}
          cardStyle="bg-primaryBlue w-[280px] h-[300px] text-white"
        />
        <Card1
          icon={data[1]?.icon}
          title={data[1]?.title}
          description={data[1]?.description}
          cardStyle="bg-white w-[280px] h-[300px]"
        />
      </div>
      <div>
        <Card1
          icon={data[2]?.icon}
          title={data[2]?.title}
          description={data[2]?.description}
          cardStyle="bg-lightBlue w-[280px] h-[370px]"
        />
      </div>
      <div>
        <Card1
          icon={data[3]?.icon}
          title={data[3]?.title}
          description={data[3]?.description}
          cardStyle="bg-lightOrange w-[280px] h-[640px] text-xl"
        />
      </div>
    </div>
  );
};

export default Layout1;
