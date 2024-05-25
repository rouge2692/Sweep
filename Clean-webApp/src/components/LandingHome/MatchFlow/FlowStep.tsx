// import React from "react";

interface Props {
  stepNum: number;
  stepDescrip: string;
  stepImage: string;
}

function FlowStep({ stepNum, stepDescrip, stepImage }: Props) {
  return (
    <div className="bg-white relative text-center m-1 md:m-2 border-2 rounded-2xl shadow-2xl">
      <div className="rounded-t-2xl relative bg-pink-600">
        <h1 className="font-bold text-lg md:text-5xl text-white">{stepNum}</h1>
      </div>

      <img src={`src/assets/${stepImage}.png`} className="rounded-2xl" />
      <h1 className="font-bold relative bottom-2 px-2 text-sm md:p-2 md:text-lg lg:text-xl">
        {stepDescrip}
      </h1>
    </div>
  );
}

export default FlowStep;
