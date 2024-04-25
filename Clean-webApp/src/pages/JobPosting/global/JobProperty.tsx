// React
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// Components
import NavBar from "../../../components/JobPosting/NavBar/NavBar";
// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle, BsBuildingsFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { IoStorefrontSharp } from "react-icons/io5";
import { TbBrandAirbnb } from "react-icons/tb";
// Conections
import {
  getJobCreationTemp,
  postHandleJobCreation,
} from "../../../connections/HandleJobCreation";

function JobProperty() {
  // Initialize Navigate
  const navigate = useNavigate();

  // Params
  const { st01_D1002 } = useParams();
  const { sp01_D1002 } = useParams();

  // Button States
  const [homeCheck, setHomeCheck] = useState(false);
  const [aptCheck, setAptCheck] = useState(false);
  const [comCheck, setComCheck] = useState(false);
  const [airHomeCheck, setAirHomeCheck] = useState(false);
  const [airAptCheck, setAirAptCheck] = useState(false);

  // Get Staged Data
  const [stagedJobData, setStagedJobData] = useState<{ [key: string]: any }>(
    {}
  );
  useEffect(() => {
    getJobCreationTemp(st01_D1002).then((data) => {
      setStagedJobData(data);
    });
  }, []);
  useEffect(() => {
    console.log("PropUE");
    console.log(stagedJobData);
  }, [stagedJobData]);

  return (
    <>
      <NavBar />
      {/* Parent */}
      <section className="items-center flex flex-col p-3">
        {/* Title */}
        <div className="w-full h-1/5 flex justify-center items-end">
          <h1 className="font-semibold text-4xl text-center mb-2 p-3">
            Tell us about your Property?
          </h1>
        </div>
        {/* ^ Title */}

        {/* Next */}
        {(homeCheck || aptCheck || comCheck || airHomeCheck || airAptCheck) && (
          <div className="m-2 shadow-md bg-green-600 p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300">
            <button
              onClick={() => {
                postHandleJobCreation(
                  {
                    ...stagedJobData,
                    ST01D1007:
                      homeCheck || aptCheck
                        ? "Residential"
                        : comCheck
                        ? "Commercial"
                        : "AirBnb",
                    ST01D1006: homeCheck
                      ? "House"
                      : aptCheck
                      ? "Apartment"
                      : "Commercial",
                  },
                  stagedJobData.ST01D1002
                ).then((data) => {
                  if (
                    sp01_D1002 == "CLES1" ||
                    sp01_D1002 == "PAIS9" ||
                    sp01_D1002 == "FLOS6"
                  ) {
                    navigate(
                      `/JourneyRooms/${sp01_D1002}/${
                        data.response
                      }/${"RESHOUP1"}`
                    );
                  } else {
                    navigate("/JourneyFinal");
                  }
                });
              }}
              className="text-2xl text-white font-bold"
            >
              NEXT
            </button>
          </div>
        )}
        {/* ^ Next */}

        <div className="flex flex-col sm:flex-row sm:justify-center w-full">
          {/* Buttons */}
          {/* Residential Buttons */}
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold">Residential</h1>
            </div>
            {/* Selections */}
            <div className="flex flex-col">
              {/* House Selection */}
              <div
                className={`flex flex-col justify-center items-center border m-1 border-solid bg-white ${
                  homeCheck
                    ? "transition-color duration-500 border-blue-600"
                    : "border-slate-300"
                } transition-transform duration-200 hover:scale-95 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
                onClick={() => {
                  setHomeCheck(!homeCheck);
                  setAptCheck(false);
                  setComCheck(false);
                  setAirHomeCheck(false);
                }}
              >
                <div className="flex flex-row items-center w-full justify-between mx-5">
                  {homeCheck ? (
                    <AiFillCheckCircle className="text-teal-600" />
                  ) : (
                    <BsCircle className="text-slate-300" />
                  )}
                  <div className="flex flex-row items-center">
                    <GiFamilyHouse
                      className={`text-5xl ${
                        homeCheck
                          ? "transition-color duration-500 text-teal-600"
                          : "text-slate-300 "
                      } m-1`}
                    />
                    <h2 className="">House</h2>
                  </div>
                  <div>
                    <h1 className="text-white">h</h1>
                  </div>
                </div>
              </div>
              {/* ^ House Selection */}
              {/* Apt Selection */}
              <div
                className={`flex flex-col justify-center items-center border m-1 border-solid ${
                  aptCheck
                    ? "transition-color duration-500 border-teal-600"
                    : "border-slate-300"
                } transition-transform duration-200 hover:scale-95 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
                onClick={() => {
                  setAptCheck(!aptCheck);
                  setHomeCheck(false);
                  setComCheck(false);
                  setAirHomeCheck(false);
                }}
              >
                <div className="flex flex-row items-center justify-between w-full mx-5">
                  {aptCheck ? (
                    <AiFillCheckCircle className="text-teal-600" />
                  ) : (
                    <BsCircle className="text-slate-300" />
                  )}
                  <div className="flex items-center">
                    <BsBuildingsFill
                      className={`text-5xl ${
                        aptCheck
                          ? "transition-color duration-500 text-teal-600"
                          : "text-slate-300 "
                      } m-1`}
                    />
                    <h2 className="">Apartment</h2>
                  </div>
                  <div>
                    <h1 className="text-white">h</h1>
                  </div>
                </div>
              </div>
              {/* ^ Apt Selection */}
            </div>
            {/* ^ Selections */}
          </div>
          {/* ^ Residential */}
          {/* Commercial */}
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold">Commercial</h1>
            </div>
            {/* Selections */}
            <div className="flex flex-col">
              {/* Commercial Selection */}
              <div
                className={`flex flex-col justify-center items-center border m-1 border-solid ${
                  comCheck
                    ? "transition-color duration-500 border-teal-600"
                    : "border-slate-300"
                } transition-transform duration-200 hover:scale-95 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
                onClick={() => {
                  setComCheck(!comCheck);
                  setAptCheck(false);
                  setHomeCheck(false);
                  setAirHomeCheck(false);
                }}
              >
                <div className="flex flex-row items-center w-full justify-between mx-5">
                  {comCheck ? (
                    <AiFillCheckCircle className="text-teal-600" />
                  ) : (
                    <BsCircle className="text-slate-300" />
                  )}
                  <div className="flex flex-row items-center">
                    <IoStorefrontSharp
                      className={`text-5xl ${
                        comCheck
                          ? "transition-color duration-500 text-teal-600"
                          : "text-slate-300 "
                      } m-1`}
                    />
                    <h2 className="">Commercial</h2>
                  </div>
                  <div>
                    <h1 className="text-white">h</h1>
                  </div>
                </div>
              </div>
              {/* ^ Commercial Selection */}
            </div>
          </div>
          {/* AirBnb */}
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold">AirBnb</h1>
            </div>

            {/* AirBnb House Selection */}
            <div
              className={`flex flex-col justify-center items-center border m-1 border-solid bg-white ${
                airHomeCheck
                  ? "transition-color duration-500 border-blue-600"
                  : "border-slate-300"
              } transition-transform duration-200 hover:scale-95 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
              onClick={() => {
                setHomeCheck(false);
                setAptCheck(false);
                setComCheck(false);
                setAirHomeCheck(!airHomeCheck);
                setAirAptCheck(false);
              }}
            >
              <div className="flex flex-row items-center w-full justify-between mx-5">
                {airHomeCheck ? (
                  <AiFillCheckCircle className="text-teal-600" />
                ) : (
                  <BsCircle className="text-slate-300" />
                )}
                <div className="flex flex-row items-center">
                  <GiFamilyHouse
                    className={`text-5xl ${
                      airHomeCheck
                        ? "transition-color duration-500 text-teal-600"
                        : "text-slate-300 "
                    } m-1`}
                  />
                  <h2 className="">House</h2>
                </div>
                <div>
                  <h1 className="text-white">h</h1>
                </div>
              </div>
            </div>
            {/* ^ Airbnb House Selection */}
            {/* Airbnb Apt Selection */}
            <div
              className={`flex flex-col justify-center items-center border m-1 border-solid ${
                airAptCheck
                  ? "transition-color duration-500 border-teal-600"
                  : "border-slate-300"
              } transition-transform duration-200 hover:scale-95 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
              onClick={() => {
                setAptCheck(false);
                setHomeCheck(false);
                setComCheck(false);
                setAirHomeCheck(false);
                setAirAptCheck(!airAptCheck);
              }}
            >
              <div className="flex flex-row items-center justify-between w-full mx-5">
                {airAptCheck ? (
                  <AiFillCheckCircle className="text-teal-600" />
                ) : (
                  <BsCircle className="text-slate-300" />
                )}
                <div className="flex items-center">
                  <BsBuildingsFill
                    className={`text-5xl ${
                      airAptCheck
                        ? "transition-color duration-500 text-teal-600"
                        : "text-slate-300 "
                    } m-1`}
                  />
                  <h2 className="">Apartment</h2>
                </div>
                <div>
                  <h1 className="text-white">h</h1>
                </div>
              </div>
            </div>
            {/* ^ Airbnb Apt Selection */}
          </div>
          {/* ^ AirBnb */}
          {/* ^ Buttons */}
        </div>
      </section>
      {/* ^Parent */}
    </>
  );
}

export default JobProperty;
