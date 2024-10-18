import React from "react";
import TopBar from "../components/Topbar";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";

const Header = () => {
  return (
    <>
    <div>
    <TopBar />
    <NavBar />
    </div>
    <Banner/>
    </>
  );
};

export default Header;
