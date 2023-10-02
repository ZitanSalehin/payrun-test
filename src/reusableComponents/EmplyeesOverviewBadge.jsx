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
      title:'Total'
    },
    {
      icon: <AiOutlineClockCircle />,
      total: 155,
      cardColor: 'bg-green-100',
      iconBgColor: 'bg-green-600',
      title:'Working'
    },
    {
      icon: <TbClockQuestion />,
      total: 155,
      cardColor: 'bg-yellow-100',
      iconBgColor: 'bg-yellow-400',
      title:'Not working'
    },
    {
      icon: <BsAirplane />,
      total: 155,
      cardColor: 'bg-slate-100',
      iconBgColor: 'bg-slate-600',
      title:'On leave'
    },
  ];

  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-40 h-36 flex flex-col items-center text-center justify-center ${item.cardColor} mr-5 mb-12 relative rounded-xl`}
        >
          <div className="absolute bottom-28 bg-white p-3 rounded-full">
            <div className={`text-white p-4 rounded-full ${item.iconBgColor} text-2xl`}>
              {item.icon}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-2xl font-semibold">{item.total}</p>
            <p className="text-gray-400 text-xl">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmplyeesOverviewBadge;
