import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlay } from "react-icons/bs";
import HalfCircleProgressBar from "../../charts/HalfCircleProgressBar";
import ButtonWithIcon from "../../../reusableComponents/ButtonComponent";
import EmplyeesOverviewBadge from "../../../reusableComponents/EmplyeesOverviewBadge";


const MainContent = () => {
  const dataType=  {
    scheduledData : {
      Loged: "105hr 52m",
      Balance: "132hr 13m",
    },
    logedData : {
      Loged: "32hr 42m",
      Balance: "67hr 10m",
    }
  }
  const hourTypes=  {
    scheduledData : {
      totalHour: "105h",
      hourType: "Scheduled hour",
    },
    logedData : {
      totalHour: "122h",
      hourType: "Logged of hour",
    }
  }

  return (
    <div className="w-full px-6">
      <div className="grid grid-cols-3 grid-rows-8 gap-8 h-screen">
        <div className="col-span-3 row-span-2 bg-white rounded-xl shadow-sm py-5">
          <div className="flex justify-between items-center px-6 py-4 h-full">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-blue-700">
                Welcome Back Katarina
              </p>
              <div className="flex">
                <p className="text-gray-400 pr-2">Lest start your day </p>
                <img src="images/tea.png" alt="Tea" />
              </div>
            </div>
            <div className="flex">
              <div>
                <ButtonWithIcon
                  bgColor="bg-blue-600"
                  icon={<AiOutlinePlus />}
                  text="New Entry"
                />
              </div>
              <div>
                <ButtonWithIcon
                  icon={<BsPlay />}
                  text="Start Timer"
                  textColor="text-black hover:text-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 row-start-3 bg-white shadow-sm rounded-xl">
          <div className="pl-8 pt-10">
          <div className="flex flex-col mb-16">
              <p className="text-xl font-semibold">Emplyees overview</p>
              <p className="text-gray-400">Today</p>
            </div>
            <EmplyeesOverviewBadge/>
          </div>
          </div>
        <div className="col-span-2 row-span-2 row-start-3 bg-white shadow-sm rounded-xl">
          <div className="flex flex-col justify-around p-10">
            <div className="flex flex-col">
              <p className="text-xl font-semibold">Monthly timelog</p>
              <p className="text-gray-400">this month</p>
            </div>
            <div className="flex justify-between">

            <HalfCircleProgressBar percentage={80} color="#FF834D" dataType={dataType.logedData} hourTypes={hourTypes?.scheduledData}/>
            <HalfCircleProgressBar percentage={60} color="#44A9F1" dataType={dataType.scheduledData} hourTypes={hourTypes?.logedData}/>
            {/* <HalfCircleProgressBar percentage={60} color="#44A9F1" /> */}
            </div>
          </div>
        </div>
        <div className="col-start-2 row-start-5 bg-white shadow-sm rounded-xl">4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus minus eligendi hic eum non quasi, quae nesciunt enim eaque, animi culpa unde modi dolorum iure provident deserunt, perspiciatis labore? Ad.</div>
        <div className="col-start-3 row-start-5 bg-white shadow-sm rounded-xl">5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maxime, iure earum consectetur, a error ratione esse hic magni tempore eius culpa id qui soluta aperiam asperiores suscipit sunt quis.</div>
        <div className="col-span-3 row-span-3 row-start-6 bg-white shadow-sm rounded-xl p-10">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel aperiam rerum labore velit unde harum expedita aliquam itaque. Enim quasi quisquam suscipit pariatur reiciendis aut optio aliquid, natus et!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel aperiam rerum labore velit unde harum expedita aliquam itaque. Enim quasi quisquam suscipit pariatur reiciendis aut optio aliquid, natus et!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel aperiam rerum labore velit unde harum expedita aliquam itaque. Enim quasi quisquam suscipit pariatur reiciendis aut optio aliquid, natus et!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel aperiam rerum labore velit unde harum expedita aliquam itaque. Enim quasi quisquam suscipit pariatur reiciendis aut optio aliquid, natus et!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel aperiam rerum labore velit unde harum expedita aliquam itaque. Enim quasi quisquam suscipit pariatur reiciendis aut optio aliquid, natus et!
          </div>
        {/* <div className="col-span-2 row-span-2 row-start-8 bg-amber-500">7</div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-8 bg-amber-500">
          8
        </div> */}
        {/* <div className="col-span-2 row-span-3 row-start-10 bg-amber-500">
          11
        </div>
        <div className="col-span-2 row-span-3 col-start-3 row-start-10 bg-amber-500">
          12
        </div> */}
      </div>
    </div>
  );
};

export default MainContent;
