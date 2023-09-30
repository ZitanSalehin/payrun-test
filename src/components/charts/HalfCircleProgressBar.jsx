import React from "react";
import { SemiCircleProgress } from "react-semicircle-progressbar";

const HalfCircleProgressBar = ({ percentage, color, dataType, hourTypes}) => {
  
 
  return (
    <div className="relative">
      <SemiCircleProgress
        percentage={percentage}
        size={{
          width: 300,
          height: 300,
        }}
        strokeWidth={10}
        strokeColor={color}
        strokeLinecap="round"
        hasBackground={true}
        fontStyle={{
          fill: "none",
        }}
      />
      <div className="absolute top-28 left-16 text-center">
        <p className="text-2xl font-semibold">
          {hourTypes.totalHour}
        </p>
        <p className="text-gray-400">

          
        {hourTypes?.hourType}</p>
      </div>

      <div className="absolute bottom-0 flex flex-col justify-between w-full px-1">
      {Object.entries(dataType).map(([label, value]) => (
        <div key={label} className="flex justify-between w-full">
          <div className="flex items-center">

          {/* <div className="w-4 h-4 bg-orange-600 rounded-full" /> */}
          <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "/>
    <label for="bordered-radio-1" className="text-gray-400 px-2">{label}:</label>
          {/* <p className="text-gray-400 px-2"></p> */}
          </div>
          <div className="pb-2">
            <p className="font-semibold">{value}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default HalfCircleProgressBar;
