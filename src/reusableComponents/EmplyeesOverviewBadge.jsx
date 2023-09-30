import React from 'react';
import { AiOutlineUser, AiOutlineClockCircle } from 'react-icons/ai';
import { TbClockQuestion } from 'react-icons/tb';
import { BsAirplane } from 'react-icons/bs';

const EmplyeesOverviewBadge = () => {
  const data = [
    {
      icon: <AiOutlineUser />,
      total: 155,
      cardColor: 'bg-blue-100',
      iconBgColor: 'bg-blue-600',
    },
    {
      icon: <AiOutlineClockCircle />,
      total: 155,
      cardColor: 'bg-green-100',
      iconBgColor: 'bg-green-600',
    },
    {
      icon: <TbClockQuestion />,
      total: 155,
      cardColor: 'bg-yellow-100',
      iconBgColor: 'bg-yellow-400',
    },
    {
      icon: <BsAirplane />,
      total: 155,
      cardColor: 'bg-slate-100',
      iconBgColor: 'bg-slate-600',
    },
  ];

  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-44 h-44 flex flex-col items-center text-center justify-center ${item.cardColor} mx-4 my-8 relative rounded-xl`}
        >
          <div className="absolute bottom-32 bg-white p-3 rounded-full">
            <div className={`text-white p-4 rounded-full ${item.iconBgColor} text-4xl`}>
              {item.icon}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-4xl">{item.total}</p>
            <p className="text-gray-400 text-2xl">Total</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmplyeesOverviewBadge;
