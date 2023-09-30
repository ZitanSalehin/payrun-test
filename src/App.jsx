import React from "react";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/mainPanel/Dashboard/Main";


const App = () => {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />


      <div className="w-screen">
        <MainPanel />
      </div>
    </div>
  );
};

export default App;
