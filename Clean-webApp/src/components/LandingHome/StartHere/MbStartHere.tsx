// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { postHandleJobCreation } from "../../../connections/HandleJobCreation";

import { TbBrandAirbnb } from "react-icons/tb";

interface Props {
  stagedJobData: { [key: string]: any };
  testJob: string;
  testCustomer: string;
}

function MbStartHere({ stagedJobData, testCustomer, testJob }: Props) {
  // Initialize Navigate
  const navigate = useNavigate();

  const headers = ["House 🏡", "AirBnb", "Office 🏢", "Condo 🏤"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % headers.length);
    }, 3000); // Change header every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [headers.length]);
  return (
    <div className="flex justify-between m-2 p-3 border rounded-2xl border-pink-600 w-full">
      <div className="flex items-center justify-start">
        <h1 className="text-pink-600 font-bold mr-1">Find cleaners</h1>
        <h1 className="font-bold mr-1">for</h1>
        {headers.map((header, index) => (
          <div
            key={index}
            style={{ display: index === activeIndex ? "flex" : "none" }}
            className="flex flex-row items-center"
          >
            <h1 className="font-sans font-bold">{header}</h1>
            <div>
              {header == "AirBnb" && (
                <TbBrandAirbnb className="text-pink-600 size-5 md:size-10 lg:size-16" />
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          postHandleJobCreation(
            {
              ...stagedJobData,
              ST01D1001: testJob,
              ST01D1003: testCustomer,
            },
            "newJobHash"
          ).then((data) => {
            navigate(`/JourneyService/${data.response}`);
          });
        }}
        className="bg-pink-600 p-3 rounded-lg text-white font-bold animate-wiggle animate-infinite"
      >
        Start Here
      </button>
    </div>
  );
}

export default MbStartHere;
