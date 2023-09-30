import React from "react";
import { FiSearch } from "react-icons/fi";


const Topbar = () => {
  return (
    <div className="flex justify-between w-full px-8 pt-8 pb-6">
      <p className="text-2xl">Dashboard</p>

      <div className="relative">
        <input
          type="text"
          placeholder="Search employees"
          className="w-80 py-2 pl-8 pr-4 rounded-full border border-gray-300 focus:outline-none focus focus:border-slate-400"
        />

        <div className="absolute inset-y-0 right-4 top-2 text-2xl">
          <FiSearch />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
