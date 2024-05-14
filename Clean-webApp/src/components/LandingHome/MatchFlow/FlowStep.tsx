import React from "react";

interface Props {
  stepNum: number;
  stepDescrip: string;
  stepImage: string;
}

function FlowStep({ stepNum, stepDescrip, stepImage }: Props) {
  return (
    <div className="bg-white relative text-center m-2 border rounded-2xl">
      <div className="rounded-t-2xl relative block bg-pink-600 border-pink-600">
        <h1 className="font-bold text-lg md:text-5xl text-white">{stepNum}</h1>
      </div>

      <img src={`src/assets/${stepImage}.png`} className="rounded-2xl" />
      <h1 className="font-bold relative bottom-2 px-2 text-sm md:p-0 md:text-lg lg:text-xl">
        {stepDescrip}
      </h1>
    </div>
  );
}

export default FlowStep;
