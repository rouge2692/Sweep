import NavBar from "../../components/JobPosting/NavBar/NavBar";

import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import {
  MdOutlineBedroomParent,
  MdOutlineHomeWork,
  MdOutlineEventRepeat,
} from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobFreq() {
  const [oneTimeCheck, setOneTimeCheck] = useState(false);
  const [reOccCheck, setReOccCheck] = useState(false);

  const [entireCheck, setEntireCheck] = useState(false);
  const [singleCheck, setSingleCheck] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <section className="items-center h-screen flex flex-grow flex-col p-3 bg-white">
        {/* Title */}
        <div className="sticky top-0 z-50 w-full justify-center mt-10 flex-col">
          <h1 className="font-semibold text-4xl text-center p-3">
            What can we help you with?
          </h1>
        </div>
        <h1 className="mb-3">Select all that apply</h1>
        {/* ^Title */}

        {/* Next */}
        {(oneTimeCheck || reOccCheck) && (entireCheck || singleCheck) && (
          <div
            className="m-2 mb-5 shadow-md bg-green-600 p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300"
            onClick={() => navigate("/JourneyThird")}
          >
            {/* <Link to="/JourneyThird" className="text-2xl">
                NEXT
              </Link> */}
            <h1 className="text-2xl text-white font-bold">NEXT</h1>
          </div>
        )}

        {/* Next */}

        {/* Level and Freq Selections */}
        <div>
          <div className="p-3 border flex-row flex flex-wrap items-center justify-center">
            {/* Space */}
            <div className="m-2 mr-10">
              <h1 className="text-center mt-2 font-bold">Space Type</h1>
              <div className="flex-row flex">
                {/* Entire */}
                <div
                  className={`flex flex-col justify-center items-center border m-2 border-solid ${
                    entireCheck
                      ? "transition-color duration-500 border-blue-600"
                      : "border-slate-300"
                  } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
                  onClick={() => {
                    setEntireCheck(!entireCheck);
                    setSingleCheck(false);
                  }}
                >
                  <div className="m-1 flex flex-row items-center">
                    {entireCheck ? (
                      <AiFillCheckCircle className="text-blue-600" />
                    ) : (
                      <BsCircle className="text-slate-300" />
                    )}
                    <h2 className="mx-2">Entire Home</h2>
                  </div>

                  <MdOutlineHomeWork
                    className={`text-8xl ${
                      entireCheck
                        ? "transition-color duration-500 text-blue-600"
                        : "text-slate-300 "
                    } m-2`}
                  />
                </div>
                {/* Entire */}
                {/* Single */}
                <div
                  className={`flex flex-col justify-center items-center border m-2 border-solid ${
                    singleCheck
                      ? "transition-color duration-500 border-blue-600"
                      : "border-slate-300"
                  } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
                  onClick={() => {
                    setSingleCheck(!singleCheck);
                    setEntireCheck(false);
                  }}
                >
                  <div className="m-1 flex flex-row items-center">
                    {singleCheck ? (
                      <AiFillCheckCircle className="text-blue-600" />
                    ) : (
                      <BsCircle className="text-slate-300" />
                    )}
                    <h2 className="mx-2">Single Space</h2>
                  </div>

                  <MdOutlineBedroomParent
                    className={`text-8xl ${
                      singleCheck
                        ? "transition-color duration-500 text-blue-600"
                        : "text-slate-300 "
                    } m-2`}
                  />
                </div>
              </div>
            </div>
            {/* ^Space */}
            {/* Frequency */}
            <div>
              <h1 className="text-center mt-2 font-bold">Frequency</h1>
              <div className="flex-row flex">
                {/* One Time */}
                <div
                  className={`flex flex-col justify-center items-center border m-2 border-solid ${
                    oneTimeCheck
                      ? "transition-color duration-500 border-blue-600"
                      : "border-slate-300"
                  } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 px-4 bg-white`}
                  onClick={() => {
                    setOneTimeCheck(!oneTimeCheck);
                    setReOccCheck(false);
                  }}
                >
                  <div className="m-1 flex flex-row items-center">
                    {oneTimeCheck ? (
                      <AiFillCheckCircle className="text-blue-600" />
                    ) : (
                      <BsCircle className="text-slate-300" />
                    )}
                    <h2 className="mx-2">One Time</h2>
                  </div>

                  <IoMdCheckboxOutline
                    className={`text-8xl ${
                      oneTimeCheck
                        ? "transition-color duration-500 text-blue-600"
                        : "text-slate-300 "
                    } m-2`}
                  />
                </div>
                {/* Reoccurring */}
                <div
                  className={`flex flex-col justify-center items-center border m-2 border-solid ${
                    reOccCheck
                      ? "transition-color duration-500 border-blue-600"
                      : "border-slate-300"
                  } transition-transform duration-200 hover:scale-110 shadow-lg border-slate-300 rounded-xl p-2 bg-white`}
                  onClick={() => {
                    setReOccCheck(!reOccCheck);
                    setOneTimeCheck(false);
                  }}
                >
                  <div className="m-1 flex flex-row items-center">
                    {reOccCheck ? (
                      <AiFillCheckCircle className="text-blue-600" />
                    ) : (
                      <BsCircle className="text-slate-300" />
                    )}
                    <h2 className="mx-2">Reoccurring</h2>
                  </div>

                  <MdOutlineEventRepeat
                    className={`text-8xl ${
                      reOccCheck
                        ? "transition-color duration-500 text-blue-600"
                        : "text-slate-300 "
                    } m-2`}
                  />
                </div>
                {/* Reoccuring */}
              </div>
            </div>
            {/* ^Frequency */}
          </div>
        </div>
        {/* ^Level and Freq Selections */}
      </section>
    </>
  );
}

export default JobFreq;
