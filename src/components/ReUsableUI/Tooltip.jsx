import React from "react";

const Tooltip = ({ text, tooltipStyle }) => {
  return (
    <div className={`${tooltipStyle} relative p-[20px] rounded-[10px]`}>
        <div className="triangle" />
      <p>{text}</p>
    </div>
  );
};

export default Tooltip;
