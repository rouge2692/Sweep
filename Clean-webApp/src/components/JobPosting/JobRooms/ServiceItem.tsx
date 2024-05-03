import { useEffect, useState } from "react";

import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  task: any;
  taskName: string;
  selected: boolean;
  taskNum: string;
  handleTaskSelect: (taskSel: boolean, taskNum: string) => void;
}

function ServiceItem({
  taskName,
  selected,
  taskNum,
  task,
  handleTaskSelect,
}: Props) {
  // console.log("Service Item " + taskName + " " + selected);

  return (
    <button
      onClick={() => handleTaskSelect(!selected, taskNum)}
      className={`flex items-center border-2 transition-colors duration-200 ${
        selected && "border-pink-600 font-bold text-pink-600"
      } px-2 shadow-md rounded-lg hover:opacity-75 mb-2 mr-2 hover:font-bold`}
    >
      {selected ? (
        <MdCheckBox
          className=" text-pink-600"
          onClick={() => handleTaskSelect(!selected, taskNum)}
        />
      ) : (
        <MdCheckBoxOutlineBlank
          className=" text-gray-300"
          onClick={() => handleTaskSelect(!selected, taskNum)}
        />
      )}
      <h1 className="text-xs lg:text-md m-1 text-left">
        {taskName}+{selected ? "true" : "false"}
      </h1>
    </button>
  );
}

export default ServiceItem;
