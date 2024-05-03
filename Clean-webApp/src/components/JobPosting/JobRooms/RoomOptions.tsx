import React, { useEffect, useState } from "react";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineCleanHands,
} from "react-icons/md";
import { TfiBrushAlt } from "react-icons/tfi";

// Components
import ServiceItem from "./ServiceItem";
import CleanLevelOps from "./RoomOptions/CleanLevelOps";

interface Props {
  roomData: { [key: string]: any };
  taskData: any;
  cate: string;
  getSerRoom: (title: string, amount: number) => void;
  handleCleanLevel: (cleanLevel: string, roomLevel: string) => void;
  handleTaskSelect: (taskSel: boolean, taskNum: string) => void;
}

function RoomOptions({
  roomData,
  getSerRoom,
  cate,
  taskData,
  handleCleanLevel,
  handleTaskSelect,
}: Props) {
  const [openAcc, setOpenAcc] = useState(false);
  const [openSerList, setOpenSerList] = useState(false);

  const [amount, setAmount] = useState(0);
  const handleAmount = (oper: string, unitamount: number, title: string) => {
    if (oper == "+") {
      setAmount((preAmount) => preAmount + 1);
      getSerRoom(title, amount);
    } else {
      if (unitamount == 0) {
        if (oper == "+") {
          setAmount((preAmount) => preAmount + 1);
          getSerRoom(title, amount);
        } else {
          return null;
        }
      } else {
        setAmount((preAmount) => preAmount - 1);
        getSerRoom(title, amount);
      }
    }
  };
  const [cleanOpSelected, setCleanOpSelected] = useState("");
  const handleCleanOp = (cleanOp: string) => {
    setCleanOpSelected(cleanOp);
    handleCleanLevel(cleanOp, roomData.SP05D1015);
  };
  const handleTaskSelection = (taskSel: boolean, taskNum: string) => {
    handleTaskSelect(taskSel, taskNum);
  };

  return (
    <div
      className={`shadow-lg mb-3 rounded-lg hover:scale-105 transition-transform duration-200 bg-white ${
        openAcc ? "border-pink-600 border-2" : "border-gray-300 border"
      }`}
    >
      <div
        className={`sm:flex sm:flex-row sm:justify-between ${
          openAcc ? "bg-pink-600 border-4 border-white shadow-md" : "bg-white"
        } rounded-lg`}
      >
        <div className="flex p-3 justify-between w-full">
          <button
            onClick={() => setOpenAcc(!openAcc)}
            className={`${
              openAcc && "text-white"
            } flex font-bold w-full justify-start items-center rounded-lg`}
          >
            <h1 className="sm:ml-5 mr-3 ml-2">img</h1>
            {roomData.SP05D1001}
          </button>
          <button
            className={`${
              openAcc ? "text-white" : "text-gray-500"
            } font-bold text-xs hover:underline hover:opacity-40`}
          >
            Remove
          </button>
        </div>

        <div
          className={`flex flex-row justify-center bg-slate-100 p-3 sm:px-5 ${
            !openAcc && "rounded-lg"
          }`}
        >
          <button
            onClick={() => handleAmount("-", amount, cate)}
            className="bg-red-800 p-2 px-4 rounded-lg font-bold text-white hover:bg-red-600 transition-opacity duration-200"
          >
            -
          </button>
          <h1 className="bg-slate-300 p-2 px-4 rounded-lg font-bold text-black mx-2">
            {amount}
          </h1>
          <button
            onClick={() => handleAmount("+", amount, cate)}
            className="p-2 bg-green-800 px-4 rounded-lg font-bold text-white hover:bg-green-600 transition-opacity duration-200"
          >
            +
          </button>
        </div>
      </div>
      {/* Hidden Element */}
      <div
        className={`p-4 rounded-lg transition duration-200 ${
          openAcc ? "h-1/2" : "h-0 hidden"
        }`}
      >
        {roomData.SP05D1009.length > 0 && (
          <div className="mr-2 lg:mr-6">
            <div className="sm:flex-row sm:flex mt-1">
              <h1 className="font-bold mr-3 mb-2">Cleaning Level:</h1>
              {/* Map */}
              {roomData.SP05D1009.map((item: string, index: number) => {
                return (
                  <CleanLevelOps
                    key={index}
                    level={item}
                    selected={cleanOpSelected == item}
                    handleCleanOp={handleCleanOp}
                  />
                );
              })}
              {/* ^ Map */}
            </div>
          </div>
        )}

        {/* Combo - Multi Sel Parent */}
        <div
          className={`w-full ${
            roomData.SP05D1009.length > 0 && "mt-3"
          } md:flex md:flex-row hover:cursor-pointer`}
        >
          <h1 className="font-bold md:mr-20">Tasks:</h1>

          <div className="border-2 border-slate-300 hover:border-slate-300 rounded-lg mt-1 w-full shadow-md">
            {/* Header Button */}
            <div className="flex flex-row justify-between px-3 p-2">
              <button
                onClick={() => setOpenSerList(!openSerList)}
                className="w-full hover:opacity-50 h-full flex items-start text-sm lg:text-base"
              >
                {taskData.filter(
                  (item: { [key: string]: any }) => item.SPXD1020 == true
                ).length > 0
                  ? `${
                      taskData.filter(
                        (item: { [key: string]: any }) => item.SPXD1020 == true
                      ).length
                    } Services Selected`
                  : "List of Services"}
              </button>
              {openSerList ? (
                <MdOutlineKeyboardArrowUp
                  onClick={() => setOpenSerList(!openSerList)}
                  className="lg:size-7 size-5 hover:opacity-50 text-slate-600 hover:cursor-pointer h-full"
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  onClick={() => setOpenSerList(!openSerList)}
                  className="lg:size-7 size-5 hover:opacity-50 text-slate-600 hover:cursor-pointer h-full"
                />
              )}
            </div>
            {/* ^ Header Button */}
            {/* Hidden Element */}
            {openSerList && (
              <div className="px-3 pb-3 flex flex-wrap">
                {taskData.map((item: { [key: string]: any }, index: number) => {
                  return (
                    <ServiceItem
                      key={index}
                      task={item}
                      taskName={item.SPXD1001}
                      selected={item.SPXD1020}
                      taskNum={item.SPXD1002}
                      handleTaskSelect={handleTaskSelection}
                    />
                  );
                })}
              </div>
            )}
            {/* ^ Hidden Element */}
          </div>
        </div>
        {/* ^ Combo - Multi Sel Parent  */}
      </div>
      {/* Hidden Element */}
    </div>
  );
}

export default RoomOptions;
