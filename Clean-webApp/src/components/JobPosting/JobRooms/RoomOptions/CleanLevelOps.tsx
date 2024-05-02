import React, { useEffect, useState } from "react";

import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

import { TfiBrushAlt } from "react-icons/tfi";
import { MdOutlineCleanHands } from "react-icons/md";

interface Props {
  level: string;
  selected: boolean;
  handleCleanOp: (cleanOp: string) => void;
}

function CleanLevelOps({ level, selected, handleCleanOp }: Props) {
  return (
    <div
      className={`flex flex-col border border-solid sm:mr-2 sm:m-0 mb-2 px-1 ${
        selected
          ? "transition-color duration-500 border-teal-600 border-2 text-teal-600 font-bold"
          : "border-slate-300"
      } transition-transform duration-200 hover:scale-90 shadow-md rounded-xl bg-white hover:cursor-pointer`}
      onClick={() => {
        selected ? handleCleanOp("") : handleCleanOp(level);
      }}
    >
      <div className="m-1 flex flex-row items-center">
        {selected ? (
          <AiFillCheckCircle className="text-teal-600" />
        ) : (
          <BsCircle className="text-slate-300" />
        )}
        {level == "General" ? (
          <TfiBrushAlt
            className={`size-5 md:size-7 ${
              selected
                ? "transition-color duration-500 text-teal-600"
                : "text-slate-300"
            } m-2`}
          />
        ) : (
          <MdOutlineCleanHands
            className={`size-5 md:size-7 ${
              selected
                ? "transition-color duration-500 text-teal-600"
                : "text-slate-300"
            } m-2`}
          />
        )}
        <h2 className="text-xs lg:text-base">{level} Clean</h2>
      </div>
    </div>
  );
}

export default CleanLevelOps;
