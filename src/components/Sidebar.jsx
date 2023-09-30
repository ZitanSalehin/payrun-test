import React, { useState } from "react";
import { MainLogo, Employees, Airplane, Clock, Monitor, Mike } from './icons/coreIconList'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarItems = [
    { icon: <Monitor />, text: "Dashboard" },
    { icon: <Clock />, text: "Timeline" },
    { icon: <Airplane />, text: "Employees" },
    { icon: <Employees />, text: "Hiring" },
    { icon: <Mike />, text: "Hiring" },
  ];

  const sideBarTextClasses = `text-gray-600 hover:text-default-skyblue pl-2 ${
    isOpen ? "" : "hidden"
  }`;

  const svgIconClasses = `flex text-transparent hover:text-default-skyblue pl-2 cursor-pointer stroke-gray-600 hover:stroke-default-skyblue`;

  return (
    <div className="">
      <div
        className={`bg-white h-screen p-5 pt-8 duration-300 ${
          isOpen ? "w-56" : "w-20"
        } `}
      >
        <div className="flex ">
          <div
            className={`flex justify-center pb-8 ${
              isOpen ? "w-2/3" : "w-4/5 pl-2"
            }`}
          >
            <MainLogo />
          </div>
          <div
            className={`inline-flex items-center p-2 bg-white text-default-skyblue text-xl rounded-full shadow-md absolute duration-300 top-10 ${
              isOpen ? "left-52" : "left-16"
            } `}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiChevronLeft /> : <FiChevronRight />}
          </div>
        </div>

        <div className="h-64 flex flex-col justify-between">
          {sidebarItems.map((item, index) => (
            <div key={index} className={svgIconClasses}>
              {item.icon}
              <h1 className={sideBarTextClasses}>{item.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

