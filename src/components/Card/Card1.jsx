import React from "react";

const Card1 = ({ icon, title, description, cardStyle,titleColor }) => {
  return (
    <div className={`${cardStyle} flex flex-col items-center gap-[20px] rounded-lg p-[20px] shadow-xl`}>
      <img src={icon} alt="icon" className="w-[70px] h-[70px]" />
      <h1 className={`${titleColor} text-xl font-bold`}>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card1;
