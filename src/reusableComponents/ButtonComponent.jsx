import React from "react";

const ButtonWithIcon = ({
  bgColor,
  hoverBgColor,
  icon = "",
  iconSize = "2xl",
  text = "",
  textColor = "",
}) => {
  return (
    <div className="px-1">
      <button
        className={`rounded-lg items-center flex px-4 py-2 ${bgColor? bgColor: 'bg-transparent border border-gray-400'} text-blue-100 ${hoverBgColor} duration-300`}
      >
        <div className={`flex ${textColor}`}>

        <div className={`pr-2 text-${iconSize} `}>{icon}</div>
        <p className=''>{text}</p>
        </div>
      </button>
    </div>
  );
};

export default ButtonWithIcon;
