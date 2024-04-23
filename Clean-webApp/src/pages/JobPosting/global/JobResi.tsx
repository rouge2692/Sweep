// React
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  //Params
  const { D1002 } = useParams();

  // Button States
  const [homeCheck, setHomeCheck] = useState(false);
  const [aptCheck, setAptCheck] = useState(false);
  const [comCheck, setComCheck] = useState(false);
  const [airCheck, setAirCheck] = useState(false);

  // Get Staged Data
  const [stagedJobData, setStagedJobData] = useState<{ [key: string]: any }>(
    {}
  );
  useEffect(() => {
    getJobCreationTemp(D1002).then((data) => {
      setStagedJobData(data);
    });
  }, []);
  useEffect(() => {
    console.log("PropUE");
    console.log(stagedJobData);
  }, [stagedJobData]);

  //Get Variation Data for Buttons
  const [propertyVari, setPropertyVari] = useState([]);
  useEffect(() => {
    setPropertyVari(
      Object.keys(stagedJobData).length > 0
        ? stagedJobData["D1006"]["Variations"]
        : []
    );
  }, [stagedJobData]);
  useEffect(() => {
    console.log(propertyVari);
  }, [propertyVari]);
  return (
    <>
      <NavBar />
      {/* Parent */}
      <section className="items-center flex flex-col p-3">
        {/* Title */}
        <div className="w-full h-1/5 flex justify-center items-end">
          <h1 className="font-semibold text-4xl text-center mb-2 p-3">
            Tell us about your Home?
          </h1>
        </div>
        {/* ^Title */}

        {/* Next */}
        {(homeCheck || aptCheck || comCheck || airCheck) && (
          <div className="m-2 shadow-md bg-green-600 p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300">
            <Link
              to="/JourneySecond"
              onClick={() => {
                postHandleJobCreation({
                  ...stagedJobData,
                  D1007: homeCheck || aptCheck ? "Residential" : "Commercial",
                  D1006: homeCheck
                    ? "Home"
                    : aptCheck
                    ? "Apartment"
                    : "Commercial",
                });
              }}
              className="text-2xl text-white font-bold"
            >
              NEXT
            </Link>
          </div>
        )}
        {/* Next */}

        {/* Buttons */}
        <div className="flex sm:flex-row flex-wrap items-center w-full justify-center">
          {/* House Selection */}
          <div
            className={`flex flex-col justify-center items-center border sm:m-5 m-1 border-solid bg-white ${
              homeCheck
                ? "transition-color duration-500 border-blue-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
            onClick={() => {
              setHomeCheck(!homeCheck);
              setAptCheck(false);
              setComCheck(false);
              setAirCheck(false);
            }}
          >
            <div className="sm:m-1 flex flex-row items-center">
              {homeCheck ? (
                <AiFillCheckCircle className="text-teal-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <GiFamilyHouse
                className={`text-5xl sm:hidden ${
                  homeCheck
                    ? "transition-color duration-500 text-teal-600"
                    : "text-slate-300 "
                } m-1`}
              />
              <h2 className="sm:mx-2">House</h2>
            </div>

            <GiFamilyHouse
              className={`text-9xl hidden sm:block ${
                homeCheck
                  ? "transition-color duration-500 text-teal-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^House Selection */}
          {/* Apt Selection */}
          <div
            className={`flex flex-col justify-center items-center border sm:m-5 m-1 border-solid ${
              aptCheck
                ? "transition-color duration-500 border-teal-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
            onClick={() => {
              setAptCheck(!aptCheck);
              setHomeCheck(false);
              setComCheck(false);
              setAirCheck(false);
            }}
          >
            <div className="sm:m-1 flex flex-row items-center flex-wrap">
              {aptCheck ? (
                <AiFillCheckCircle className="text-teal-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <BsBuildingsFill
                className={`text-5xl sm:hidden ${
                  aptCheck
                    ? "transition-color duration-500 text-teal-600"
                    : "text-slate-300 "
                } m-1`}
              />
              <h2 className="sm:mx-2">Apartment</h2>
            </div>

            <BsBuildingsFill
              className={`text-9xl hidden sm:block ${
                aptCheck
                  ? "transition-color duration-500 text-teal-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^Apt Selection */}
          {/* Commercial Selection */}
          <div
            className={`flex flex-col justify-center items-center border sm:m-5 m-1 border-solid ${
              comCheck
                ? "transition-color duration-500 border-teal-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
            onClick={() => {
              setComCheck(!comCheck);
              setAptCheck(false);
              setHomeCheck(false);
              setAirCheck(false);
            }}
          >
            <div className="sm:m-1 flex flex-row items-center">
              {comCheck ? (
                <AiFillCheckCircle className="text-teal-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <IoStorefrontSharp
                className={`text-5xl sm:hidden ${
                  comCheck
                    ? "transition-color duration-500 text-teal-600"
                    : "text-slate-300 "
                } m-1`}
              />
              <h2 className="sm:mx-2">Commercial</h2>
            </div>

            <IoStorefrontSharp
              className={`text-9xl hidden sm:block ${
                comCheck
                  ? "transition-color duration-500 text-teal-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^Commercial Selection */}
          {/* AirBnb Selection */}
          <div
            className={`flex flex-col justify-center items-center border sm:m-5 m-1 border-solid ${
              airCheck
                ? "transition-color duration-500 border-teal-600"
                : "border-slate-300"
            } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl px-3 p-1 sm:p-2 bg-white`}
            onClick={() => {
              setAirCheck(!airCheck);
              setComCheck(false);
              setAptCheck(false);
              setHomeCheck(false);
            }}
          >
            <div className="sm:m-1 flex flex-row items-center">
              {airCheck ? (
                <AiFillCheckCircle className="text-teal-600" />
              ) : (
                <BsCircle className="text-slate-300" />
              )}
              <TbBrandAirbnb
                className={`text-5xl sm:hidden ${
                  airCheck
                    ? "transition-color duration-500 text-teal-600"
                    : "text-slate-300 "
                } m-1`}
              />
              <h2 className="sm:mx-2">AirBnb</h2>
            </div>

            <TbBrandAirbnb
              className={`text-9xl hidden sm:block ${
                airCheck
                  ? "transition-color duration-500 text-teal-600"
                  : "text-slate-300 "
              } m-2`}
            />
          </div>
          {/* ^AirBnb Selection */}
        </div>
        {/* ^Buttons */}
      </section>
      {/* ^Parent */}
    </>
  );
}

export default JobProperty;
