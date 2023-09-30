import React from "react";
import ProfileBar from "./ProfileBar";
import Topbar from "./Topbar";
import MainContent from "./MainContent";

const MainPanel = () => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <MainContent />
        <ProfileBar />
      </div>
    </div>
  );
};

export default MainPanel;
