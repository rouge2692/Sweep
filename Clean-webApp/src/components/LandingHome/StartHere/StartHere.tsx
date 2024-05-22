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

function StartHere({ stagedJobData, testCustomer, testJob }: Props) {
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
    <div className="bg-white p-5 md:p-10 rounded-2xl shadow-2xl md:w-5/6 border border-slate-300">
      <div className="mb-5 p-1">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-sans font-bold text-pink-600 mb-1">
          Find Cleaners
        </h1>
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-sans font-bold mb-2">
          for your
        </h1>
        {headers.map((header, index) => (
          <div
            key={index}
            style={{ display: index === activeIndex ? "flex" : "none" }}
            className="flex flex-row items-center"
          >
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-sans font-bold mb-1">
              {header}
            </h1>
            <div>
              {header == "AirBnb" && (
                <TbBrandAirbnb className="text-pink-600 size-10 sm:size-16" />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-5 p-1">
        <h1 className="font-semibold">
          Match with cleaners based on your property type, cleaning tasks need
          done, and your availiablity and location.
        </h1>
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
        className="bg-pink-600 p-3 m-1 rounded-lg text-white font-bold animate-wiggle animate-infinite"
      >
        Start Here
      </button>
    </div>
  );
}

export default StartHere;
