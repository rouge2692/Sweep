import NavBar from "../../components/Journey/NavBar/NavBar";

import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle, BsBuildingsFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { IoStorefrontSharp } from "react-icons/io5";

import { useState } from "react";
import { Link } from "react-router-dom";

function OrderJourney() {
  const [homeCheck, setHomeCheck] = useState(false);
  const [aptCheck, setAptCheck] = useState(false);
  const [comCheck, setComCheck] = useState(false);

  return (
    <>
      <NavBar />
      {/* Parent */}
      <section className="items-center flex flex-col h-screen p-3 bg-gray-50">
        {/* Title */}
        <div className="w-full h-1/5 flex justify-center items-end">
          <h1 className="font-semibold text-4xl text-center mb-2 p-3">
            Tell us about your Humble Abode
          </h1>
        </div>
        {/* ^Title */}

        {/* Next */}
        {(homeCheck || aptCheck || comCheck) && (
          <div className="m-2 shadow-md bg-green-600 p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300">
            <Link to="/JourneySecond" className="text-2xl text-white font-bold">
              NEXT
            </Link>
          </div>
        )}
        {/* Next */}

        {/* Buttons */}
        <div className="flex flex-row flex-wrap items-center w-full justify-center">
          {/* House Selection */}
          <div
            className={`flex flex-col justify-center items-center border m-5 border-solid bg-white ${
              homeCheck
                ? "transition-color duration-500 border-blue-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
            onClick={() => {
              setHomeCheck(!homeCheck);
              setAptCheck(false);
              setComCheck(false);
            }}
          >
            <div className="m-1 flex flex-row items-center">
              {homeCheck ? (
                <AiFillCheckCircle className="text-blue-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <h2 className="mx-2">House</h2>
            </div>

            <GiFamilyHouse
              className={`text-9xl ${
                homeCheck
                  ? "transition-color duration-500 text-blue-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^House Selection */}
          {/* Apt Selection */}
          <div
            className={`flex flex-col justify-center items-center border m-5 border-solid ${
              aptCheck
                ? "transition-color duration-500 border-blue-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
            onClick={() => {
              setAptCheck(!aptCheck);
              setHomeCheck(false);
              setComCheck(false);
            }}
          >
            <div className="m-1 flex flex-row items-center flex-wrap">
              {aptCheck ? (
                <AiFillCheckCircle className="text-blue-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <h2 className="mx-2">Apartment</h2>
            </div>

            <BsBuildingsFill
              className={`text-9xl ${
                aptCheck
                  ? "transition-color duration-500 text-blue-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^Apt Selection */}
          {/* Commercial Selection */}
          <div
            className={`flex flex-col justify-center items-center border m-5 border-solid ${
              comCheck
                ? "transition-color duration-500 border-blue-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
            onClick={() => {
              setComCheck(!comCheck);
              setAptCheck(false);
              setHomeCheck(false);
            }}
          >
            <div className="m-1 flex flex-row items-center">
              {comCheck ? (
                <AiFillCheckCircle className="text-blue-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <h2 className="mx-2">Commercial</h2>
            </div>

            <IoStorefrontSharp
              className={`text-9xl ${
                comCheck
                  ? "transition-color duration-500 text-blue-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^Commercial Selection */}
        </div>
        {/* ^Buttons */}
      </section>
      {/* ^Parent */}
    </>
  );
}

export default OrderJourney;
