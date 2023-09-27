import React from "react";
import FollowSection from "./FollowSection";
import LogoSection from "./LogoSection";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-full">
      <FollowSection />
      <LogoSection />
      <Navbar />
    </div>
  );
};

export default Header;
